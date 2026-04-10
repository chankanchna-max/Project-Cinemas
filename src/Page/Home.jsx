import React from "react";
import { Link } from "react-router-dom";
import { card } from "../data/data";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
  return (
    <div className="w-full mt-30">
      {/* <img
        className="w-full  sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover "
        src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/2e5a97ef-b988-4467-9f7b-2f7a0531d198.jpeg"
        alt="Legend Image"
      /> */}
      <Swiper modules={[Autoplay]} autoplay={{ delay: 2000 }} loop={true}>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/480251c7-01bb-478e-a18d-dba2a8d62a39.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/74ae3062-93f6-4acb-863b-82d4a49f076e.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/5885c4bb-3b08-4ca7-a29e-249ca35de19a.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/2e5a97ef-b988-4467-9f7b-2f7a0531d198.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/0ee58116-137c-4301-a9dd-875bb7d74bd9.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/20969bc8-e218-42f2-bc4a-d51b1c030e8f.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/ccaad67f-aeab-4608-93c0-f77b34c7311d.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/51aca33f-6826-443f-9fd1-77108bc5d564.jpeg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover"
            src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/9e378142-fd93-462f-82ee-de5c63892c7d.jpeg"
          />
        </SwiperSlide>
      </Swiper>
      <div className="w-11/12 m-auto min-h-screen text-white px-4 sm:px-6 md:px-10 py-6 md:py-10">
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-4xl font-semibold mb-6 md:mb-8">
          <h1 className="text-white bg-red-500/20 backdrop-blur-md py-2 px-5 rounded-full">
            Now Showing
          </h1>
          <h1 className="text-gray-500">|</h1>
          <Link to={"coming/"} className="text-gray-400">
            Coming Soon
          </Link>
        </div>
        {/* Card */}
        <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {card.map((c) => (
            // <div className="rounded-xl p-5 hover:scale-95 duration-300 transition-all shadow-2xl ">
            //   <img
            //     src={c["img"]}
            //     className="rounded-xl w-full h-[320px] sm:h-[320px] md:h-[400px] object-cover"
            //   />
            //   <h1 className="text-m mt-3 text-gray-300">07 Apr 2026</h1>
            //   <h1 className="text-m  text-white">Scare Out</h1>
            // </div>

            <Link key={c.id} to={`/detail/${c["id"]}`}>
              <Card title={c.title} img={c.img} date={c.date} />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-lg sm:text-xl md:text-3xl font-semibold mb-6 md:mb-8">
          <h1 className="text-white mt-20">What's new?</h1>
        </div>
      </div>
      <img
        className="w-full mb-10 sm:w-9/12 sm:mt-10 mx-auto sm:rounded-2xl object-cover "
        src="https://media-legend.sgp1.digitaloceanspaces.com/legend-prod/4dd2b7d3-8943-4fd4-b173-6a54c88172ff.jpeg"
        alt="Legend Image"
      />
    </div>
  );
};

export default Home;
