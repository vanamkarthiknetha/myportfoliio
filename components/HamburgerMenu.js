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
          className="z-50  fixed inset-0 backdrop-blur-sm bg-black/20 dark:bg-slate-900/80"
        ></div>
        <div className="z-50  fixed top-4 right-4 w-full max-w-[12rem]  rounded-lg shadow-lg p-6 text-base font-semibold bg-white dark:bg-slate-800 dark:text-slate-400  ">
          <button
            type="button"
            onClick={toggleMenu}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
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
              {
                if (ele == "about") {
                  return (
                    <li
                      key={ele}
                      id="dropdown-parent"
                      className="dropdown_parent  "
                      onClick={toggleDropdown}
                    >
                      <div className=" flex hover:text-sky-500 dark:hover:text-sky-400">
                        <span>{capitalizeFirstLetter(ele)}</span>
                        <span id="down" className=" my-auto pt-1 pl-1 ">
                          <IoIosArrowDown />
                        </span>
                        <span id="up" className="hide my-auto pt-1 pl-1 ">
                          <IoIosArrowUp />
                        </span>
                      </div>
                      <div
                        id="dropdown"
                        className="mt-3 border-l border-slate-900/10 dark:border-slate-300/10 hide "
                      >
                        <ul className="pl-4 text-slate-500  dark:text-slate-300 ">
                          {sublinks.sublinks.map((subele) => {
                            return (
                              <li key={subele} className="my-2 ">
                                <a
                                  className=" hover:text-sky-500 dark:hover:text-sky-400"
                                  href={`#${subele}`}
                                  onClick={toggleMenu}
                                >
                                  {capitalizeFirstLetter(subele)}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                }
              }
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
