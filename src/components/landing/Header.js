import React from "react";
import profileIcon from '../../images/profile.svg';
import gasIcon from '../../images/carbon_charging-station.svg';
import lawIcon from '../../images/law.svg';
import menuIcon from '../../images/menu.svg';
import {Link} from "react-router-dom";

function Header(props){

    return (
        <header className="header" id="header">
            <Link to='/' className='header__logo'>Logo</Link>
            <div className="header__search">
                <button className="search-btn"></button>
                <input className="header__search-input text-input" type="text" id="search" placeholder="Найдите ваш электромобиль" />
            </div>
            <div className="header__menu">
                <Link to='/sign-up' className="button button__image-profile">
                    <img className="button__image" src={profileIcon} alt={''}/>
                </Link>
                <div className="button button__image-gas">
                    <img className="button__image button__image-big" src={gasIcon} alt={''}/>
                </div>
                <div className="button">
                    <img className="button__image button__image-big" src={lawIcon} alt={''}/>
                </div>
                <div className="button">
                    <img className="button__image button__image-mini" src={menuIcon} alt={''}/>
                </div>
            </div>
        </header>
    );
}

export default Header;