"use client";

import Image from "next/image";
import Rightline from "../../../public/Line11.svg";

export default function ForTheLadies() {
  const cards = Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="flex flex-col items-start p-2 gap-2 w-[220px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px] h-[273px] bg-[#FDFDFD] shadow-md rounded-[12px] shrink-0"
    >
      <div
        className="box-border w-full h-[181px] bg-cover bg-center rounded-[11px] border border-[#0000001A]"
        style={{ backgroundImage: "url('/image3.png')" }}
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
    <section className="relative w-full h-auto bg-[#1E1E1E] flex items-center justify-center py-8">
      <div className="w-full max-w-screen-xl flex flex-col items-center text-center px-4">
        <h2 className="text-white font-bold text-[30px] sm:text-[36px] lg:text-[41px] leading-tight">
          For the Ladies
        </h2>

        <div className="relative z-10 mt-5 mb-11 w-full overflow-x-auto flex gap-6 px-4 scrollbar-hide">
          {cards}
        </div>

        <button className="mt-6 flex items-center px-8 py-3 border text-white border-white text-[16px] sm:text-[18px] font-medium rounded-[8px] hover:bg-opacity-90 transition-all">
          View more{" "}
          <span className="ml-4">
            <Image src={Rightline} alt="right" />
          </span>
        </button>
      </div>
    </section>
  );
}
