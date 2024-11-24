import React from "react";

const menuItems: string[] = [
  "Accessories",
  "All Hoodies",
  "Beanies",
  "Boots",
  "Games & Consoles",
  "Gym",
  "Head Wears",
  "Jerseys",
  "Jumpsuits",
  "Mens Clothings",
  "Hoodies",
  "Other Categories",
];

export default function MenuBar() {
  return (
    <div className="relative top-0 w-full bg-[#1E1E1E] px-4 py-2 border-t border-b border-gray-700 opacity-90 z-50">
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={`#${item
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/ /g, "-")}`}
            className="text-white text-xs sm:text-sm md:text-base font-medium hover:opacity-100 opacity-80 whitespace-nowrap transition-opacity duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
