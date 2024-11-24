"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import bgImage from "../../../public/Vector2.png";

export default function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 56,
    seconds: 34,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const totalSeconds =
          prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => String(value).padStart(2, "0");

  const cards = Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="flex flex-col items-start p-2 gap-2 w-[220px] lg:w-[200px] sm:w-[150px] h-[273px] bg-[#FDFDFD] shadow-md rounded-[12px] shrink-0"
    >
      <div
        className="box-border w-full h-[181px] bg-cover bg-center rounded-[11px] border border-[#0000001A]"
        style={{ backgroundImage: "url('/image2.png')" }}
      ></div>

      <div className="flex flex-col items-start p-2 gap-2 w-full">
        <span className="text-[#474747] font-normal text-[16px] leading-[24px]">
          Butterfly on my neck
        </span>
        <div className="flex flex-row items-center gap-2 w-full">
          <span className="text-[#00171F] font-bold text-[20px] leading-[20px]">
            N 2,500
          </span>
          <span className="line-through text-[#CD011C] font-normal text-[17px] leading-[20px]">
            N 770,000
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="relative w-full h-auto bg-gradient-to-r from-[#FF4040] to-[#FF0202] overflow-hidden mt-5 mb-12">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-evenly  px-4 py-8 lg:py-12">
        <div className="flex flex-col items-center text-center lg:items-center lg:text-left">
          <h2 className="text-white font-black text-[32px] lg:text-[47px] leading-[47px]">
            Flash Sales
          </h2>

          <p className="text-white mt-4 text-[16px] lg:text-[18px] font-normal leading-[23px] max-w-[500px]">
            Use coupon code <span className="font-bold">#VICSMALLSHIP</span> to
            get up to 90% off!!
          </p>
        </div>

        <div className="mt-6 lg:mt-0 text-[20px] lg:text-[22px] font-medium text-white text-shadow-sm flex justify-end items-end">
          {formatTime(timeLeft.hours)}H : {formatTime(timeLeft.minutes)}M :{" "}
          {formatTime(timeLeft.seconds)}S Left
        </div>
      </div>

      <div className="relative z-10 mt-5 mb-11 px-4 lg:px-8 overflow-x-auto flex gap-6 scrollbar-hide">
        {cards}
      </div>
    </section>
  );
}
