import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import { getFileStream, uploadFile } from './s3.js';

import fs from 'fs';
import util from 'util';
const unlinkFile = util.promisify(fs.unlink)

import multer from 'multer';
const upload = multer({ dest: 'uploads/' })


const app = express();
const db = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "andrea_fesion"
})

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.json('Hello its a beckand')
})


app.get('/images/:key', (req, res) => {
    console.log(req.params)
    const key = req.params.key
    const readStream = getFileStream(key);

    readStream.pipe(res)
})

app.post('/images', upload.single('image'), async (req, res) => {
    const file = req.file
    console.log("file: ",file)

    const result = await uploadFile(file)
    await unlinkFile(file.path)
    console.log(result)
    const description = req.body.description
    res.send({imagePath: `/images/${result.Key}`})
})

// CUSTOMERS

app.get('/customers', (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

// CATEGORIES

app.get('/categories', (req, res) => {
    const q = "SELECT * FROM categories";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/categories/:id', (req, res) => {
    const q = "SELECT `name`, `type` FROM categories WHERE id = ?";
    const categoryId = req.params.id;
    db.query(q, categoryId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post('/categories', (req, res) => {
    const q = 'INSERT INTO categories (`name`) VALUES (?)';
    const values = [req.body.name]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('Category has been added')
    });
})

app.put('/categories/update/:id', (req, res) => {
    const categoryId = req.params.id;
    const q = 'UPDATE categories SET `name` = ? WHERE id = ?';
    const values = [req.body.name]
    db.query(q, [...values, categoryId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.delete('/categories/:id', (req, res) => {
    const categoryId = req.params.id;
    const q = "DELETE FROM categories WHERE id = ?"

    db.query(q, [categoryId], (err, data) => {
        if (err) return res.json(err)
        return res.json('Category has been deleted')
    })
})

// PRODUCTCS

app.get('/products', (req, res) => {
    const q = "SELECT * FROM products";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});
app.get('/products/:id', (req, res) => {
    const q = "SELECT `name`, `description`, `price`, `sizes`, `colors`, `category`, `manufacture`, `status` FROM products WHERE id = ?";
    const productsId = req.params.id;
    db.query(q, productsId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post('/products', (req, res) => {
    const q = 'INSERT INTO products (`name`, `description`, `price`, `sizes`, `colors`, `category`, `manufacture`, `status`) VALUES (?)';
    const values = [req.body.name, req.body.description, req.body.price, req.body.sizes, req.body.colors, req.body.category, req.body.manufacture, req.body.status]
    
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('Product has been added')
    });
})

app.put('/products/update/:id', (req, res) => {
    const categoryId = req.params.id;
    const q = 'UPDATE products SET `name` = ?, `description` = ?, `price` = ?, `sizes` = ?, `colors` = ?, `category` = ?, `manufacture` = ?, `status` = ? WHERE id = ?';
    const values = [req.body.name, req.body.description, req.body.price, req.body.sizes, req.body.colors, req.body.category, req.body.manufacture, req.body.status]
    db.query(q, [...values, categoryId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.delete('/products/:id', (req, res) => {
    const categoryId = req.params.id;
    const q = "DELETE FROM products WHERE id = ?"

    db.query(q, [categoryId], (err, data) => {
        if (err) return res.json(err)
        return res.json('Product has been deleted')
    })
})

// DELIVERY

app.get('/delivery', (req, res) => {
    const q = "SELECT * FROM delivery";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/delivery/:id', (req, res) => {
    const q = "SELECT `name`, `description`, `price` FROM delivery WHERE id = ?";
    const deliveryId = req.params.id;
    db.query(q, deliveryId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post('/delivery', (req, res) => {
    const q = 'INSERT INTO delivery (`name`, `description`, `price`) VALUES (?)';
    const values = [req.body.name, req.body.description, req.body.price]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('Delivery has been added')
    });
})

app.put('/delivery/update/:id', (req, res) => {
    const deliveryId = req.params.id;
    const q = 'UPDATE delivery SET `name` = ?, `description` = ?, `price` = ? WHERE id = ?';
    const values = [req.body.name, req.body.description, req.body.price]
    db.query(q, [...values, deliveryId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.delete('/delivery/:id', (req, res) => {
    const categoryId = req.params.id;
    const q = "DELETE FROM delivery WHERE id = ?"

    db.query(q, [categoryId], (err, data) => {
        if (err) return res.json(err)
        return res.json('Delivery has been deleted')
    })
})

// PAYMENTS 

app.get('/payments', (req, res) => {
    const q = "SELECT * FROM payments";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/payments/:id', (req, res) => {
    const q = "SELECT `name`, `description` FROM payments WHERE id = ?";
    const paymentsId = req.params.id;
    db.query(q, paymentsId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post('/payments', (req, res) => {
    const q = 'INSERT INTO payments (`name`, `description`) VALUES (?)';
    const values = [req.body.name, req.body.description]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('Payments has been updated')
    });
})

app.put('/payments/update/:id', (req, res) => {
    const paymentsId = req.params.id;
    const q = 'UPDATE payments SET `name` = ?, `description` = ? WHERE id = ?';
    const values = [req.body.name, req.body.description]
    db.query(q, [...values, paymentsId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.delete('/payments/:id', (req, res) => {
    const categoryId = req.params.id;
    const q = "DELETE FROM payments WHERE id = ?"

    db.query(q, [categoryId], (err, data) => {
        if (err) return res.json(err)
        return res.json('Payments has been deleted')
    })
})

// SETTINGS
app.get('/settings', (req, res) => {
    const q = "SELECT * FROM settings";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.put('/settings/update', (req, res) => {
    const q = 'UPDATE settings SET `phone` = ?, `email` = ?, `adress` = ?, `products_in_line` = ?, `products_on_page` = ? WHERE id = 1';
    const values = [req.body.phone, req.body.email, req.body.adress, req.body.products_in_line, req.body.products_on_page]
    db.query(q, [...values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

// ORDERS

app.get('/orders', (req, res) => {
    const q = "SELECT * FROM orders";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/orders/new', (req, res) => {
    const q = "SELECT * FROM orders WHERE status = 'pending'";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/orders/end', (req, res) => {
    const q = "SELECT * FROM orders WHERE status = 'delivered'";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/orders/:id', (req, res) => {
    const q = "SELECT `number`, `status`, `price`, `products`, `adress`, `phone`, `email`, `name`, `surname`, `payment`, `delivery` FROM orders WHERE id = ?";
    const paymentsId = req.params.id;
    db.query(q, paymentsId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.put('/orders/:id', (req, res) => {
    const ordersId = req.params.id;
    const q = 'UPDATE orders SET `status` = ? WHERE id = ?';
    const values = [req.body.status]
    db.query(q, [...values, ordersId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

// MANUFACTURE


app.get('/manufacture', (req, res) => {
    const q = "SELECT * FROM manufacture";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/manufacture/:id', (req, res) => {
    const q = "SELECT `name`, `description` FROM manufacture WHERE id = ?";
    const manufactureId = req.params.id;
    db.query(q, manufactureId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post('/manufacture', (req, res) => {
    const q = 'INSERT INTO manufacture (`name`, `description`) VALUES (?)';
    const values = [req.body.name, req.body.description]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('Manufacture has been updated')
    });
})

app.put('/manufacture/update/:id', (req, res) => {
    const manufactureId = req.params.id;
    const q = 'UPDATE manufacture SET `name` = ?, `description` = ? WHERE id = ?';
    const values = [req.body.name, req.body.description]
    db.query(q, [...values, manufactureId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.delete('/manufacture/:id', (req, res) => {
    const categoryId = req.params.id;
    const q = "DELETE FROM manufacture WHERE id = ?"
    db.query(q, [categoryId], (err, data) => {
        if (err) return res.json(err)
        return res.json('Manufacture has been deleted')
    })
})


/// SIZES

app.get('/sizes', (req, res) => {
    const q = "SELECT * FROM sizes";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/sizes/:id', (req, res) => {
    const q = "SELECT `size`, `grud`, `talia`, `bedra`, `rost` FROM sizes WHERE id = ?";
    const sizesId = req.params.id;
    db.query(q, sizesId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post('/sizes', (req, res) => {
    const q = 'INSERT INTO sizes (`size`, `grud`, `talia`, `bedra`, `rost`) VALUES (?)';
    const values = [req.body.size, req.body.grud, req.body.talia, req.body.bedra, req.body.rost]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('Manufacture has been updated')
    });
})

app.put('/sizes/update/:id', (req, res) => {
    const sizesId = req.params.id;
    const q = 'UPDATE sizes SET `size` = ?, `grud` = ?, `talia` = ?, `bedra` = ?, `rost` = ? WHERE id = ?';
    const values = [req.body.size, req.body.grud, req.body.talia, req.body.bedra, req.body.rost]
    db.query(q, [...values, sizesId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.delete('/sizes/:id', (req, res) => {
    const sizesId = req.params.id;
    const q = "DELETE FROM sizes WHERE id = ?"
    db.query(q, [sizesId], (err, data) => {
        if (err) return res.json(err)
        return res.json('Size has been deleted')
    })
})


/// COLORS

app.get('/colors', (req, res) => {
    const q = "SELECT * FROM colors";
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
});

app.get('/colors/:id', (req, res) => {
    const q = "SELECT `name`, `color`FROM colors WHERE id = ?";
    const colorsId = req.params.id;
    db.query(q, colorsId, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.post('/colors', (req, res) => {
    const q = 'INSERT INTO colors (`name`, `color`) VALUES (?)';
    const values = [req.body.name, req.body.color]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json('Manufacture has been updated')
    });
})

app.put('/colors/update/:id', (req, res) => {
    const colorsId = req.params.id;
    const q = 'UPDATE colors SET `name` = ?, `color` = ? WHERE id = ?';
    const values = [req.body.name, req.body.color]
    db.query(q, [...values, colorsId], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    });
})

app.delete('/colors/:id', (req, res) => {
    const colorsId = req.params.id;
    const q = "DELETE FROM colors WHERE id = ?"
    db.query(q, [colorsId], (err, data) => {
        if (err) return res.json(err)
        return res.json('Size has been deleted')
    })
})


app.listen(8800, () => {
    console.log('Connected to Server')
})