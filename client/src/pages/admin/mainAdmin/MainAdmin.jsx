import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toggleMenu from "../toggleMenu";

import { UilShoppingBasket, UilUserCheck, UilRocket, UilCreditCardSearch, UilCommentVerify, UilBusSchool, UilSetting, UilSignin, UilBars, UilPalette, UilCommentAltChartLines, UilExpandArrowsAlt, UilDollarAlt, UilShoppingCart, UilStar, UilEye, UilEstate, UilListOlAlt } from '@iconscout/react-unicons'


const MainAdmin = () => {

    const navigate = useNavigate();
    const [orders, setOrders] = useState();
    const [products, setProducts] = useState([]);
    const [payments, setPayments] = useState();
    const [delivery, setDelivery] = useState();
    const [ordersStatistic, setOrdersStatistic] = useState([]);
    let price = 0;

    for (let i = 0; i < ordersStatistic.length; i++) {
        price = price + ordersStatistic[i].price;
    }

    const link = 'http://localhost:8800/'

    useEffect(() => {
        const fetch = async () => {
            try{
                const res = await axios.get(link + 'products')
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        fetch()
    }, [])
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'orders/new')
                setOrders(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get(link + 'orders/end')
                setOrdersStatistic(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetch()
    }, [])

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
        <div className="container">
            <div className="navigation">
                <ul>
                    <li>
                        <a>
                            <span className="icon"></span>
                            <span className="title">
                                <h5 className="logo">Andrea Fesion</h5>
                            </span>
                        </a>
                    </li>
                    <li className="tablinks active" onClick={() => {
                    }}>
                        <NavLink to={'/admin/main'}>
                            <span className="icon"><UilEstate /></span>
                            <span className="title">Главная</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/categories'}>
                            <span className="icon"><UilListOlAlt /></span>
                            <span className="title">Категории</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/products'}>
                            <span className="icon"><UilShoppingBasket /></span>
                            <span className="title">Товары</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/sizes'}>
                            <span className="icon"><UilExpandArrowsAlt /></span>
                            <span className="title">Размеры</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/colors'}>
                            <span className="icon"><UilPalette /></span>
                            <span className="title">Цвета</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/customers'}>
                            <span className="icon"><UilUserCheck /></span>
                            <span className="title">Покупатели</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/manufacture'}>
                            <span className="icon"><UilStar /></span>
                            <span className="title">Производители</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/orders'}>
                            <span className="icon"><UilCommentVerify /></span>
                            <span className="title">Заказы</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/payments'}>
                            <span className="icon"><UilCreditCardSearch /></span>
                            <span className="title">Оплаты</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/delivery'}>
                            <span className="icon"><UilBusSchool /></span>
                            <span className="title">Доставка</span>
                        </NavLink>
                    </li>
                    <li className="tablinks" onClick={() => {
                    }}>
                        <NavLink to={'/admin/settings'}>
                            <span className="icon"><UilSetting /></span>
                            <span className="title">Настройки</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'}>
                            <span className="icon"><UilSignin /></span>
                            <span className="title">Выйти</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="main">
                <div className="topbar">
                    <div className="toggle" onClick={toggleMenu}>
                        <UilBars />
                    </div>
                    <div className="search">
                        <label>
                            {/* <TextField/> */}
                            <i className="uil uil-search"></i>
                        </label>
                    </div>
                    <div className="user">
                        {/* <img src="./../images/person.png"> */}
                    </div>
                </div>

                <div id="Dashboard" className="tabcontent">
                    <div className="cardBox">
                        <div className="card">
                            <div className="">
                                <div className="numbers">{products.length}</div>
                                <div className="cardName">Товаров</div>
                            </div>
                            <div className="iconBox">
                                <UilRocket size={50} />
                            </div>
                        </div>

                        <div className="card">
                            <div className="">
                                <div className="numbers">{ordersStatistic.length}</div>
                                <div className="cardName">Продажи</div>
                            </div>
                            <div className="iconBox">
                                <UilShoppingCart size={50} />
                            </div>
                        </div>

                        <div className="card">
                            <div className="">
                                <div className="numbers">208</div>
                                <div className="cardName">Коментарии</div>
                            </div>
                            <div className="iconBox">
                                <UilCommentAltChartLines size={50} />
                            </div>
                        </div>

                        <div className="card">
                            <div className="">
                                <div className="numbers">{price} BYN</div>
                                <div className="cardName">Выручка</div>
                            </div>
                            <div className="iconBox">
                                <UilDollarAlt size={50} />
                            </div>
                        </div>
                    </div>

                    <div className="details">
                        <div className="recentOrders">
                            <div className="cardHeader">
                                <h2>Список новых заказов</h2>
                                <NavLink to={'/admin/orders'}>
                                    <a className="tablinks btn">Посмотреть все</a>
                                </NavLink>
                            </div>
                            <div className="overflow-x">
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Номер заказа</td>
                                            <td>Цена</td>
                                            <td>Оплата</td>
                                            <td>Доставка</td>
                                            <td>Статус</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orders.map(order => (
                                            <tr key={order.id}>

                                                <td>{order.number}</td>
                                                <td>{order.price}</td>
                                                <td>
                                                    {payments?.map(payment => (
                                                        (payment.id === order.payment) ? (payment.name) : ('')
                                                    ))}
                                                </td>
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
                        <div className="recentCustomers">
                            <div className="cardHeader">
                                <h2>Покупатели</h2>
                            </div>
                            <table>
                                <tbody className="usersMainBlock">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainAdmin