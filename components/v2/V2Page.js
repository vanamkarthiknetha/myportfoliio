import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Background from "@/components/v2/layout/Background";
import Navbar from "@/components/v2/layout/Navbar";
import Footer from "@/components/v2/layout/Footer";
import Hero from "@/components/v2/sections/Hero";
import About from "@/components/v2/sections/About";
import Experience from "@/components/v2/sections/Experience";
import Skills from "@/components/v2/sections/Skills";
import Projects from "@/components/v2/sections/Projects";
import GitHubActivity from "@/components/v2/sections/GitHubActivity";
import Contact from "@/components/v2/sections/Contact";
const V2Page = () => {
  return (
    <>
      <Head>
        <title>Karthik Vanam — Software Engineer</title>
        <meta
          name="description"
          content="Karthik Vanam — Full-stack engineer crafting performant, beautiful, impactful products on the web."
        />
        <meta name="theme-color" content="#1B1F23" />
      </Head>

      <div className="dark relative min-h-screen bg-ln-bg text-ln-text antialiased selection:bg-ln-blue/30 selection:text-white">
        <Background />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <GitHubActivity />
          <Contact />
        </main>
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default V2Page;
