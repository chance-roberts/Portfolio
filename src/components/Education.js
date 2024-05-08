import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { education } from "../data";
import { courses } from "../data";

export default function Education() {
    return (
        <section id="education" className="text-gray-400 bg-gray-900 body-font relative overflow-hidden">
          <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
              <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                Education &amp; Certifications
              </h1>
            </div>
            <ul className="divide-y divide-gray-800">
              {education.map((educationItem) => (
                <li key={educationItem.image} className="py-4">
                  <a href={educationItem.link} target="_blank" rel="noopener noreferrer" className="flex flex-wrap -m-1">
                    <div className="flex relative w-full">
                      <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                      />
                      <div className="px-13 py-13 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                          {educationItem.institution}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                          {educationItem.degree}
                        </h1>
                        <p className="leading-relaxed">{educationItem.completionDate}</p>
                        <p className="leading-relaxed">{educationItem.gpa}</p>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-3xl font-medium title-font text-white mb-4">
                Related Coursework
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Coursework through graduate studies at Middle Tennessee State University.
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {courses.map((courses) => (
                <div key={courses} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <span className="title-font font-medium text-white">
                      {courses}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}
