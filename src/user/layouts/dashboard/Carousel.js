import React, { useState, useRef, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingImage from "../../../assets/loading-image.gif";
import "react-lazy-load-image-component/src/effects/blur.css";
import logo1 from "../../../assets/logo/logo3.jpeg";
import logo2 from "../../../assets/logo/logo15.jpeg";
import logo3 from "../../../assets/logo/logo16.jpeg";
import logo4 from "../../../assets/logo/logo18.jpeg";
import logo5 from "../../../assets/logo/logo20.jpeg";
import logo6 from "../../../assets/logo/logo22.jpeg";
import logo7 from "../../../assets/logo/logo27.jpeg";
import logo8 from "../../../assets/logo/logo29.jpeg";

const data = [
  {
    imageUrl: logo1,
  },
  {
    imageUrl: logo2,
  },
  {
    imageUrl: logo3,
  },
  {
    imageUrl: logo4,
  },
  {
    imageUrl: logo5,
  },
  {
    imageUrl: logo6,
  },
  {
    imageUrl: logo7,
  },
  {
    imageUrl: logo8,
  },
];

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <section id="home">
      <div className="carousel my-1 mx-auto">
        <div className="relative overflow-hidden">
          <div className="flex justify-between absolute top left w-full h-full">
            <button
              onClick={movePrev}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("prev")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="sr-only">Prev</span>
            </button>
            <button
              onClick={moveNext}
              className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
              disabled={isDisabled("next")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-20 -ml-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div
            ref={carousel}
            className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          >
            {data.map((resource, index) => {
              return (
                <div
                  key={index}
                  className="text-center relative w-64 h-64 snap-start"
                >
                  <a
                    href={resource.link}
                    className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                    style={{
                      backgroundImage: `url(${resource.imageUrl || ""})`,
                    }}
                  >
                    <LazyLoadImage
                      src={resource.imageUrl || ""}
                      className="w-full aspect-square hidden object-none object-center"
                      loading="lazy"
                      alt={resource.title}
                      placeholderSrc={LoadingImage}
                      effect="blur"
                    />
                  </a>
                  {/* <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
