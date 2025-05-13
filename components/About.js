/* eslint-disable @next/next/no-img-element */

import React, { useRef } from "react";
import Navspace from "./Navspace";
import about from "@/data/about/about_me";
import skills from "@/data/about/skills";
import edu from "@/data/about/edu";
import exp from "@/data/about/exp";

const About = () => {
  const markup = { __html: about.about };

  return (
    <section
      id="about"
      className="border-b  border-slate-900/10 dark:border-slate-300/10"
    >
      <Navspace />
      <div
        id=""
        className="flex flex-col items-center sm:px-6 lg:px-8 px-4 md:mt-0 "
      >
        <h1 className=" px-4 md:px-0 text-center heading">Overview</h1>
        <div>
          <div>
            <Navspace />
            <p
              dangerouslySetInnerHTML={markup}
              className="text-center mt-4 rounded-lg p-6 border  border-slate-900/10 dark:border-slate-300/10 text-base/7 p-color"
            ></p>
          </div>
          <div id="education">
            <Navspace />

            <h4 className=" heading">Education</h4>
            <ol className="mt-8 flex flex-col ">
              {Object.keys(edu).map((key) => {
                return (
                  <li
                    key={key}
                    className={`relative   gap-16`}
                  >
                    <div className="rounded-lg p-3 border  border-slate-900/10 dark:border-slate-300/10">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold ">
                          {key} {edu[key].branch ? `(${edu[key].branch})` : ""}
                        </h4>
                        <p className=" font-mono text-sm text-slate-700 dark:text-slate-400">
                          {edu[key].duration}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mb-2 text-slate-700 dark:text-slate-400">
                        <p className="font-mono text-sm   w-3/4">
                          {edu[key].inst_name}
                        </p>
                        {/* <p className=" text-sm ">CGPA: {edu[key].cgpa}</p> */}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <div id="skills">
            <Navspace />
            <h4 className=" mb-6 heading ">Skills</h4>
            {Object.keys(skills).map((key) => {
              return (
                <div className="mt-3" key={key}>
                  <h1 className=" ml-4 text-base/6 font-semibold text-gray-950 dark:text-white">
                    {key}
                  </h1>
                  <div className=" flex flex-wrap ">
                    {skills[key].skills.map((ele) => {
                      return (
                        <div
                          key={ele}
                          className="hover:bg-gray-950/5 dark:hover:bg-white/10 py-2 px-4 border border-slate-900/10 dark:border-slate-300/10 md:m-4 mx-2 mt-6 rounded-lg flex items-center  md:w-48 w-40 "
                        >
                          <img
                            alt=""
                            src={`/skills/${key}/${ele}.svg`}
                            className="w-12 "
                          />
                          <h4 className="text-sm/7 ml-4  p-color">{ele}</h4>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div id="work">
            <Navspace />
            <h4 className="heading">Experience</h4>
            <ul className="relative space-y- mt-8">
              {Object.keys(exp).map((key) => {
                return (
                  <li
                    key={exp[key].duration}
                    className={`relative  gap-16 pb-8`}
                  >
                    <div className=" rounded-lg p-6  border  border-slate-900/10 dark:border-slate-300/10">
                      <p className="text-xl font-bold  text-sky-500 dark:text-sky-400">
                        {key}
                      </p>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-mono text-sm font-medium text-slate-700 dark:text-slate-400">
                          {exp[key].org}
                        </h3>
                        <p className="border-l pl-2 xs:pl-0 xs:border-l-0  border-slate-900/10 dark:border-slate-300/10 font-mono text-sm text-slate-700 dark:text-slate-400">
                          {exp[key].duration}
                        </p>
                      </div>
                      <ul className="list-disc list-inside  p-0 mt-6 md:mt-0 p-color flex flex-col gap-2 xs:gap-0">
                        {exp[key].points.map((ele) => {
                          return <li key={ele}>{ele}</li>;
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
