"use client";

import React, { useEffect, useRef, useState } from "react";
import { FlagIcon, FlagIconCode } from "react-flag-kit";
import Logo from "../../../public/Logo.svg";
import Search from "../../../public/search.svg";
import Profile from "../../../public/profile.png";
import Cart from "../../../public/shopping-cart.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlagMenuOpen, setIsFlagMenuOpen] = useState(false);
  const [desktopSelectedCountry, setDesktopSelectedCountry] =
    useState<FlagIconCode>("NG");
  const [mobileSelectedCountry, setMobileSelectedCountry] =
    useState<FlagIconCode>("NG");
//   const [cartCount, setCartCount] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const desktopCountries: {
    code: FlagIconCode;
    name: string;
    currency: string;
  }[] = [
    { code: "NG", name: "NGN", currency: "NGN" },
    { code: "GB", name: "UK", currency: "GBP" },
    { code: "US", name: "USA", currency: "USD" },
    { code: "FR", name: "FR", currency: "FR" },
  ];

  const mobileCountries: {
    code: FlagIconCode;
    name: string;
    currency: string;
  }[] = [
    { code: "NG", name: "Nigerian Naira", currency: "NGN" },
    { code: "GB", name: "Pound Sterling", currency: "GBP" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white border-b shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            
          <div className="flex items-center">
            <button
              className="block md:hidden p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            <Link
              href="/"
              className="text-xl font-semibold text-gray-800 hover:text-gray-900"
            >
              <Image
                className="hidden sm:block"
                src={Logo}
                alt="Logo"
                width={50}
                height={50}
              />
              <span className="sm:hidden">VICSMALL</span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center mx-4">
            <div className="relative w-full max-w-md flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-black"
              />
              <Image
                src={Search}
                alt="search icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4 ">
            <div className="relative hidden sm:flex gap-7">
              <button
                onClick={() => setIsFlagMenuOpen(!isFlagMenuOpen)}
                className="flex items-center space-x-2 bg-gray-200 px-3 py-2 rounded-md hover:bg-gray-300"
              >
                <FlagIcon code={desktopSelectedCountry} size={20} />
                <span>{desktopSelectedCountry}</span>
              </button>
              {isFlagMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg">
                  {desktopCountries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setDesktopSelectedCountry(country.code);
                        setIsFlagMenuOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      <FlagIcon code={country.code} size={20} />
                      <span>{country.name}</span>
                    </button>
                  ))}
                </div>
              )}

              <button className="px-4 py-2 text-black rounded-2xl border-2 border-black hidden sm:flex">
                Login
              </button>
              
            </div>
            

            <div className="relative sm:hidden">
              <button
                onClick={() => setIsFlagMenuOpen(!isFlagMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-md"
              >
                <div className="h-9 flex items-center">
                  <FlagIcon code={desktopSelectedCountry} />
                </div>
              </button>
              {isFlagMenuOpen && (
                <div className="absolute top-8 right-0 bg-white shadow-md rounded-lg z-50">
                  <div className="space-y-2 p-2">
                    {desktopCountries.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setDesktopSelectedCountry(country.code);
                          setIsFlagMenuOpen(false);
                        }}
                        className="p-2 w-10 h-10 rounded-full hover:bg-gray-200"
                      >
                        <FlagIcon code={country.code} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="relative sm:hidden">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-md">
                <Image src={Cart} alt="cart" />
                {/* {cartCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )} */}
              </button>
            </div>

            <div className="relative sm:hidden">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-md">
                <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
                  <span className="text-sm">
                    <Image src={Profile} alt="profile" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      

      {isMenuOpen && (
        
        <div
          ref={menuRef}
          className="fixed inset-0 bg-white shadow-lg border-r transform md:hidden transition-transform duration-300 ease-in-out p-4 overflow-y-auto w-[80%] sm:w-[70%]"
        >
            
          <div className="space-y-6">
            <button
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="mb-6 flex justify-center">
              <Image src={Logo} alt="Logo" width={100} height={100} />
            </div>

            <div className="bg-[#1E1E1E] rounded-2xl p-4">
              <div className="font-poppins text-white text-[16px] font-medium mb-4">
                Select Currency
              </div>
              <div className="space-y-3">
                {mobileCountries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      setMobileSelectedCountry(country.code);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-4 py-3 px-6 rounded-md w-full ${
                      mobileSelectedCountry === country.code
                        ? "bg-[#FF8C48] text-white"
                        : "bg-[#F9F9F9] text-gray-900"
                    } whitespace-nowrap`}
                  >
                    <div className="h-9 flex items-center">
                      <FlagIcon code={country.code} />
                    </div>
                    <span className="flex-grow text-left">{country.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <Link
                href="/notifications"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                Notifications
              </Link>
              <Link
                href="/contact-us"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                Contact Us
              </Link>
              <Link
                href="/order-tracking"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                Order Tracking
              </Link>
              <Link
                href="/sell"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                Sell on Vics Mall
              </Link>
              <Link
                href="/faq"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                FAQs
              </Link>
              <Link
                href="/faq"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                Terms of Service
              </Link>
              <Link
                href="/faq"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                Delivery, Refund and Returns
              </Link>
              <Link
                href="/faq"
                className="flex items-center justify-between py-3 px-6 w-[261px] border-b border-gray-300 text-sm text-gray-800 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
