import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import toggleMenu from "../toggleMenu";
import { UilTimes, UilFileUploadAlt, UilCloudUpload, UilShoppingBasket, UilUserCheck, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'
import Select, { ActionMeta, OnChangeValue } from 'react-select';





const AddTowar = () => {
    const link = 'http://localhost:8800/'
    const [product, setProduct] = useState({});
    const [categories, setCategories] = useState();
    const [manufacture, setManufacture] = useState();
    const [sizes, setSizes] = useState();
    const [colors, setColors] = useState();
    const [images, setImages] = useState();
    const [fileName, setFileName] = useState();

    const sizeOptions = [];
    const colorsOptions = [];
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
                const res = await axios.get(link + 'sizes')
                setSizes(res.data);

            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'colors')
                setColors(res.data);

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
                setManufacture(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])



    sizes?.map(size => (
        sizeOptions.push({ 'value': `${size.size}`, 'label': `${size.size}` },)
    ))

    colors?.map(color => (
        colorsOptions.push({ 'value': `${color.name}`, 'label': `${color.name}` },)
    ))


    const navigate = useNavigate()
    
    const sizesChange = (sizesArray) => {
        const lastArray = []
        const array = sizesArray;
        for(let i = 0; i < array.length; i++){
            lastArray.push(array[i].value)
        }
        setProduct(prev => ({ ...prev, ['sizes'] : lastArray.toString() }))
        
    }

    const colorsChange = (colorsArray) => {
        const lastColorsArray = []
        const array = colorsArray;
        for(let i = 0; i < array.length; i++){
            lastColorsArray.push(array[i].value)
        }
        setProduct(prev => ({ ...prev, 'colors': lastColorsArray.toString() }))
       

    }
    const handleChange = (e) => {
        setImages((e.target.name === 'images') ? (e.target.files[0].name) : (null))
        setFileName((e.target.name === 'images') ? (e.target.files[0].name) : (null))
        setProduct(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post(link + 'products', product);
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
                            <h2>Добавить Товар</h2>
                            <a class="tablinks btn" onClick={handleClick}>Добавить</a>
                        </div>
                        <div className="form">
                            <div className="imageInput"
                                onClick={() => document.querySelector('.input-field').click()}
                            >
                                <input type="file" accept="images/*" name="images" className="input-field" hidden
                                    onChange={handleChange}
                                />
                                <UilCloudUpload className={'color-secondary'} size={60} />
                                <p>Загрузите главное изображение</p>
                            </div>
                            {(images) ? (
                                < section className="imageDescription">
                                    <div className="imageDescription">
                                        <UilFileUploadAlt className={'color-secondary'} />
                                        <span>
                                            {fileName}
                                        </span>
                                    </div>
                                    <UilTimes className={'closeImage'} onClick={() => {
                                        setFileName(null)
                                        setImages(null)
                                    }} />
                                </section>
                            ) : ('')}
                            <input type="text" placeholder="Название" name="name" onChange={handleChange} />
                            <textarea type="text" placeholder="Описание" name="description" onChange={handleChange} />
                            <input type="text" placeholder="Цена" name="price" onChange={handleChange} />
                            <label>Размеры</label>
                            <Select
                                closeMenuOnSelect={false}
                                defaultValue={null}
                                isMulti
                                options={sizeOptions}
                                name={"sizes"}
                                onChange={sizesChange}
                            />
                            {/* <input type="text" placeholder="Размеры" name="sizes" onChange={handleChange} /> */}
                            <label>Цвета</label>
                            <Select
                                closeMenuOnSelect={false}
                                defaultValue={null}
                                isMulti
                                options={colorsOptions}
                                name="colors"
                                onChange={colorsChange}
                            />
                            {/* <input type="text" placeholder="Цвета" name="colors" onChange={handleChange} /> */}
                            <label>Изображения</label>
                            <div className="imageInput"
                                onClick={() => document.querySelector('.input-field').click()}
                            >
                                <input type="file" accept="images/*" name="images" className="input-field" hidden multiple
                                    onChange={handleChange}
                                />
                                <UilCloudUpload className={'color-secondary'} size={60} />
                                <p>Загрузите оставшиешися изображения</p>
                            </div>
                            {(images) ? (
                                < section className="imageDescription">
                                    <div className="imageDescription">
                                        <UilFileUploadAlt className={'color-secondary'} />
                                        <span>
                                            {fileName}
                                        </span>
                                    </div>
                                    <UilTimes className={'closeImage'} onClick={() => {
                                        setFileName(null)
                                        setImages(null)
                                    }} />
                                </section>
                            ) : ('')}
                            <label>Категория</label>
                            <select name="category" onChange={handleChange}>
                                {categories?.map(category => (
                                    <option name="category" value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <label>Производитель</label>
                            <select name="manufacture" onChange={handleChange}>
                                {manufacture?.map(item => (
                                    <option name="manufacture" value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                            <label>Статус товара</label>
                            <select name="status" onChange={handleChange}>
                                <option name="status" value={null}>Обычный товар</option>
                                <option name="status" value={'new'}>Новый</option>
                                <option name="status" value={'sale'}>Распродажа</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default AddTowar