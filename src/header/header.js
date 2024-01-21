import "./style.css";
import { ReactComponent as HeaderLogoImg } from '../img/logo.svg';
import Navbar from '../navbar/navbar.js';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-row">
                        <a href="./app.js" className="header-logo-link">
                            <HeaderLogoImg />
                            <ul className="logo"> 
                                <li className="logo__item"><b>Краснолесья</b><span>14<em>к</em>5</span></li>
                                <li className="logo__item">Товарищество собственников жилья</li>
                            </ul>
                        </a>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>

    );
  }
  
  export default Header;