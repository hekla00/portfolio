export default function Hero() {
  return (
    <>
      <div id="Hero" name="Hero" className="container mx-auto sm:px-6 lg:px-28">
        <div className="relative pl-8 lg:pb-15 grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="container relative px-4 pt-16 mx-auto">
            <div className="text-color">
              <h1 className="w-1/2 pt-10 text-4xl font-extrabold text-black xl:w-full xl:text-6xl f-f-l">
                <div>
                  <h2>Hi,</h2>
                  <h2>I'm Hekla</h2>
                </div>
              </h1>
              <div className="pt-2 text-xl font-bold pb-30 text-black f-f-r lg:text-2xl sm:pb-20 xl:pt-6">
                <h2>
                  A Computer Science and Information Technology Student at
                  National University of Ireland Galway (NUIG).
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
