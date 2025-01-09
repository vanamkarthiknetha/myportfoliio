/* eslint-disable @next/next/no-img-element */

import React from 'react'
import Navspace from './Navspace';
import about from "@/data/about/about_me";
import skills from "@/data/about/skills";
import edu from "@/data/about/edu";
import exp from "@/data/about/exp";
const About = () => {
    const markup = { __html: about.about };
  return (
    <section
          id="aboutme"
          className="border-b  border-slate-900/10 dark:border-slate-300/10"
        >
          <Navspace />
          <div className="flex flex-col items-center sm:px-6 lg:px-8 px-4 md:mt-0 ">
            <h1 className="text-5xl font-bold px-4 md:px-0 text-center">
              About
            </h1>
            <div>
              <div>
                <Navspace />
                <h4 className="text-3xl font-bold text-blue-400">
                  A bit about me
                </h4>
                <p
                  dangerouslySetInnerHTML={markup}
                  className=" mt-4 text-xl bg-slate-50 rounded-lg p-6 dark:bg-slate-800"
                ></p>
              </div>
              <div id="skills">
                <Navspace />
                <h4 className=" text-3xl font-bold text-blue-400 mb-6">
                  Skills
                </h4>
                {Object.keys(skills).map((key) => {
                  return (
                    <div className="mt-3" key={key}>
                      <h1 className="font-semibold text-xl ml-4">{key}</h1>
                      <div className=" flex flex-wrap ">
                        {skills[key].skills.map((ele) => {
                          return (
                            <div
                              key={ele}
                              className="hover:bg-slate-50  hover:dark:bg-slate-800 py-2 px-4 border border-slate-900/10 dark:border-slate-300/10 md:m-4 mx-2 mt-6 rounded-lg flex items-center  md:w-48 w-40 "
                            >
                              <img
                                alt=""
                                src={`/skills/${key}/${ele}.svg`}
                                className="w-12"
                              />
                              <h4 className=" text-md ml-4">{ele}</h4>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div id="experience">
                <Navspace />
                <h4 className=" text-3xl font-bold text-blue-400">
                  Experience
                </h4>
                <ul className="relative space-y- mt-8">
                  {Object.keys(exp).map((key) => {
                    return (
                      <li
                        key={exp[key].duration}
                        className={`relative pl-10  gap-16  before:absolute before:left-0   before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-xl before:shadow-sm before:ring-2 before:ring-slate-900/5 dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5  pb-8 ${
                          exp[key].first ? "" : "after:absolute"
                        }  after:top-[calc(1.875rem+1px)] after:bottom-2 after:left-[0.6875rem] after:w-[2px] after:bg-slate-200 dark:after:bg-slate-200/5 `}
                      >
                        <div className="bg-slate-50 rounded-lg p-6 dark:bg-slate-800">
                          <p className="text-xl font-bold  text-indigo-500 dark:text-indigo-400">
                            {key}
                          </p>
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium text-slate-700 dark:text-slate-400">
                              {exp[key].org}
                            </h3>
                            <p className="text-base text-slate-700 dark:text-slate-400">
                              {exp[key].duration}
                            </p>
                          </div>
                          <ul className="list-disc list-inside  p-0 mt-6 md:mt-0">
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
              <div id="education">
                <Navspace />

                <h4 className=" text-3xl font-bold text-blue-400">Education</h4>
                <ol className="mt-8 flex flex-col mb-8 ">
                  {Object.keys(edu).map((key) => {
                    return (
                      <li
                        key={key}
                        className={`relative pl-10  gap-16  before:absolute before:left-0  before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-slate-700 before:rounded-xl before:shadow-sm before:ring-2 before:ring-slate-900/5  dark:before:bg-slate-700 dark:before:text-slate-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5  pb-8 ${
                          edu[key].first ? "" : "after:absolute"
                        }  after:top-[calc(1.875rem+1px)]  after:bottom-2 after:left-[0.6875rem] after:w-[2px] after:bg-slate-200 dark:after:bg-slate-200/5 `}
                      >
                        <div className="bg-slate-50 rounded-lg p-3 dark:bg-slate-800">
                          <div className="flex justify-between items-center">
                            <h4 className="text-xl font-semibold ">
                              {key}{" "}
                              {edu[key].branch ? `(${edu[key].branch})` : ""}
                            </h4>
                            <p className=" text-base text-slate-700 dark:text-slate-400">
                              {edu[key].duration}
                            </p>
                          </div>

                          <div className="flex justify-between items-center mb-2 text-slate-700 dark:text-slate-400">
                            <p className="text-md font-normal  w-3/4">
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
            </div>
          </div>
        </section>
  )
}

export default About
