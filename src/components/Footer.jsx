import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#0A1B28] w-full py-10">
    <div className={`${styles.container}`}>
        <div className="flex items-center">
          <div>
          <Link className="text-white text-2xl font-bold pb-4 inline-block" to="/katalog">AвтоЭксперт</Link>
          <p className="text-white opacity-70">Автомобили с пробегом</p>
          </div>
          <div className="flex text-white space-x-9 px-20">
            <Link className="text-xl" to="/katalog">Каталог</Link>
            <Link className="text-xl" to="aksiya">Акции</Link>
            <Link className="text-xl" to="kredid">Кредит</Link>
            <Link className="text-xl" to="kantact">Контакты</Link>
          </div>
          <div>
            <p className="text-white text-xl font-bold pl-56 pb-4">8 880 999 74 74</p>
            <p className="text-red-500 pl-56">info@auto-expert.ru</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#112a3d] py-7">
      <div className={`${styles.container}`}>
    <p className="text-white opacity-70">© 2023.  - Автоэксперт. Все права защищены</p>
    <p className="text-white opacity-70 pl-[550px]">Политика конфиденциальности</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
