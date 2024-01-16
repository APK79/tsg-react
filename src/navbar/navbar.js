import "./style.css";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-list__item"><a href="#!" className="nav-list__link">О компании</a></li>
                <li className="nav-list__item"><a href="#!" className="nav-list__link">Новости</a></li>
                <li className="nav-list__item"><a href="#!" className="nav-list__link">Информация</a></li>
                <li className="nav-list__item"><a href="#!" className="nav-list__link">Контакты</a></li>
            </ul>
        </nav>
    );
  }
  
  export default Navbar;