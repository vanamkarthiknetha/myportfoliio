/* eslint-disable @next/next/no-img-element */

import Navspace from "@/components/Navspace";

import { FaLinkedin, FaInstagram, FaGithub, FaCloudDownloadAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoIosArrowForward } from "react-icons/io";
import { HiChevronDoubleDown } from "react-icons/hi";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section
      id="home"
      className="flex flex-col max-w-[90rem] mx-auto  h-screen "
    >
      {/* docBg */}
      <div className="absolute selectDisable top-16 -right-0 isolate z-0 hidden xl:block ">
        <img
          src="/shades/keyboard.svg"
          alt=""
          className="flex-none max-w-none dark:hidden"
          decoding="async"
        />
        <img
          src="/shades/keyboard-dark.svg"
          alt=""
          className="flex-none max-w-none hidden dark:block"
          decoding="async"
        />
      </div>
      {/* docBg */}
      <Navspace />

      <div className="flex flex-col 2xl:flex-row z-10  grow m-auto  justify-around xl:justify-start w-full border-b border-slate-900/10 dark:border-slate-300/10">
        <div className=" mx-auto lg:mx-0 my-auto text-center xl:text-start flex flex-col space-y-6">
          <div className="space-y-1">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-2 pl-2 xl:hidden text-lg/7 font-medium text-gray-600 max-sm:px-4 dark:text-gray-400"
            >
              Karthik Vanam
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-2 text-6xl  tracking-tighter text-balance sm:text-7xl lg:text-8xl "
            >
              Research
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-2 text-6xl  tracking-tighter text-balance sm:text-7xl lg:text-8xl"
            >
              Development
            </motion.h1>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-2 pl-2 pt-4 xl:pt-0 font-mono text-[1.0625rem] text-sky-500 dark:text-sky-400"
            >
              Web/App/AI
            </motion.h1>
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-4"
          >
            <ul className="flex mx-2 pl-2 space-x-4 text-2xl justify-center xl:justify-start">
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
                  href="https://github.com/vanamkarthiknetha"
                  className=""
                >
                  <FaGithub />
                </a>
              </li>
              <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1uiKdfzkql7YSYyQtWstktF8VHSNnPGfx/view?usp=sharing"
                  className=""
                >
                  <FaCloudDownloadAlt />
                </a>
              </li>
            </ul>
            <div className="lg:hidden text-2xl flex justify-center opacity-[40%] ">
              <HiChevronDoubleDown />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
