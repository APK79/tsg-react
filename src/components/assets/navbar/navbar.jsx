import "./style.css";
import React, { useRef, useState } from 'react';
import { ReactComponent as MobileNavbarImg } from '../../img/icons/menu.svg';
import { useClickOutside } from "../../../hooks/useClickOutside";
const Navbar = () => {


    const [isOpened, setIsOpened] = useState(false);
    
    const handlerMenu = () => setIsOpened(!isOpened);
    const addClassOpened = () => (isOpened) ? 'opened' : '';
    
    const navMenuRef = useRef(null);
    useClickOutside(navMenuRef, () => {
        if (isOpened) setTimeout (() => setIsOpened(false), 50);
    });

    return (
        <nav className="nav">
            <div className="header-navbar">
                <div className="header-navbar-wrapper">
                        <button type="button" className={`header-navbar__mobile-nav-list__icon ${ addClassOpened() }`} onClick={ handlerMenu } ref={ navMenuRef }>
                            <MobileNavbarImg />
                        </button>
                    <ul className={`header-navbar__nav-list ${ addClassOpened() }`} ref={ navMenuRef }>
                        <li className="header-navbar__nav-list__item"><a href="../pages/login/login.js" className="header-navbar__nav-list__link">О компании</a></li>
                        <li className="header-navbar__nav-list__item"><a href="#!" className="header-navbar__nav-list__link">Новости</a></li>
                        <li className="header-navbar__nav-list__item"><a href="#!" className="header-navbar__nav-list__link">Информация</a></li>
                        <li className="header-navbar__nav-list__item"><a href="#!" className="header-navbar__nav-list__link">Контакты</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  
  export default Navbar;