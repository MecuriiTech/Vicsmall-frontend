"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Left from "../../../public/leftFrame.svg";
import Right from "../../../public/rightFrame.svg";
import Line from "../../../public/Line.svg";

export default function Watches() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className="flex flex-col items-start p-2 gap-2 w-[220px] lg:w-[200px] sm:w-[150px] h-[273px] bg-[#FDFDFD] shadow-md rounded-[12px] shrink-0"
    >
      <div
        className="box-border w-full h-[181px] bg-cover bg-center rounded-[11px] border border-[#0000001A]"
        style={{ backgroundImage: "url('/image4.png')" }}
      ></div>

      <div className="flex flex-col items-start p-2 gap-2 w-full">
        <span className="text-[#474747] font-normal text-[16px] leading-[24px]">
          Nike Mikey
        </span>
        <div className="flex flex-row items-center gap-2 w-full">
          <span className="text-[#00171F] font-bold text-[20px] leading-[20px]">
            N 34,500
          </span>
          <span className="line-through text-[#CD011C] font-normal text-[17px] leading-[20px]">
            N 110,200
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="relative mt-12 mb-12">
      <div className="flex justify-between items-center text-black px-4 mb-4">
        <span className="text-xl font-semibold">Watches</span>
        <button className="text-sm flex">
          <span className=" mr-3">View More</span>
          <span className=" mr-3">
            <Image src={Line} alt="line" />
          </span>
        </button>
      </div>

      <div className="relative flex items-center">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-10"
          aria-label="Scroll Left"
        >
          <Image src={Left} alt="Scroll Left" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto py-4 scrollbar-hide gap-4 px-8 w-full"
        >
          {cards}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-10"
          aria-label="Scroll Right"
        >
          <Image src={Right} alt="Scroll Right" />
        </button>

        <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
}
