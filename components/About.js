/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState } from "react";
import Navspace from "./Navspace";
import about from "@/data/about/about_me";
import skills from "@/data/about/skills";
import edu from "@/data/about/edu";
import exp from "@/data/about/exp";

const About = () => {
  const markup = { __html: about.about };
  const [expandedItems, setExpandedItems] = useState({});
  
  const POINTS_LIMIT = 2; // Show only first 2 points initially
  const CHAR_LIMIT = 200; // Or limit by character count per point
  
  const toggleExpanded = (itemKey) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };
  
  const shouldShowReadMore = (points) => {
    if (points.length <= POINTS_LIMIT) return false;
    const totalChars = points.slice(0, POINTS_LIMIT).join('').length;
    return points.length > POINTS_LIMIT || totalChars > CHAR_LIMIT * POINTS_LIMIT;
  };
  
  const getDisplayedPoints = (points, itemKey) => {
    const isExpanded = expandedItems[itemKey];
    if (isExpanded || !shouldShowReadMore(points)) {
      return points;
    }
    return points.slice(0, POINTS_LIMIT);
  };
  
  const renderPointWithReadMore = (point, isLastTruncated, itemKey) => {
    if (!isLastTruncated) {
      return point;
    }
    
    return (
      <>
        {point}
        <span className="text-slate-500 dark:text-slate-400"> ... </span>
        <button
          onClick={() => toggleExpanded(itemKey)}
          className="text-sm font-medium text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors duration-200 outline-none underline underline-offset-2 hover:no-underline"
        >
          Read More
        </button>
      </>
    );
  };

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
                  <li key={key} className={`relative   gap-16`}>
                    <div className="rounded-lg p-3 border  border-slate-900/10 dark:border-slate-300/10">
                      <div className="flex flex-col md:flex-row justify-between md:items-center">
                        <h4 className="text-xl font-semibold ">
                          {key} in{" "}
                          {edu[key].branch ? `${edu[key].branch}` : ""}
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
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                        <p className="text-xl font-bold  text-sky-500 dark:text-sky-400">
                          {key}
                        </p>
                        <p className="font-mono text-sm text-slate-700 dark:text-slate-400">
                          {exp[key].duration}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-mono text-sm font-bold text-slate-700 dark:text-slate-400">
                          {exp[key].org}
                        </h3>
                        <p className="font-mono text-sm text-slate-700 dark:text-slate-400">
                          {exp[key].type}
                        </p>
                      </div>
                      <ul className="list-disc list-inside  p-0 mt-6 md:mt-0 p-color flex flex-col gap-2 xs:gap-0">
                        {getDisplayedPoints(exp[key].points, key).map((ele, index) => {
                          const displayedPoints = getDisplayedPoints(exp[key].points, key);
                          const isLastTruncated = shouldShowReadMore(exp[key].points) && 
                                                 !expandedItems[key] && 
                                                 index === displayedPoints.length - 1;
                          
                          return (
                            <li key={ele}>
                              {renderPointWithReadMore(ele, isLastTruncated, key)}
                            </li>
                          );
                        })}
                        {expandedItems[key] && shouldShowReadMore(exp[key].points) && (
                          <div>
                            <button
                              onClick={() => toggleExpanded(key)}
                              className="text-sm font-medium text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-300 transition-colors duration-200 outline-none underline underline-offset-2 hover:no-underline"
                            >
                              Read Less
                            </button>
                            </div>
                        )}
                      </ul>
                      {exp[key].technologies && (
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {exp[key].technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-sky-600 dark:bg-slate-800 dark:text-sky-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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
