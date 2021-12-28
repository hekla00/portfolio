import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      id="Contact"
      name="Contact"
      className="px-4 py-16 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="relative max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-2 text-lg leading-6 text-gray-900">
            Email: hekladev@gmail.com
          </p>
          <p className="pt-4 text-gray-600">or use the following form</p>
        </div>
        <div className="mt-12">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-gray-300 focus:border-gray-300"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-300 focus:border-gray-300"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium border border-gray-300 rounded-md shadow-sm text-black bg-ghostWhite hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
