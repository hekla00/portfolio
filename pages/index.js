import Link from "next/link";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import TimelineTwo from "./components/Timeline";
import Scroll from "react-scroll";
import Certifications from "./components/Certifications";
import Head from "next/head";

const ScrollLink = Scroll.ScrollLink;

export default function Layout() {
  return (
    <div>
      {/* adds tab title */}
      <Head>
        <title>Hekla Samuelsdottir</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-darkVanilla text-black">
        <nav className="sticky top-0 z-50 mx-auto f-f-l sm:px-6 lg:px-4 bg-darkVanilla py-6">
          <div className="container relative z-10 items-center justify-between hidden w-full mx-auto px-4 lg:flex">
            <div className="flex flex-wrap justify-left">
              <h1 className="font-bold text-black text-2xl">
                {" "}
                <Link href="#">Hekla A. Samuelsdottir</Link>
              </h1>
            </div>
            <div className="text-lg flex items-center font-bold text-black ">
              <ul className="flex items-center pr-2">
                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                  <Link href="#About">About Me</Link>
                </li>
                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                  <Link href="#Skills">Skills</Link>
                </li>
                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                  <Link href="#Portfolio">Portfolio</Link>
                </li>
                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                  <Link href="#Timeline">Timeline</Link>
                </li>
                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                  <Link href="#Certifications">Certifications</Link>
                </li>
                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                  <Link href="#Contact">Contact</Link>
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
        {/* <Contact /> */}
        <Footer />
      </div>
    </div>
  );
}
