import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import toggleMenu from "../toggleMenu";
import {UilShoppingBasket, UilUserCheck, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'


const OrderPage = () => {
    const link = 'http://localhost:8800/';

    const [status, setStatus] = useState();
    const [order, setOrder] = useState({});
    const [payments, setPayments] = useState();
    const [delivery, setDelivery] = useState();

    const navigate = useNavigate();
    const location = useLocation();

    const orderId = location.pathname.split("/")[3]

    const a = '11111';

    
    

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'orders/' + orderId)
                setStatus(res.data[0].status)
                setOrder(res.data[0])
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    const handleChange = (e) => {
        setStatus((e.target.name === 'status') ? (e.target.value) : (status));
        setOrder(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.put(link + 'orders/' + orderId, order);
            navigate('/admin/orders')
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'payments')
                setPayments(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

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
                    <li class="tablinks active" onClick={() => {
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
                            <h2>Заказ {order.number}
                                <select className={(order.status === 'delivered') ? ('statusSelect delivered') : (
                                    (order.status === 'pending') ? ('statusSelect pending') : (
                                        (order.status === 'return') ? ('statusSelect return') : (
                                            (order.status === 'inprogress') ? ('statusSelect inprogress') : (
                                                (order.status === 'sended') ? ('statusSelect sended') : ('')
                                            )
                                        )
                                    )
                                )} name="status" value={status} onChange={handleChange}>
                                    <option className="delivered" name="status" value={'delivered'}>Готово</option>
                                    <option className="sended" name="status" value={'sended'}>Отпрален</option>
                                    <option className="inprogress" name="status" value={'inprogress'}>В процессе</option>
                                    <option className="pending" name="status" value={'pending'}>В ожидании</option>
                                    <option className="return" name="status" value={'return'}>Возврат</option>
                                </select>
                            </h2>
                            <a class="tablinks btn" onClick={handleClick} >Сохранить</a>
                        </div>
                        <div className="form">
                            <div className="kontakt">
                                <h3>Заказ</h3>
                                <div className="inLine">
                                    <p><span className="bold">Заказ:</span> Товары тут будут</p>
                                    <p><span className="bold">Цена:</span> {order.price}  BYN</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="kontakt">
                                <h3>Получатель</h3>
                                <div className="inLine">
                                    <p><span className="bold">Заказчик:</span> {order.name} {order.surname}</p>
                                    <p><span className="bold">Номер телефона:</span> {order.phone}</p>
                                    <p><span className="bold">Email:</span> {order.email}</p>
                                    <p><span className="bold">Адрес:</span> {order.adress}</p>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="kontakt">
                                <h3>Доставка и оплата</h3>
                                <div className="inLine">
                                    <p><span className="bold">Оплата:</span> {payments?.map(payment => (
                                        (payment.id === order.payment) ? (payment.name) : ('')
                                    ))}</p>
                                    <p><span className="bold">Доставка:</span> {delivery?.map(item => (
                                        (item.id === order.delivery) ? (item.name) : ('')
                                    ))}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrderPage