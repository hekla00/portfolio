function IndexPage() {
    return (
        <>
            <div className="container mx-auto sm:px-6 lg:px-28">
            <div className="relative pl-8 lg:pb-15">
                <div className="container relative px-4 pt-16 mx-auto">
                    <div className="text-color">
                        <h1 className="w-1/2 pt-10 text-4xl font-extrabold text-ghostWhite xl:w-full xl:text-6xl f-f-l">
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
