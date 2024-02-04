import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import lakatsa from "../assets/img/lakatsa.png";
import phone from '../assets/img/phone.png'

const Header = () => {
  
  return (
    <header className={`${styles.container}`}>
      <div className="flex justify-between items-center my-10">
        <Link className="text-2xl font-bold text-red-500" to="/katalog">
          AвтоЭксперт
        </Link>
        <nav>
          <ul>
            <li className="flex space-x-8">
              <div className="flex ml-10">
            <img className="mx-2" src={lakatsa} alt="" />
              <h2 className="text-lg opacity-70">Москва</h2>
              </div>
              <Link className="text-xl" to="/katalog">Каталог</Link>
              <Link className="text-xl" to="/aksiya">Акции</Link>
              <Link className="text-xl" to="/kredid">Кредит</Link>
              <Link className="text-xl" to="/kantact">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="flex ml-60 space-x-4">
          <img src={phone} alt="" />
          <b>8 880 999 74 74</b>
        </div>
      </div>
    </header>
  );
};

export default Header;
