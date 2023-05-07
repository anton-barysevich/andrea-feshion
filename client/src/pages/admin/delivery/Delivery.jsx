import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import toggleMenu from "../toggleMenu";
import { UilMultiply, UilPen, UilShoppingBasket, UilUserCheck, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'


const Delivery = () => {
    const [delivery, setDelivery] = useState();
    const navigate = useNavigate()
    const link = 'http://localhost:8800/'
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'delivery')
                setDelivery(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(link + 'delivery/' + id);
            window.location.reload()
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
                    <li class="tablinks active" onClick={() => {
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
                            <h2>Доставка</h2>
                            <NavLink to={'/admin/delivery/add'}>
                                <a class="tablinks btn">Добавить способ доставки</a>
                            </NavLink>
                        </div>
                        <div className="overflow-x">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Название</td>
                                        <td>Описание</td>
                                        <td>Цена</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody class="categoryBlock">
                                    {delivery?.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.price} BYN</td>
                                            <td>
                                                <UilPen
                                                    onClick={() => { navigate(`update/${item.id}`) }}
                                                />
                                            </td>
                                            <td>
                                                <UilMultiply
                                                    onClick={() => handleDelete(item.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Delivery