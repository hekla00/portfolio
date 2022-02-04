export default function Certifications() {
  return (
    <div
      id="Certifications"
      name="Certifications"
      className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20"
    >
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block items-center px-4">
            <span className="relative">Certifications</span>
          </span>{" "}
        </h2>
        <p className="text-base items-center text-gray-700 md:text-lg px-4">
          Summary of my certifications
        </p>
      </div>
      <fieldset className="border-t border-b border-gray-200 px-4">
        <div className="divide-y divide-gray-200">
          <div className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <h3 className="text-sm font-semibold">November 2021</h3>
              <h2 className="text-lg font-bold">
                General Data Protection Regulations (GDPR)
              </h2>
              <h3 className="mb-1 font-semibold">
                National University of Ireland, Galway
              </h3>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <h3 className="text-sm font-semibold">June 2021</h3>
            <h2 className="text-lg font-bold">
              Python Complete Masterclass for Beginners
            </h2>
            <h3 className="mb-1 font-semibold">Udemy</h3>
            <p className="text-gray-600">
              Learned Python the summer before college by completing this
              course.
            </p>
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <h3 className="text-sm font-semibold">March 2021</h3>
            <h2 className="text-lg font-bold">
              C Programming: Getting Started
            </h2>
            <h3 className="mb-1 font-semibold">edX</h3>
            <p className="text-gray-600">
              Learned how to declare, initialise, and modify variables of
              different data types, use for-loops, and create and comment simple
              C-programs that can print text, special characters, and variables
              to the screen.
            </p>
          </div>
        </div>
        <div className="relative flex items-start py-4">
          <div className="min-w-0 flex-1 text-sm">
            <h3 className="text-sm font-semibold">Feb 2021</h3>
            <h2 className="text-lg font-bold">
              The Complete Web Developer in 2021: Zero to Mastery
            </h2>
            <h3 className="mb-1 font-semibold">Udemy</h3>
            <p className="text-gray-600">
              Learned HTML, CSS, JavaScript, DOM manipulation, Git, GitHub, NPM,
              React.js, APIs, Node.js in this course.
            </p>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
