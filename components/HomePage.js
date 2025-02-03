/* eslint-disable @next/next/no-img-element */

import Navspace from "@/components/Navspace";


import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoIosArrowForward } from "react-icons/io";
import { HiChevronDoubleDown } from "react-icons/hi";

const HomePage = () => {
  return (
    <section
          id="home"
          className="flex flex-col max-w-[90rem] mx-auto  h-screen"
        >
          {/* docBg */}
          <div className="selectDisable absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="w-[108rem] flex-none flex justify-end">
              <picture>
                <source srcSet="/shades/lightdoc.png" type="image/avif" />
                <img
                  src="/shades/lightdoc_tiny.png"
                  alt=""
                  className="w-[71.75rem] flex-none max-w-none dark:hidden"
                  decoding="async"
                />
              </picture>
              <picture>
                <source srcSet="/shades/darkdoc.png" type="image/avif" />
                <img
                  src="/shades/darkdoc-tiny.png"
                  alt="darktiny"
                  className="w-[90rem] flex-none max-w-none hidden dark:block"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
          {/* docBg */}
          <Navspace />

          <div className="flex flex-col 2xl:flex-row  grow m-auto  justify-around w-full border-b border-slate-900/10 dark:border-slate-300/10">
            <div className="mx-auto lg:mx-0 my-auto text-center flex flex-col space-y-6">
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold ">
                  Hello, I&apos;m Karthik
                </h2>
                <h1 className="text-5xl sm:text-7xl lg:text-7xl font-extrabold text-blue-400 ">
                  Full Stack Developer
                </h1>
              </div>
              <div className="space-y-4">
                <ul className="flex space-x-4 text-2xl justify-center ">
                  <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/karthikvanam/"
                      className=""
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                    <a
                      target="_blank"
                      href="mailto:vanamkarthiknetha@gmail.com"
                      className=""
                    >
                      <IoMdMail />
                    </a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/karthik.v4s/"
                      className=""
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                    <a
                      target="_blank"
                      href="https://x.com/KarthikVan93414"
                      className=""
                    >
                      <FaXTwitter />
                    </a>
                  </li>
                  <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                    <a
                      target="_blank"
                      href="https://github.com/vanamkarthiknetha"
                      className=""
                    >
                      <FaGithub />
                    </a>
                  </li>
                </ul>
                <div className="flex justify-center cursor-pointer">
                  <a
                    href="pdfs/Karthik_Vanam_Resume_General.pdf"
                    target="_blank"
                    className="font-semibold text-base sm:text-lg  text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3  hover:bg-sky-400/20 flex ring-1 ring-inset"
                  >
                    <p>Resume </p>
                    <div className="flex items-center pt-1">
                      <IoIosArrowForward />
                    </div>
                  </a>
                </div>
                <div className="text-2xl flex justify-center opacity-[40%] ">
                <HiChevronDoubleDown />
                </div>
              </div>
            </div>
            {/* <div className="flex z-30 items-end mx-auto 2xl:mx-0 ">
              <img className="" alt="img" src="/avatars/avatarPNG.png" />
            </div> */}
          </div>
        </section>
  )
}

export default HomePage
