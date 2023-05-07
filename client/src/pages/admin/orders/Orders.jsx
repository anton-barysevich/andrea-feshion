import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import toggleMenu from "../toggleMenu";
import { UilMultiply, UilPen, UilShoppingBasket, UilUserCheck, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'



const Orders = () => {

    const navigate = useNavigate();
    const [orders, setOrders] = useState();
    const [payments, setPayments] = useState();
    const [delivery, setDelivery] = useState();

    const link = 'http://localhost:8800/'
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'orders')
                setOrders(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])


    /// Генерация номера заказа
    // const number = 'S' + `${((orders.length - 1) < 10) ? (`00000`) : (((orders.length - 1) > 9) ? (`0000`) : (((orders.length - 1) > 99) ? (`000`) : (((orders.length - 1) > 999) ? (`00`) : (((orders.length - 1) > 9999) ? (`0`) : ('')))))}` + `${orders[(orders.length - 1)].id + 1}`;
    // console.log(number);



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
                            <h2>Список заказов</h2>
                        </div>
                        <div className="overflow-x">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Номер заказа</td>
                                        <td>Цена</td>
                                        <td>Оплата</td>
                                        <td>Номер телефона</td>
                                        <td>Email</td>
                                        <td>Доставка</td>
                                        <td>Статус</td>
                                        <td></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders?.map(order => (
                                        <tr key={order.id}>

                                            <td>{order.number}</td>
                                            <td>{order.price} BYN</td>
                                            <td>
                                                {payments?.map(payment => (
                                                    (payment.id === order.payment) ? (payment.name) : ('')
                                                ))}
                                            </td>
                                            <td>{order.phone}</td>
                                            <td>{order.email}</td>
                                            <td>
                                                {delivery?.map(item => (
                                                    (item.id === order.delivery) ? (item.name) : ('')
                                                ))}
                                            </td>
                                            <td><span className={(order.status === 'delivered') ? ('status delivered') : (
                                                (order.status === 'pending') ? ('status pending') : (
                                                    (order.status === 'return') ? ('status return') : (
                                                        (order.status === 'inprogress') ? ('status inprogress') : (
                                                            (order.status === 'sended') ? ('status sended') : ('')
                                                        )
                                                    )
                                                )
                                            )}>
                                                {(order.status === 'delivered') ? ('Готово') : (
                                                    (order.status === 'pending') ? ('В ожидании') : (
                                                        (order.status === 'return') ? ('Возврат') : (
                                                            (order.status === 'inprogress') ? ('В процессе') : (
                                                                (order.status === 'sended') ? ('Отправлен') : ('')
                                                            )
                                                        )
                                                    )
                                                )}
                                            </span></td>

                                            <td>
                                                <UilEye
                                                    onClick={() => {

                                                        navigate(`/admin/orders/${order.id}`)
                                                    }}
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

export default Orders