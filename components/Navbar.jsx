"use client";

import { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import {
  PencilSquareIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/16/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="shadow-md w-full top-0 left-0 z-10">
      <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <Link
            href="/"
            className="flex items-center justify-center hover:text-brightBlue duration-500"
          >
            <PencilSquareIcon className="w-12 h-12 text-brightBlue" />
            TechWritingPro
          </Link>
        </div>

        <Bars3Icon
          className={`w-12 h-12 absolute right-8 top-6 cursor-pointer md:hidden ${
            open ? "hidden" : ""
          }`}
          onClick={toggleMenu}
        />
        <XMarkIcon
          className={`w-12 h-12 absolute right-8 top-6 cursor-pointer md:hidden ${
            !open ? "hidden" : ""
          }`}
          onClick={toggleMenu}
        />

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-out ${
            open ? "top-22 " : "top-[-490px]"
          }`}
        >
          {navLinks.map(({ id, link, title }) => (
            <li key={id} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                href={link}
                className="text-gray-800 hover:text-brightBlue duration-500"
                onClick={toggleMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
