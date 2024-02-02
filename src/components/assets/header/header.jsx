import "./style.css";
import Logo from '../../reused/logo/logo.jsx';
import Navbar from '../navbar/navbar.jsx';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo-wrapper">
                        <a href="./app.js" className="header-logo-link">
                            <Logo />
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