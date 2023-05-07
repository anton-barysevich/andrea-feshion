import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UilShoppingBasket, UilUserCheck, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'
import toggleMenu from "../toggleMenu";


const UpdateSize = () => {
    const link = 'http://localhost:8800/';

    const [size, setSize] = useState();
    const [grud, setGrud] = useState();
    const [talia, setTalia] = useState();
    const [bedra, setBedra] = useState();
    const [rost, setRost] = useState();

    const [sizes, setSizes] = useState({});

    const navigate = useNavigate();
    const location = useLocation();

    const SizeId = location.pathname.split("/")[4]


    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'sizes/' + SizeId)
                setSize(res.data[0].size);
                setGrud(res.data[0].grud);
                setTalia(res.data[0].talia);
                setBedra(res.data[0].bedra);
                setRost(res.data[0].rost)
                setSizes(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    const handleChange = (e) => {
        setSize((e.target.name === 'size') ? (e.target.value) : (size));
        setGrud((e.target.name === 'grud') ? (e.target.value) : (grud));
        setTalia((e.target.name === 'talia') ? (e.target.value) : (talia));
        setBedra((e.target.name === 'bedra') ? (e.target.value) : (bedra));
        setRost((e.target.name === 'rost') ? (e.target.value) : (rost));

        setSizes(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put(link + 'sizes/update/' + SizeId, sizes);
            navigate('/admin/sizes')
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
                    <li class="tablinks active" onClick={() => {
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
                            <h2>Изменить Размер</h2>
                            <a class="tablinks btn" onClick={handleClick}>Изменить</a>
                        </div>
                        <div className="form">
                            <input type="text" placeholder="Размер" name="size" value={size} onChange={handleChange} />
                            <input type="text" placeholder="Охват Груди" name="grud" value={grud} onChange={handleChange} />
                            <input type="text" placeholder="Охват Талии" name="talia" value={talia} onChange={handleChange} />
                            <input type="text" placeholder="Охват Бёдер" name="bedra" value={bedra} onChange={handleChange} />
                            <input type="text" placeholder="Рост" name="rost" value={rost} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UpdateSize