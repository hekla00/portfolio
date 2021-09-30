export default function Skills() {
  return (
    <div
      id="Skills"
      name="Skills"
      className="pt-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Skills</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Below is an overview of my skills, and I am always looking to learn
          more.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            {/* <a href="https://iconscout.com/icons/python" target="_blank">Python Glyph Icon</a> by <a href="https://iconscout.com/contributors/benjamin-j-sperry">Benjamin J Sperry</a> on <a href="https://iconscout.com">Iconscout</a> */}
            <img src={"./icons/python.svg"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Python</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            I started learning Python the summer before college by completing
            the Udemy course{" "}
            <a
              className="font-bold"
              href="https://www.udemy.com/course/pythontutorial/"
              target="_blank"
            >
              "Python Complete Masterclass for beginners"
            </a>
            by Mihai Catalin Teodosin. During my first year of college, I also
            learned Python, and I was introduced to the following libraries:
            NumPy, pandas and matplotlib.
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            {/* <a href="https://iconscout.com/icons/javascript" target="_blank">Javascript Icon</a> by <a href="https://iconscout.com/contributors/benjamin-j-sperry">Benjamin J Sperry</a> on <a href="https://iconscout.com">Iconscout</a> */}
            <img src={"./icons/javascript.svg"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">JavaScript</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Satoshi Nakamoto launched lots of decentralisation when Litecoin
            required
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            {/* <a href="https://iconscout.com/icons/react" target="_blank">React Glyph Icon</a> by <a href="https://iconscout.com/contributors/vorillaz">Vorillaz</a> on <a href="https://iconscout.com">Iconscout</a> */}
            <img src={"./icons/react.svg"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Reactjs</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            <img src={"./icons/nodejs.png"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Node.js</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            {/* https://vercel.com/design/nextjs */}
            <img src={"./icons/nextjs.svg"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">Next.js</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            {/* <a href="https://iconscout.com/icons/code" target="_blank">Code Glyph Icon</a> by <a href="https://iconscout.com/contributors/useiconic">Useiconic</a> on <a href="https://iconscout.com">Iconscout</a> */}
            <img src={"./icons/code.svg"} />
          </div>
          <h6 className="mb-2 font-semibold leading-5">HTML & CSS</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
        </div>
        {/* More Skills Below  */}
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            <img />
          </div>
          <h6 className="mb-2 font-semibold leading-5">...</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            <img />
          </div>
          <h6 className="mb-2 font-semibold leading-5">...</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 sm:mx-auto sm:w-24 sm:h-24">
            <img />
          </div>
          <h6 className="mb-2 font-semibold leading-5">...</h6>
          <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
            mechad
          </p>
        </div>
      </div>
    </div>
  );
}
