"use client";

import Image from "next/image";
import React from "react";
import Right from "../../../public/rightFrame.svg";

const items = Array(12).fill({
  image: "/image5.png",
  title: "Accessories",
  stats: "50,000+ Products",
});

export default function TopCategory() {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold my-4 text-black mt-20">
        Explore Our Top Categories
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-[224px] bg-cover bg-center rounded-[5px]"
            style={{
              backgroundImage: `url('${item.image}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-[5px]"></div>

            <div className="absolute w-[50px] h-[50px] bg-[#F9F9F9] rounded-full bottom-2 right-2 flex items-center justify-center shadow-lg">
              <button className="z-10" aria-label="Scroll Right">
                <Image src={Right} alt="Scroll Right" />
              </button>
            </div>

            <div className="absolute bottom-16 left-4 text-[22px] md:text-[24px] font-medium text-[#F0F2F5]">
              {item.title}
            </div>

            <div className="absolute bottom-4 left-4 text-[#F0F2F5] text-sm md:text-base">
              <span className="font-light">{item.stats.split(" ")[0]}</span>{" "}
              <span className="font-medium">{item.stats.split(" ")[1]}</span>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
