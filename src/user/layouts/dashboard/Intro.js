import React from "react";

import { GiClick, GiCardPickup } from "react-icons/gi";
import { BiMailSend } from "react-icons/bi";
import { MdOutlineTimer, MdOutlineInvertColors } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

function Intro() {
  const cardList = [
    {
      icon: <GiClick className="text-white text-7xl w-full mb-3" />,
      title: "Choose Sample",
      title2: "Choose a logo that is similar to your desired logo",
    },
    {
      icon: <BiMailSend className="text-white text-7xl w-full mb-3" />,
      title: "Send to Us",
      title2:
        "Send your choosen logo and explain what kind of logo you want to make",
    },
    {
      icon: <MdOutlineTimer className="text-white text-7xl w-full mb-3" />,
      title: "Working Process",
      title2: "We will finish the logo sample as soon as possible",
    },
    {
      icon: <GiCardPickup className="text-white text-7xl w-full mb-3" />,
      title: "Decide Logo",
      title2: "We will make 3 logo samples according to your request",
    },
    {
      icon: (
        <MdOutlineInvertColors className="text-white text-7xl w-full mb-3" />
      ),
      title: "Decide Color",
      title2: "We will also make a logo with a different color",
    },
    {
      icon: <FaHandshake className="text-white text-7xl w-full mb-3" />,
      title: "Get your Logo",
      title2:
        "Pay and get your logo. We will provide all the logo formats you want",
    },
  ];

  return (
    // border-solid border-2 border-sky-500
    <React.Fragment>
      <section id="order">
        <div className="my-3 p-4">
          <h1 className="text-3xl font-bold text-center">
            Create the Perfect Logo for Your Business
          </h1>
          <p className="font-normal text-center p-2">
            <strong>Insomnia Logo</strong> has over 1,000+ premium logo designs
            created by designers from Bali - Indonesia. Here's how it works:
          </p>
        </div>
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {cardList.map((data, i) => (
              <div
                key={i}
                className="card bg-white m-2 max-h-fit p-5 cursor-pointer border border-gray-400 rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
              >
                <div className="inline-flex items-center mb-4 justify-center w-32 h-32 mr-2 transition-colors duration-150 bg-blue-800 rounded-full focus:shadow-outline hover:bg-stone-800 shadow-lg">
                  {data.icon}
                </div>

                <h5 className="mb-2 text-3xl font-bold tracking-tight text-black">
                  {data.title}
                </h5>
                <p className="font-normal text-lg text-gray-700 dark:text-gray-400">
                  {data.title2}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Intro;
