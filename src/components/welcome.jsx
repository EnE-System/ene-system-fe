import React from "react";
import { images } from "../common";
import {
  GiEarthAfricaEurope,
  GiElectric,
  GiClockwiseRotation,
  GiNotebook,
} from "react-icons/gi";
import { RiTimeFill } from "react-icons/ri";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import Button from "./Button";
import Login from "../pages/Login";
const Welcome = () => {
  return (
    <div className="pb-5 py-5">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-6 justify-between  ">
              <h1 className="text-4xl font-semibold text-black">
                Optimize Your Energy, Minimize Your Costs
              </h1>
              <p className="text-black">
                Your smart companion for comprehensive energy efficiency audits.
                Simplify your path to energy savings. Our tool provides instant,
                actionable insights to reduce energy consumption and lower
                utility bills
              </p>
              <Button
                title="Begin Your Energy Audit"
                styles="!w-fit !bg-primary !scale-100 !rounded-full !text-white "
              />
            </div>
            <div>
              <div className="h-full">
                <img
                  src={images.image_one}
                  alt="Home_Image"
                  className=" object-cover aspect-square rounded-2xl "
                />
              </div>
            </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide className="flex flex-col justify-center items-center  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-6 justify-between  ">
              <h1 className="text-4xl font-semibold text-black">
                Discover The Power of Smart Energy Management
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center p-2 bg-slate-100 rounded-md w-full ">
                  <span className="bg-green-300 rounded-full p-1">
                    <GiEarthAfricaEurope className="text-white text-5xl" />
                  </span>
                  <div>
                    <h1 className="text-slate-600 font-medium ">
                      Reduce Carbon Footprint:{" "}
                    </h1>
                    <p className="text-slate-400 text-sm">
                      Track and minimize your environmental impact
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-2 bg-slate-100 rounded-md w-full ">
                  <span className="bg-primary rounded-full p-1">
                    <GiElectric className="text-text text-5xl" />
                  </span>
                  <div>
                    <h1 className="text-slate-600 font-medium ">
                      Cut Energy Costs:
                    </h1>
                    <p className="text-slate-400 text-sm">
                      Identify potential savings with precision analytics
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-2 bg-slate-100 rounded-md w-full ">
                  <span className="bg-blue-500 rounded-full p-1">
                    <GiClockwiseRotation className="text-white text-5xl" />
                  </span>
                  <div>
                    <h1 className="text-slate-600 font-medium ">
                      Real-Time Insights:{" "}
                    </h1>
                    <p className="text-slate-400 text-sm">
                      Instant recommendations tailored to your space
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-2 bg-slate-100 rounded-md w-full ">
                  <span className="bg-black rounded-full p-1">
                    <GiNotebook className="text-white text-5xl" />
                  </span>
                  <div>
                    <h1 className="text-slate-600 font-medium ">
                      Comprehensive Reporting:{" "}
                    </h1>
                    <p className="text-slate-400 text-sm">
                      Detailed, easy-to-understand energy performance reports
                    </p>
                  </div>
                </div>
              </div>
              <Button
                title="Begin Your Energy Audit"
                styles="!w-fit !bg-primary !scale-100 !rounded-full !text-white "
              />
            </div>

            <div className="h-full w-full">
              <img
                src={images.image_one}
                alt="Home_Image"
                className=" object-cover aspect-square rounded-2xl "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-6 justify-between  ">
              <h1 className="text-4xl font-semibold text-black">
                Your Energy Efficiency Journey in{" "}
                <span className="text-primary">3 Steps</span>
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center p-2 bg-slate-100 rounded-md w-full ">
                  <span className="bg-blue-500 rounded-full p-1">
                    <RiTimeFill className="text-text text-5xl" />
                  </span>
                  <div>
                    <p className="text-slate-400 text-sm">
                      Input your space details and information on current energy
                      usage
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-2 bg-slate-100 rounded-md w-full ">
                  <span className="bg-blue-500 rounded-full p-1">
                    <RiTimeFill className="text-text text-5xl" />
                  </span>
                  <div>
                    <p className="text-slate-400 text-sm">
                      Our AI analyzes your data and identifies efficiency
                      opportunities
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-center p-2 bg-slate-100 rounded-md w-full ">
                  <span className="bg-blue-500 rounded-full p-1">
                    <RiTimeFill className="text-white text-5xl" />
                  </span>
                  <div>
                    <p className="text-slate-400 text-sm">
                      Receive personalized recommendations and actionable
                      insights
                    </p>
                  </div>
                </div>
              </div>
              <Button
                title="Begin Your Energy Audit"
                styles="!w-fit !bg-primary !scale-100 !rounded-full !text-white "
              />
            </div>

            <div className="h-full w-full">
              <img
                src={images.image_two}
                alt="Home_Image"
                className=" object-cover aspect-square rounded-2xl "
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col justify-center items-center  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-6 justify-between  ">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-semibold text-black border-4 shadow-md border-solid p-1 ">
                  Ready To Transform Your Energy Efficiency?
                </h1>
                <p className="text-slate-400 text-sm">
                  Start your free audit and take control of your energy
                  consumption
                </p>
              </div>
              <Button
                title="Begin Your Energy Audit"
                styles="!w-fit !bg-primary !scale-100 !rounded-full !text-white "
              />
            </div>

            <div className="h-full w-full">
              <img
                src={images.image_three}
                alt="Home_Image"
                className=" object-cover aspect-square rounded-2xl "
              />
            </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <Login />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Welcome;
