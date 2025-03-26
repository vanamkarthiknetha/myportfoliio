import links from "@/data/navbar/navs";
import sublinks from "@/data/about/navs";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const HamburgerMenu = ({toggleMenu,capitalizeFirstLetter}) => {
    const toggleDropdown = () => {
        const dropdown = document.getElementById("dropdown");
        const up = document.getElementById("up");
        const down = document.getElementById("down");
        const dropdown_parent = document.getElementById("dropdown_parent");
        if (dropdown.classList.contains("hide")) {
          dropdown.classList.remove("hide");
          dropdown.classList.add("unhide");
    
          down.classList.remove("unhide");
          down.classList.add("hide");
    
          up.classList.remove("hide");
          up.classList.add("unhide");
        } else {
          dropdown.classList.remove("unhide");
          dropdown.classList.add("hide");
    
          down.classList.remove("hide");
          down.classList.add("unhide");
    
          up.classList.remove("unhide");
          up.classList.add("hide");
        }
      };
  return (
    <div  className="z-50 hideandseek  ">
        <div
          onClick={toggleMenu}
          className="z-50  fixed inset-0 backdrop-blur-sm "
        ></div>
        <div className="z-50  fixed top-4 right-4 w-full max-w-[12rem]  rounded-lg shadow-lg p-6 text-base  bg-black dark:bg-gray-700 text-white">
          <button
            type="button"
            onClick={toggleMenu}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center  hover:text-slate-600  dark:hover:text-slate-300"
          >
            <span className="sr-only">Close navigation</span>
            <svg
              viewBox="0 0 10 10"
              className="w-2.5 h-2.5 overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M0 0L10 10M10 0L0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <ul className="space-y-6">
            {links.links.map((ele) => {
              return (
                <li key={ele}>
                  <a
                    className="hover:text-sky-500 dark:hover:text-sky-400"
                    href={`#${ele}`}
                    onClick={toggleMenu}
                  >
                    {capitalizeFirstLetter(ele)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
  )
}

export default HamburgerMenu
