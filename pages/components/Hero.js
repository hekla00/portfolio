import React, { useState } from "react";

function IndexPage() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20">
                <nav className="relative z-50 lg:hidden">
                    <div className="flex items-center justify-between px-4 py-2">
                        <div className="flex flex-wrap pt-2 justify-left">
                            <div className="w-2/12 lg:w-4/12">
                                <img src="/logo.png" className="h-auto max-w-full border-none rounded shadow-lg align-left" />
                            </div>
                        </div>
                        <div className="flex items-center visible">
                            <ul id="list" className={menu ? "top-100 p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24" : " hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24"}>
                                <li className="flex py-2 mt-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Home</span>
                                    </a>
                                </li>
                                <li className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">About Me</span>
                                    </a>
                                </li>
                                <li className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Skills</span>
                                    </a>
                                </li>
                                <li className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Portfolio</span>
                                    </a>
                                </li>
                                <li className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Timeline</span>
                                    </a>
                                </li>
                                <li className="flex flex-col justify-center py-2 text-sm leading-3 tracking-normal text-gray-600 cursor-pointer hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Contact</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                {!menu && (
                                    <svg onClick={() => setMenu(true)} id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                                {menu && (
                                    <svg onClick={() => setMenu(false)} aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="relative z-10 f-f-l">
                    <div className="container relative z-10 items-center justify-between hidden w-full px-4 mx-auto xl:px-0 lg:flex py-11">
                        <div className="flex flex-wrap justify-left">
                            {/* <div className="w-2/12 lg:w-4/12">
                                <img src="/logo.png" className="h-auto max-w-full border-none rounded shadow-lg align-left" />
                            </div> */}
                            <h1 className="font-bold text-ghostWhite"> Hekla A. Samuelsdottir</h1>
                        </div>
                        <div className="flex items-center text-lg font-bold text-ghostWhite ">
                            <ul className="flex items-center pr-3 xl:pr-12">
                                <li className="cursor-pointer">
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                                    <a href="javascript:void(0)">About Me</a>
                                </li>
                                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                                    <a href="javascript:void(0)">Skills</a>
                                </li>
                                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                                    <a href="javascript:void(0)">Portfolio</a>
                                </li>
                                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                                    <a href="javascript:void(0)">Timeline</a>
                                </li>
                                <li className="pl-3 cursor-pointer lg:pl-5 xl:pl-8">
                                    <a href="javascript:void(0)">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container relative grid gap-8 px-4 pt-16 mx-auto xl:px-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:pt-36">
                    <div className="text-color">
                        <h1 className="w-1/2 text-4xl font-extrabold text-ghostWhite xl:w-full xl:text-6xl f-f-l">
                            <div>
                                <h2>Hi,</h2>
                                <h2>I'm Hekla</h2>
                            </div>     
                        </h1>
                        <div className="pt-2 text-2xl font-bold pb-30 text-ghostWhite f-f-r lg:text-3xl sm:pb-20 xl:pt-6">
                            <h2>A Computer Science Student at TBD</h2>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
        </>
    );
}

export default IndexPage;
