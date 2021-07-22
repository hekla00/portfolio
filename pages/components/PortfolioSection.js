export default function PortfolioSection() {
    return (
        <div className="px-2 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-0 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Portfolio
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <span className="relative">Personal Projects</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Here you can see some of the projects I have done on my own time
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-6 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">Project Name</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                                been dogged by two questions since the day it was made: Who’s
                                the subject and why is she smiling?
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">Project Name</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Vincent Van Gogh’s most popular painting, The Starry Night was
                                created by Van Gogh at the asylum in Saint-Rémy, where he’d
                                committed himself in 1889.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">Project Name</p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Opulently gilded and extravagantly patterned, The Kiss, Gustav
                                Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                                Symbolism and Vienna Jugendstil, the Austrian variant of Art
                                Nouveau.
                            </p>
                        </div>
                    </div>
                </a>
                <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                        <img
                            className="object-cover w-full h-56 md:h-64 xl:h-80"
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                            <p className="mb-4 text-lg font-bold text-gray-100">
                                The Harvesters
                            </p>
                            <p className="text-sm tracking-wide text-gray-300">
                                Bruegel’s fanfare for the common man is considered one of the
                                defining works of Western art. This composition was one of six
                                created on the theme of the seasons.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        {/* <div className="text-center">
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                >
                    View portfolio
                    <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                    >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                </a>
            </div> */}
      </div>
    );
  };


