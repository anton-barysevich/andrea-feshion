import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo1.jpg"
import Header from "./components/Header";
import Categories from "./components/Categories";

const MainPage = () => {
    return (
        <div className="Maincontainer">
            <Header/>
        <Categories/>

        </div>

    )
}

export default MainPage