import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import bitmap1 from "../assets/img/bitmap1.webp";
import bitmap2 from "../assets/img/bitmap2.webp";
import bitmap3 from "../assets/img/bitmap3.webp";
import bitmap4 from "../assets/img/bitmap4.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { styles } from "../styles";
import { Data, data } from "../Data/data";
import { Link } from "react-router-dom";

const katalog = () => {
  return (
    <div>
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[500px]"
        >
          <SwiperSlide className="relative">
            <img className="w-full h-[500px]" src={bitmap1} alt="" />
            <div className="absolute left-0 top-0 w-full h-full">
              <h2 className="text-white bg-black bg-opacity-60 h-full text-6xl font-bold text-center py-8">
                Финальная ликвидация склада Авто! <br /> До 15-го апреля!
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="w-full h-[500px]" src={bitmap2} alt="" />
            <div className="absolute left-0 top-0 w-full h-full">
              <h2 className="text-white bg-black bg-opacity-60 h-full text-6xl font-bold text-center py-8">
                Финальная ликвидация склада Авто! <br /> До 15-го апреля!
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="w-full h-[500px]" src={bitmap3} alt="" />
            <div className="absolute left-0 top-0 w-full h-full">
              <h2 className="text-white bg-black bg-opacity-60 h-full text-6xl font-bold text-center py-8">
                Финальная ликвидация склада Авто! <br /> До 15-го апреля!
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="w-full h-[500px]" src={bitmap4} alt="" />
            <div className="absolute left-0 top-0 w-full h-full">
              <h2 className="text-white bg-black bg-opacity-60 h-full text-6xl font-bold text-center py-8">
                Финальная ликвидация склада Авто! <br /> До 15-го апреля!
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
      <div className={`${styles.container}`}>
        <ul className="grid grid-cols-4 gap-5">
          {Data.map((data) => {
            return (
              <Link className="flex items-center border my-5 py-4 px-4 rounded-xl w-60">
                <img src={data.Image} alt="" />
                <b className="px-2">{data.title}</b>
                <b>{data.price}</b>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className={`${styles.container}`}>
        <div className="my-10">
        <h2 className="text-4xl font-bold">ghjkl;</h2>
        <div>
          <div className="grid grid-cols-3 gap-7 my-10">
            {data.map((data) => {
              return (
                <div className="relative">
                  <Link>
                    <img src={data.Image} alt="" />
                  </Link>
                  <div className="absolute left-0 top-0 w-full h-full flex">
                    <div className="w-32 h-10 bg-white my-3 ml-4 text-center py-2 rounded-3xl font-semibold">
                      <h3>1 владелец</h3>
                    </div>
                    <div className="w-16 h-10 bg-white my-3 ml-4 text-center py-2 rounded-3xl">
                      <b>2018</b>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default katalog;
