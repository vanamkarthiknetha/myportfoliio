/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";


import { ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/Navbar";
import HomePage from "@/components/HomePage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HamburgerMenu from "@/components/HamburgerMenu";

export default function Home() {
  const router = useRouter();
  const [theme, settheme] = useState("dark");
  function capitalizeFirstLetter(string) {
    if (string === "aboutme") string = "about me";

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // page on load
  // useEffect(() => {
  //   router.push("/");
  // }, []);
  // theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      settheme(localTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);
  const toggleTheme = () => {
    if (theme == "dark") {
      if (scrollY != 0) {
        nav.classList.remove("nav-dark");
        nav.classList.add("nav-light");
      }
    } else {
      if (scrollY != 0) {
        nav.classList.remove("nav-light");
        nav.classList.add("nav-dark");
      }
    }

    if (theme === "dark") {
      settheme("light");
      localStorage.setItem("theme", "light");
    } else {
      settheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const ref = useRef();
  const toggleMenu = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
    } else {
      ref.current.classList.add("hidden");
    }
  };


  // Nav transition based on scrollY/window pos
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("nav");
      if (scrollY != 0) {
        if (theme == "dark") {
          nav.classList.remove("nav-light");
          nav.classList.add("nav-dark");
        } else {
          nav.classList.remove("nav-dark");
          nav.classList.add("nav-light");
        }
      } else {
        nav.classList.remove("nav-light");
        nav.classList.remove("nav-dark");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, [theme]);

 



  return (
    <main className="bg-white dark:bg-bgdark text-slate-700 dark:text-slate-200 ">
      <Head>
        <title>Karthik Vanam | Portfolio</title>
      </Head>
      <ToastContainer />
      <Navbar
        toggleMenu={toggleMenu}
        toggleTheme={toggleTheme}
        theme={theme}
        capitalizeFirstLetter={capitalizeFirstLetter}
      />
      <section className="max-w-[90rem] m-auto ">
        <HomePage/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer />
      </section>
      <div ref={ref} className="hidden">
      <HamburgerMenu  toggleMenu={toggleMenu} capitalizeFirstLetter={capitalizeFirstLetter}/>
      </div>
    </main>
  );
}
