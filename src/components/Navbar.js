import { MailIcon } from "@heroicons/react/solid";
import { CodeIcon } from "@heroicons/react/solid";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <aside className="bg-gray-800 fixed top-0 left-0 z-50 h-screen w-150 flex flex-col justify-between">
      <div className="p-5">
        <nav className="mt-2">
          <ul className="space-y-4">
            <li className="group relative">
              <a href="#projects" className="text-white hover:text-gray-300">
                <CodeIcon className="w-7 h-7 ml-1" />
                <span className="absolute left-10 top-0 bg-gray-900 text-white text-s px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">Projects</span>
              </a>
            </li>
            <li className="group relative">
              <a href="#skills" className="text-white hover:text-gray-300">
                <ChipIcon className="w-7 h-7 ml-1" />
                <span className="absolute left-10 top-0 bg-gray-900 text-white text-s px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">Skills</span>
              </a>
            </li>
            <li className="group relative">
              <a href="#education" className="text-white hover:text-gray-300">
                <AcademicCapIcon className="w-7 h-7 ml-1" />
                <span className="absolute left-10 top-0 bg-gray-900 text-white text-s px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">Education</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-5 mt-auto">
        <div className="group relative">
          <a href="#contact" className="text-white hover:text-gray-300">
            <MailIcon className="w-7 h-7 ml-1" />
            <span className="absolute left-10 top-0 bg-gray-900 text-white text-s px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity" style={{ whiteSpace: 'nowrap' }}>Contact Me</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
