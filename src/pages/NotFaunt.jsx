import { Link } from "react-router-dom";
import error from "../assets/img/error.png";

const NotFaunt = () => {
  return (
    <div>
      <div className="py-16 text-center">
        <h2 className="text-center text-3xl font-semibold">
          SAHIFA TOPILMADI!
        </h2>
        <div className="flex justify-center">
          <img className="w-[300px] h-[300px] my-8" src={error} alt="" />
        </div>
        <Link
          className="inline-block w-40 h-8 bg-[#D87D4A] text-center text-white font-semibold"
          to="/katalog"
        >
          katalog qaytish
        </Link>
      </div>
    </div>
  );
};

export default NotFaunt;
