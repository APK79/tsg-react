import "./style.css";
import logo from '../img/logo_t.svg';
import Navbar from '../navbar/navbar.js';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-row"><a href="./app.js">
                        <img src={logo} title="Сайт ТСЖ Краснолесья 14/5" alt="Сайт ТСЖ Краснолесья 14/5"/>
                        <ul className="logo"> 
                            <li className="logo__item"><b>Краснолесья</b><span>14<em>к</em>5</span></li>
                            <li className="logo__item">Товарищество собственников жилья</li>
                        </ul></a>
                    </div>
                    <Navbar />
                </div>
            </div>
        </header>

    );
  }
  
  export default Header;