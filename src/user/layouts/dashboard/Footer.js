import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className="p-4 bg-gray-900 shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-8"
              alt="Insomnia Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-500">
              Insomnia-Logo
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/#home" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="/#order" className="mr-4 hover:underline md:mr-6">
                How to Order
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="mr-4 hover:underline md:mr-6 ">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Insomnia Logo™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
