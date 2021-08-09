export default function TimelineTwo() {
  return (
    // container
    <div
      id="Timeline"
      name="Timeline"
      className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20"
    >
      {/*component*/}
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Timeline</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Summary of my work experience
        </p>
      </div>
      <div className="flex flex-col grid-cols-9 pt-2 pb-6 mx-auto text-white md:grid">
        {/*left*/}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 pl-2 my-4">
            <h3 className="text-sm font-semibold">Date</h3>
            <h3 className="text-xl font-bold">Company</h3>
            <h3 className="mb-1 text-lg font-semibold">Location</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, quaerat? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, quaerat? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, quaerat?
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-white pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-4 bg-white rounded-full shadow top-1/2"></div>
          </div>
        </div>
        {/*right*/}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-white pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white rounded-full shadow top-1/2"></div>
          </div>
          <div className="col-start-6 col-end-10 pr-2 my-4 mr-auto">
            <h3 className="text-sm font-semibold">Date</h3>
            <h3 className="text-xl font-bold">Company</h3>
            <h3 className="mb-1 text-lg font-semibold">Location</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, quaerat? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, quaerat? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, quaerat?
            </p>
          </div>
        </div>
        {/*left*/}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 pl-2 my-4 ml-auto">
            <h3 className="text-sm font-semibold">Date</h3>
            <h3 className="text-xl font-bold">Company</h3>
            <h3 className="mb-1 text-lg font-semibold">Location</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, quaerat? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, quaerat? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, quaerat?
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-white pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white rounded-full shadow top-1/2"></div>
          </div>
        </div>
        {/*right*/}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-white pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-white rounded-full shadow top-1/2"></div>
          </div>
          <div className="col-start-6 col-end-10 pr-2 my-4 mr-auto">
            <h3 className="text-sm font-semibold">Date</h3>
            <h3 className="text-xl font-bold">Company</h3>
            <h3 className="mb-1 text-lg font-semibold">Location</h3>
            <p className="leading-tight text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi, quaerat? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Modi, quaerat? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, quaerat?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
