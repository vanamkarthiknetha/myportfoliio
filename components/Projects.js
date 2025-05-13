/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import Navspace from "./Navspace";
import projects from "@/data/projects/projects";

const Projects = () => {
  const simulateClick = (id) => {
    const liveLink = document.getElementById(id);
    liveLink.click();
  };

  return (
    <section
      id="projects"
      className="border-b  border-slate-900/10 dark:border-slate-300/10"
    >
      <Navspace />
      <h1 className="heading">Projects</h1>
      <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] my-16 sm:my-20 md:my-24  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {Object.keys(projects).map((key) => {
          return (
            <li
              key={key}
              className="group relative rounded-3xl  p-6 border  border-slate-900/10 dark:border-slate-300/10 dark:highlight-white/5 hover:bg-gray-950/5 dark:hover:bg-white/10 cursor-pointer  "
            >
              <div
                className="aspect-[1524/988] relative rounded-md transform overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.08)] bg-slate-200 dark:bg-slate-700 cursor-pointer"
                onClick={() => simulateClick(projects[key].live)}
              >
                <img
                  alt=""
                  fetchpriority="high"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 w-full h-full"
                  src={`/projects/${key}.png`}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="flex flex-col items-center mt-6">
                <div
                  className="flex justify-between w-full"
                  onClick={() => simulateClick(projects[key].live)}
                >
                  <h2 className="text-lg leading-6 text-slate-900 dark:text-white font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400 flex">
                    <a
                      id={projects[key].live}
                      href={projects[key].live}
                      target="_blank"
                      className="flex"
                    >
                      <p>{key}</p>
                      <svg
                        className="w-6 h-6 flex-none text-white  group-hover:hidden"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
                          stroke="#ffffff "
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <svg
                        className="w-6 h-6 flex-none opacity-0  group-hover:opacity-100"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
                          stroke="#0EA5E9"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </h2>
                </div>
                <div className="flex flex-col">
                  <p
                    className="pb-2 w-full flex-none text-base  p-color pt-2 "
                    onClick={() => simulateClick(projects[key].live)}
                  >
                    {projects[key].desc}
                  </p>
                  <div className=" flex flex-col  border-t border-slate-900/10 dark:border-slate-300/10  text-sm text-slate-500 dark:text-slate-400 cursor-default">
                    <p
                      className="pt-2 cursor-pointer pb-3 font-mono text-xs"
                      onClick={() => simulateClick(projects[key].live)}
                    >
                      {projects[key].techstack}
                    </p>
                    <div className="flex cursor-pointer">
                      <a
                        href={projects[key].code}
                        target="_blank"
                        className=" text-sm leading-6 font-semibold group-hover:text-sky-500 dark:group-hover:text-sky-400  text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3  hover:bg-sky-400/20 ring-1 ring-inset"
                      >
                        View Code
                      </a>
                      <div
                        className=" grow"
                        onClick={() => simulateClick(projects[key].live)}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
