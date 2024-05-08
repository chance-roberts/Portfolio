import React from "react";

export default function About() {
    return (
        <section id="about" className = "pt-0">
          <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-30 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Hi, I'm Chance Roberts!
              </h1>
              <p className="mb-8 leading-relaxed">
                I'm an ex-Occupational Health and Safety professional transitioning 
                into Data Science through graduate studies. I have over 5 years of 
                demonstrated experience working in cross-functional teams to drive 
                data-driven solutions for internal and external customers. I live in Nashville, TN, 
                and I enjoy reading, listening to music, traveling, and hanging out with my cats, Tako and Tai.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Let's Connect!
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}
