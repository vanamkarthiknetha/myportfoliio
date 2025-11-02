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
            email: e.target.email.value,
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
          <h1 className="heading px-4 md:px-0 ">
            Contact
          </h1>
          <div className="flex flex-col sm:flex-row py-4 sm:py-10">
          <div className=" w-full sm:border-r  border-slate-900/10 dark:border-slate-300/10">
            <div className="w-11/12 m-auto  my-6">
              <h1 className=" sub-heading">Get in touch</h1>
              <p className="p-color mt-2">If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I&apos;d love to hear from you.</p>
            </div>
              <div className="w-11/12 m-auto">
                <div className="  mt-6">
                  <h1 className=" sub-heading mb-2">Email</h1>
                  <a
                    target="_blank"
                    href="mailto:vanamkarthiknetha@gmail.com"
                    className="text-2xl flex items-center space-x-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                  >
                    <IoMdMail />
                    <p className="text-base">vanamkarthiknetha@gmail.com</p>
                  </a>
                </div>
                <div className=" mt-6">
                  <h1 className=" sub-heading mb-2">Social</h1>
                  <ul className="flex space-x-4 text-2xl justify-start ">
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
                        href="https://github.com/vanamkarthiknetha"
                        className=""
                      >
                        <FaGithub />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" mt-6">
                  <h1 className="sub-heading  mb-2">Coding</h1>
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
                    className="block mb-2 text-base "
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full appearance-none rounded-lg bg-white py-2 pr-3 pl-2.5 text-sm/6 text-gray-950 outline -outline-offset-1 outline-slate-900/10 placeholder:text-sm/6 placeholder:text-gray-950/50 focus:outline-gray-950 dark:bg-white/10 dark:text-white/50 dark:outline-white/15 dark:placeholder:text-white/50 dark:focus:outline-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full appearance-none rounded-lg bg-white py-2 pr-3 pl-2.5 text-sm/6 text-gray-950 outline -outline-offset-1 outline-slate-900/10 placeholder:text-sm/6 placeholder:text-gray-950/50 focus:outline-gray-950 dark:bg-white/10 dark:text-white/50 dark:outline-white/15 dark:placeholder:text-white/50 dark:focus:outline-white"
                    placeholder="Enter your email"
                    required=""
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-base "
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="block w-full appearance-none rounded-lg bg-white py-2 pr-3 pl-2.5 text-sm/6 text-gray-950 outline -outline-offset-1 outline-slate-900/10 placeholder:text-sm/6 placeholder:text-gray-950/50 focus:outline-gray-950 dark:bg-white/10 dark:text-white/50 dark:outline-white/15 dark:placeholder:text-white/50 dark:focus:outline-white"
                    placeholder="Enter your message"
                    required=""
                  ></textarea>
                </div>
                <div className="flex justify-center ">
                  <button
                    type="submit"
                    className="rounded-3xl bg-black px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600"
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
