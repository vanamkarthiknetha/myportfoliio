import React from 'react'
import Navspace from './Navspace'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoIosArrowForward } from "react-icons/io";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { Slide, toast } from 'react-toastify';
const Contact = ({theme}) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        toast.info("Sending....... ", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: theme == "dark" ? "dark" : "light",
          transition: Slide,
        });
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY,
            name: e.target.name.value,
            message: e.target.message.value,
          }),
        });
        const result = await response.json();
        toast.dismiss();
        if (result.success) {
          toast.success("Message sent successfully !", {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: theme == "dark" ? "dark" : "light",
            transition: Slide,
          });
          document.getElementById("form").reset();
        } else {
          toast.error("Error occured !", {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: theme == "dark" ? "dark" : "light",
            transition: Slide,
          });
        }
      };
  return (
    <section id="contact" className="flex flex-col ">
          <Navspace />
          <h1 className="text-5xl font-bold px-4 md:px-0 text-center">
            Contact
          </h1>
          <div className="flex flex-col sm:flex-row py-4 sm:py-10">
          <div className=" w-full sm:border-r  border-slate-900/10 dark:border-slate-300/10">
            <div className="w-11/12 m-auto  my-6">
              <h1 className=" text-3xl font-bold">Get in touch</h1>
              <p className="text-lg sm:text-xl mt-2">If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I&apos;d love to hear from you.</p>
            </div>
              <div className="w-11/12 m-auto">
                <div className="text-2xl mt-6">
                  <h1 className=" font-bold mb-2">Email</h1>
                  <a
                    target="_blank"
                    href="mailto:vanamkarthiknetha@gmail.com"
                    className="flex items-center space-x-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  >
                    <IoMdMail />
                    <p className="text-lg">vanamkarthiknetha@gmail.com</p>
                  </a>
                </div>
                <div className="text-2xl mt-6">
                  <h1 className=" font-bold mb-2">Social</h1>
                  <ul className="flex space-x-4 text-2xl justify-start ">
                    <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/karthik-vanam-606769285/"
                        className=""
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                      <a
                        target="_blank"
                        href="https://www.instagram.com/___im_karthik_______/"
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
                </div>
                <div className="text-2xl mt-6">
                  <h1 className=" font-bold mb-2">Coding</h1>
                  <ul className="flex space-x-4 text-2xl justify-start ">
                    <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                      <a
                        target="_blank"
                        href="https://leetcode.com/u/vanamkarthiknetha/"
                        className=""
                      >
                        <SiLeetcode />
                      </a>
                    </li>
                    <li className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                      <a
                        target="_blank"
                        href="https://www.geeksforgeeks.org/user/vanamkartim21/"
                        className="text-3xl"
                      >
                        <SiGeeksforgeeks />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" w-full mt-10 sm:mt-0">
              <form onSubmit={handleSubmit} id="form" className="w-11/12 m-auto">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-base font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="text-sm rounded-lg bg-slate-50  dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus:ring-2  focus:ring-indigo-600 w-full p-2.5 outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="text-sm rounded-lg bg-slate-50  dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus:ring-2  focus:ring-indigo-600 w-full p-2.5 outline-none"
                    placeholder="Enter your email"
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-base font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="min-h-28 text-sm rounded-lg bg-slate-50  dark:bg-slate-800 border border-gray-300 dark:border-gray-600 focus:ring-2  focus:ring-indigo-600 w-full p-2.5 outline-none"
                    placeholder="Enter your message"
                    required=""
                  ></textarea>
                </div>
                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="bg-indigo-600  hover:bg-indigo-500 text-white  leading-6 font-medium py-2 px-6 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </section>
  )
}

export default Contact
