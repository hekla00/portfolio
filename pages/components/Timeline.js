export default function Timeline() {
  return (
    <div
      id="Timeline"
      name="Timeline"
      className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20"
    >
      {/*component*/}
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center px-2 lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Timeline</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Summary of my education and work experience
        </p>
      </div>
      <div className="flex flex-col grid-cols-9 pt-2 pb-6 mx-auto text-black md:grid px-4">
        {/*left*/}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 pl-2 my-4">
            <h3 className="text-sm font-semibold">
              September 2021 - Present(2024)
            </h3>
            <h3 className="text-xl font-bold">
              Bachelor of Science Computer Science & Information Technology,
              NUIG
            </h3>
            <h3 className="mb-1 text-lg font-semibold">Galway, Ireland</h3>
            <p className="leading-tight text-justify text-gray-600">
              <p className="font-semibold text-black">
                Second Year – Currently Studying (Expected result overall 2:1).
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Object Oriented Programming (B), Computer Systems &
                  Organization (A), Database Systems I (B), Statistics for Data
                  Science (A), Discrete Maths (B).
                </li>
                <li>
                  Next Generation Technologies II (N/A), Software Engineering I
                  (N/A), Object Oriented Programming: Data Structures &
                  Algorithms (N/A), Networks & Data Communications I (N/A),
                  Introduction to Modelling (N/A), Linear Algebra (N/A).
                </li>
                <li>
                  Technologies taught: Java, R, SQL, Vue.js, Firebase, MATLAB,
                  Wireshark.
                </li>
              </ul>
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-black pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-4 bg-black rounded-full shadow top-1/2"></div>
          </div>
        </div>
        {/*right*/}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-black pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-black rounded-full shadow top-1/2"></div>
          </div>
          <div className="col-start-6 col-end-10 pr-2 my-4 mr-auto">
            <h3 className="text-sm font-semibold">June 2021 - August 2021</h3>
            <h3 className="text-xl font-bold">
              Software Engineering Internship
            </h3>
            <h3 className="mb-1 text-lg font-semibold">Remote</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>
                Opin Kerfi hf is an Information Technology company located in
                Reykjavík, Iceland.
              </li>
              <li>
                Redesigned a standard React app that used Patternfly UI kit to
                Tailwind UI kit in a Next.js, React.js app.
              </li>
              <li>
                Utilized GraphQL API to fetch data from the backend, written in
                Django and data was stored in PostgreSQL database.
              </li>
              <li>
                Cultivated an in-depth understanding of new technologies:
                React.js, Next.js, GraphQL and Tailwind CSS.
              </li>
            </ul>
          </div>
        </div>
        {/*left*/}
        <div className="flex flex-row-reverse md:contents">
          <div className="col-start-1 col-end-5 pl-2 my-4 ml-auto">
            <h3 className="text-sm font-semibold">
              September 2020 - June 2021
            </h3>
            <h3 className="text-xl font-bold">
              Bachelor of Science General Science, NUIG
            </h3>
            <h3 className="mb-1 text-lg font-semibold">Galway, Ireland</h3>
            <p className="leading-tight text-justify text-gray-600">
              <p className="font-semibold text-black">
                First Year - Overall Grade: 1:1.{" "}
              </p>
              Computer Science (A), Physics (A), Applied Mathematics (A),
              Mathematical Studies (A). Technology taught: Python. On completion
              of first year, I transferred to the Computer Science and
              Information Technology course at NUIG.
            </p>
          </div>
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-black pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-black rounded-full shadow top-1/2"></div>
          </div>
        </div>
        {/*right*/}
        <div className="flex md:contents">
          <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
            <div className="flex items-center justify-center w-6 h-full">
              <div className="w-1 h-full bg-black pointer-events-none"></div>
            </div>
            <div className="absolute w-6 h-6 -mt-3 bg-black rounded-full shadow top-1/2"></div>
          </div>
          <div className="col-start-6 col-end-10 pr-2 my-4 mr-auto">
            <h3 className="text-sm font-semibold">August 2018 - June 2020</h3>
            <h3 className="text-xl font-bold">
              International Baccalaureate Bilingual Diploma
            </h3>
            <h3 className="mb-1 text-lg font-semibold">
              Sandefjord VGS, Norway
            </h3>
            <p className="leading-tight text-justify text-gray-600">
              <p className="font-semibold text-black">
                IB points: 34 (CAO: 463).
              </p>
              Subjects: Icelandic A SL, English B HL, Economics SL, Biology HL,
              Chemistry HL, Mathematics SL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
