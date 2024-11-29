"use client";

import React, { useState, useEffect } from "react";
import Vector from "../../../public/Vector.svg";
import Headset from "../../../public/headphone.svg";
import Truck from "../../../public/truck.svg";
import Image from "next/image";

export default function PromotionalSection() {
  const [activeDot, setActiveDot] = useState(0);

  const leftContent = [
    {
      title: "SHOP TO GET WHAT YOU LOVE",
      subtitle: "PAY INSTANTLY OR",
      description: "PAY IN INSTALLMENTS",
      footer: "FROM VICSMALL",
    },
    {
      title: "DISCOVER AMAZING DEALS",
      subtitle: "EXCLUSIVE OFFERS",
      description: "LIMITED TIME ONLY",
      footer: "HURRY UP AND GRAB THEM",
    },
    {
      title: "JOIN THE BEST COMMUNITY",
      subtitle: "UNLOCK VIP BENEFITS",
      description: "EXTRA DISCOUNTS & MORE",
      footer: "SIGN UP NOW",
    },
  ];

  const rightContent = [
    {
      image: Vector,
      text: "Win amazing gifts",
    },
    {
      image: Headset,
      text: "Great Customer Service",
    },
    {
      image: Truck,
      text: "Express Delivery Service",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto mt-24 sm:mt-20 px-4 sm:px-8 lg:px-16 w-full max-w-screen-xl h-auto bg-[#FF8C48] rounded-[23px] flex flex-col sm:flex-row items-center justify-between py-8 lg:py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/path-to-image.png')" }}
      ></div>

      <div className="flex flex-col items-center sm:items-start text-white z-10 max-w-full w-full sm:w-[50%] mb-8 sm:mb-0 text-center sm:text-left">
        <span className="text-[12px] sm:text-[14px] font-bold leading-[17px]">
          {leftContent[activeDot].title}
        </span>
        <h1 className="text-[20px] sm:text-[36px] font-semibold leading-[39px] mt-4">
          {leftContent[activeDot].subtitle}
        </h1>
        <h2 className="text-[18px] sm:text-[34px] font-semibold leading-[39px] mt-4">
          {leftContent[activeDot].description}
        </h2>
        <h3 className="text-[20px] sm:text-[36px] font-semibold leading-[39px] mt-4">
          <span className="text-[16px] sm:text-[34px] font-thin">
            {leftContent[activeDot].footer}
          </span>
        </h3>
      </div>

      <div className="flex flex-nowrap sm:flex-row gap-8 sm:gap-10 z-10 items-center justify-center sm:justify-start sm:w-[50%]">
        {rightContent.map((content, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-3 text-center transition-opacity duration-500 ${
              activeDot === index ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image src={content.image} alt="icon" width={50} height={50} />
            <p className="text-white text-[14px] sm:text-[19px] font-medium leading-[21px]">
              {content.text}
            </p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-[50%] transform -translate-x-[50%] flex items-center gap-2 bg-[rgba(30,30,30,0.8)] backdrop-blur-[22px] p-[3px_5px] rounded-[11px]">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`w-[8px] h-[8px] rounded-full transition-opacity duration-500 ${
              activeDot === index
                ? "bg-white opacity-100"
                : "bg-[rgba(255,255,255,0.38)] opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
