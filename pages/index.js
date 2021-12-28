import Link from "next/link";
import React, { useState } from "react";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TimelineTwo from "./components/Timeline";
import Scroll from "react-scroll";
import Certifications from "./components/Certifications";

const ScrollLink = Scroll.ScrollLink;

export default function Layout() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="bg-darkVanilla text-black">
      <nav className="relative z-50 lg:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex flex-wrap pt-2 justify-left">
            {/* <div className="w-2/12 lg:w-4/12">
              <img
                src="/logo.png"
                className="h-auto max-w-full border-none rounded shadow-lg align-left"
              />
            </div> */}
          </div>
          <div className="flex items-center visible">
            <ul
              id="list"
              className={
                menu
                  ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24"
                  : " hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24"
              }
            >
              <li
                className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick="dropdownHandler(this)"
              >
                <ScrollLink to="About" spy={true} smooth={true} duration={500}>
                  <span className="ml-2 font-bold">About Me</span>
                </ScrollLink>
              </li>
              <li
                className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick="dropdownHandler(this)"
              >
                <ScrollLink to="Skills" spy={true} smooth={true} duration={500}>
                  <span className="ml-2 font-bold">Skills</span>
                </ScrollLink>
              </li>
              <li
                className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick="dropdownHandler(this)"
              >
                <ScrollLink
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="ml-2 font-bold">Portfolio</span>
                </ScrollLink>
              </li>
              <li
                className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick="dropdownHandler(this)"
              >
                <ScrollLink
                  to="Timeline"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="ml-2 font-bold">Timeline</span>
                </ScrollLink>
              </li>
              <li
                className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none"
                onClick="dropdownHandler(this)"
              >
                <ScrollLink
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className="ml-2 font-bold">Contact</span>
                </ScrollLink>
              </li>
            </ul>
            <div className="xl:hidden">
              {!menu && (
                <svg
                  onClick={() => setMenu(true)}
                  id="open"
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="show-m-menu icon icon-tabler icon-tabler-menu"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              )}
              {menu && (
                <svg
                  onClick={() => setMenu(false)}
                  aria-label="Close"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              )}
            </div>
          </div>
        </div>
      </nav>
      <nav className="sticky top-0 z-50 mx-auto f-f-l sm:px-6 lg:px-4">
        <div className="container relative z-10 items-center justify-between hidden w-full px-4 mx-auto xl:px-0 lg:flex py-11">
          <div className="flex flex-wrap justify-left">
            {/* <div className="w-2/12 lg:w-4/12">
                                <img src="/logo.png" className="h-auto max-w-full border-none rounded shadow-lg align-left" />
                            </div> */}

            <h1 className="font-bold text-black text-3xl">
              {" "}
              Hekla A. Samuelsdottir
            </h1>
          </div>
          <div className="flex items-center text-lg font-bold text-black ">
            <ul className="flex items-center pr-3 xl:pr-12">
              <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                <a href="#About">About Me</a>
              </li>
              <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                <a href="#Skills">Skills</a>
              </li>
              <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                <Link href="#Timeline">Timeline</Link>
              </li>
              <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Hero />
      <About />
      <Skills />
      <PortfolioSection />
      <TimelineTwo />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
