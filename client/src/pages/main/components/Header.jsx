import React from "react";
import { NavLink } from "react-router-dom";
import { UilShoppingBasket } from '@iconscout/react-unicons'

const Header = () => {
    return(
        <div>
            <div className="header">
                <div className="logo">
                    Andrea<br></br>Feshion
                </div>
                <div className="search">
                    <input type="search"></input>
                    <NavLink to={'/admin/main'}>Admin</NavLink>
                </div>
                <div className="basket">
                    <UilShoppingBasket />
                </div>
            </div>
            
        </div>
    )
}

export default Header