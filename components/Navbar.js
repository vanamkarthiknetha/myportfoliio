import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import links from "@/data/navbar/navs";
import sublinks from "@/data/about/navs";
const Navbar = ({ toggleMenu, toggleTheme, theme, capitalizeFirstLetter }) => {
  const router = useRouter();
  return (
    <div
      id="nav"
      className="fixed z-40  top-0 right-0 left-0 bg-white dark:bg-gray-950  border-b  border-slate-900/10 dark:border-slate-300/10"
    >
      <div className=" text-sm max-w-[90rem] m-auto lg:text-lg flex items-center justify-between  font-semibold p-2  ">
        <a
          className="cursor-pointer"
          href="#home"
          
        >
          <div className="flex items-center avatar ml-1 lg:ml-3">
            <Image
              className="w-auto h-10 object-cover object-center flex-shrink-0 rounded-full mr-4 text-white"
              width={0}
              height={0}
              src={"/avatars/avatar.svg"}
              alt="Me"
              unoptimized
            />
            <h1 className=" hidden sm:inline-block text-xl lg:text-2xl ">
              Karthik Vanam
            </h1>
          </div>
        </a>
        <div className="wrapNavs flex items-center ">
          <div className="hidden lg:inline-block">
            <ul className="flex items-center space-x-4 lg:space-x-6 mr-6 ">
              {links.links.map((ele) => {
                
                return (
                  <li key={ele} className="py-3 md:py-2">
                    <a
                      className="hover:text-sky-500 dark:hover:text-sky-400 text-base"
                      href={`#${ele}`}
                    >
                      {capitalizeFirstLetter(ele)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-icons flex mr-3 text-xl lg:border-l border-slate-200 dark:border-slate-800 pl-6 space-x-3 ">
            {theme === "dark" && (
              <MdOutlineLightMode
                className="cursor-pointer text-sky-400 "
                onClick={toggleTheme}
              />
            )}
            {theme === "light" && (
              <MdOutlineDarkMode
                className="cursor-pointer text-sky-500"
                onClick={toggleTheme}
              />
            )}
            <HiOutlineDotsVertical
              onClick={toggleMenu}
              className="cursor-pointer lg:hidden  text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
