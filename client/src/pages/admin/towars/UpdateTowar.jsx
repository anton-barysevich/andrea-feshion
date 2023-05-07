import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toggleMenu from "../toggleMenu";
import { UilMultiply, UilPen, UilShoppingBasket, UilUserCheck, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'



const UpdateTowar = () => {
    const link = 'http://localhost:8800/'

    const navigate = useNavigate();
    const location = useLocation();
    const ProductId = location.pathname.split("/")[4]
    const [categories, setCategories] = useState();
    const [manufactures, setManufactures] = useState();

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [sizes, setSizes] = useState();
    const [colors, setColors] = useState();
    const [category, setCategory] = useState();
    const [product, setProduct] = useState();
    const [manufacture, setManufacture] = useState();
    const [status, setStatus] = useState();

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'products/' + ProductId)
                setName(res.data[0].name);
                setDescription(res.data[0].description);
                setPrice(res.data[0].price);
                setSizes(res.data[0].sizes);
                setColors(res.data[0].colors);
                setCategory(res.data[0].category);
                setManufacture(res.data[0].manufacture);
                setStatus(res.data[0].status)
                setProduct(res.data[0]);
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'categories')
                setCategories(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'manufacture')
                setManufactures(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])


    const handleChange = (e) => {
        setName((e.target.name === 'name') ? (e.target.value) : (name));
        setDescription((e.target.name === 'description') ? (e.target.value) : (description));
        setPrice((e.target.name === 'price') ? (e.target.value) : (price));
        setSizes((e.target.name === 'sizes') ? (e.target.value) : (sizes));
        setColors((e.target.name === 'colors') ? (e.target.value) : (colors));
        setCategory((e.target.name === 'category') ? (e.target.value) : (category));
        setManufacture((e.target.name === 'manufacture') ? (e.target.value) : (manufacture));
        setStatus((e.target.name === 'status') ? (e.target.value) : (status))
        setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put(link + 'products/update/' + ProductId, product);
            navigate('/admin/products')
        } catch (err) {
            console.log(err)
        }
    }
    
    return (
        <div class="container">
            <div class="navigation">
                <ul>
                    <li>
                        <a>
                            <span class="icon"></span>
                            <span class="title">
                                <h5 class="logo">Andrea Fesion</h5>
                            </span>
                        </a>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/main'}>
                            <span class="icon"><UilEstate /></span>
                            <span class="title">Главная</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/categories'}>
                            <span class="icon"><UilListOlAlt /></span>
                            <span class="title">Категории</span>
                        </NavLink>
                    </li>
                    <li class="tablinks active" onClick={() => {
                    }}>
                        <NavLink to={'/admin/products'}>
                            <span class="icon"><UilShoppingBasket /></span>
                            <span class="title">Товары</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/sizes'}>
                            <span class="icon"><UilExpandArrowsAlt /></span>
                            <span class="title">Размеры</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/colors'}>
                            <span class="icon"><UilPalette /></span>
                            <span class="title">Цвета</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/customers'}>
                            <span class="icon"><UilUserCheck /></span>
                            <span class="title">Покупатели</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/manufacture'}>
                            <span class="icon"><UilStar /></span>
                            <span class="title">Производители</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/orders'}>
                            <span class="icon"><UilCommentVerify /></span>
                            <span class="title">Заказы</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/payments'}>
                            <span class="icon"><UilCreditCardSearch /></span>
                            <span class="title">Оплаты</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/delivery'}>
                            <span class="icon"><UilBusSchool /></span>
                            <span class="title">Доставка</span>
                        </NavLink>
                    </li>
                    <li class="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/settings'}>
                            <span class="icon"><UilSetting /></span>
                            <span class="title">Настройки</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <span class="icon"><UilSignin /></span>
                            <span class="title">Выйти</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div class="main">
                <div class="topbar">
                    <div class="toggle" onClick={toggleMenu}>
                        <UilBars />
                    </div>
                    <div class="search">
                        <label>
                            {/* <TextField/> */}
                            <i class="uil uil-search"></i>
                        </label>
                    </div>
                    <div class="user">
                        {/* <img src="./../images/person.png"> */}
                    </div>
                </div>

                <div id="Dashboard" class="tabcontent">
                    <div class="orders">
                        <div class="cardHeader">
                            <h2>Изменить Товар</h2>
                            <a class="tablinks btn" onClick={handleClick}>Изменить</a>
                        </div>
                        <div className="form">
                            <input type="text" placeholder="Название" name="name" value={name} onChange={handleChange} />
                            <textarea type="text" placeholder="Описание" name="description" value={description} onChange={handleChange} />
                            <input type="text" placeholder="Цена" name="price" value={price} onChange={handleChange} />
                            {/* <input type="file" placeholder="Изображение" name="title_image" onChange={handleChange} /> */}
                            <input type="text" placeholder="Размеры" name="sizes" value={sizes} onChange={handleChange} />
                            <input type="text" placeholder="Цвета" name="colors" value={colors} onChange={handleChange} />
                            <label>Категория</label>
                            
                            <select name="category" value={category} onChange={handleChange}>
                                {categories?.map(category => (
                                    <option name="category" value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <label>Производитель</label>
                            <select name="manufacture" value={manufacture} onChange={handleChange}>
                                {manufactures?.map(item => (
                                    <option name="manufacture" value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <select name="status" value={status} onChange={handleChange}>
                                <option name="status" value={null}>Обычный товар</option>
                                <option name="status" value={'new'}>Новый</option>
                                <option name="status" value={'sale'}>Распродажа</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UpdateTowar