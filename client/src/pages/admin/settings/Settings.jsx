import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import toggleMenu from "../toggleMenu";
import { UilMultiply, UilPen, UilShoppingBasket, UilUserCheck, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'



const Settings = () => {
    const link = 'http://localhost:8800/'

    const navigate = useNavigate();
    const [settings, setSettings] = useState();

    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [adress, setAdress] = useState();
    const [products_in_line, setProducts_in_line] = useState();
    const [products_on_page, setProducts_on_page] = useState();


    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'settings')
                setPhone(res.data[0].phone);
                setEmail(res.data[0].email);
                setAdress(res.data[0].adress);
                setProducts_in_line(res.data[0].products_in_line);
                setProducts_on_page(res.data[0].products_on_page);
                setSettings(res.data[0]);
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    const handleChange = (e) => {
        setPhone((e.target.name === 'phone') ? (e.target.value) : (phone));
        setEmail((e.target.name === 'email') ? (e.target.value) : (email));
        setAdress((e.target.name === 'adress') ? (e.target.value) : (adress));
        setProducts_in_line((e.target.name === 'products_in_line') ? (e.target.value) : (products_in_line));
        setProducts_on_page((e.target.name === 'products_on_page') ? (e.target.value) : (products_on_page));
        
        setSettings(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put(link + 'settings/update', settings);
            navigate('/admin/settings')
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
                    <li class="tablinks" onClick={() => {
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
                    <li class="tablinks active" onClick={() => {
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
                            <h2>Настройки</h2>
                            <a class="tablinks btn" onClick={handleClick} >Сохранить</a>
                        </div>
                        <div className="form">

                            {/* paymentInfo[0].name
                            paymentInfo[0].description */}
                            <div className="kontakt">
                                <h3>Товары</h3>
                                <div className="inLine">
                                    <label>Вывод товаров на странице</label>
                                    <input type="number" placeholder="Товаров на страницу" name="products_on_page" value={products_on_page} min={10} max={50} onChange={handleChange} />
                                </div>

                                <div className="inLine">
                                    <label>Вывод товаров в линии</label>
                                    <input type="number" placeholder="Товаров в линии" name="products_in_line" value={products_in_line} min={2} max={7} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="kontakt">
                                <h3>Контаты</h3>
                                <div className="inLine">
                                    <label>Номер Телефона</label>
                                    <input type="tel" placeholder="Номер телефона" name="phone" value={phone} onChange={handleChange} />
                                </div>

                                <div className="inLine">
                                    <label>Email</label>
                                    <input type="email" placeholder="email" name="email" value={email} onChange={handleChange} />
                                </div>


                            </div>

                            <div className="kontakt">
                                <h3>Адресс</h3>
                                <textarea type="text" placeholder="Адресс" name="adress" value={adress} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Settings