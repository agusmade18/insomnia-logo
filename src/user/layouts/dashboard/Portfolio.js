import React, { useState } from "react";
//import imageGallery
import ImageGallery from "react-image-gallery";
//import imageGallery CSS
import "react-image-gallery/styles/css/image-gallery.css";
import { Gallery } from "react-grid-gallery";

function Portfolio() {
  const images = [
    {
      original: require("../../../assets/logo/logo1.jpeg"),
      thumbnail: require("../../../assets/logo/logo1.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo2.jpeg"),
      thumbnail: require("../../../assets/logo/logo2.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo3.jpeg"),
      thumbnail: require("../../../assets/logo/logo3.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo4.jpeg"),
      thumbnail: require("../../../assets/logo/logo4.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo5.jpeg"),
      thumbnail: require("../../../assets/logo/logo5.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo6.jpeg"),
      thumbnail: require("../../../assets/logo/logo6.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo7.jpeg"),
      thumbnail: require("../../../assets/logo/logo7.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo8.jpeg"),
      thumbnail: require("../../../assets/logo/logo8.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo9.jpeg"),
      thumbnail: require("../../../assets/logo/logo9.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo10.jpeg"),
      thumbnail: require("../../../assets/logo/logo10.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo11.jpeg"),
      thumbnail: require("../../../assets/logo/logo11.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo12.jpeg"),
      thumbnail: require("../../../assets/logo/logo12.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo13.jpeg"),
      thumbnail: require("../../../assets/logo/logo13.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo14.jpeg"),
      thumbnail: require("../../../assets/logo/logo14.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo15.jpeg"),
      thumbnail: require("../../../assets/logo/logo15.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo16.jpeg"),
      thumbnail: require("../../../assets/logo/logo16.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo17.jpeg"),
      thumbnail: require("../../../assets/logo/logo17.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo18.jpeg"),
      thumbnail: require("../../../assets/logo/logo18.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo19.jpeg"),
      thumbnail: require("../../../assets/logo/logo19.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo20.jpeg"),
      thumbnail: require("../../../assets/logo/logo20.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo21.jpeg"),
      thumbnail: require("../../../assets/logo/logo21.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo22.jpeg"),
      thumbnail: require("../../../assets/logo/logo22.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo23.jpeg"),
      thumbnail: require("../../../assets/logo/logo23.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo24.jpeg"),
      thumbnail: require("../../../assets/logo/logo24.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo25.jpeg"),
      thumbnail: require("../../../assets/logo/logo25.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo26.jpeg"),
      thumbnail: require("../../../assets/logo/logo26.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo27.jpeg"),
      thumbnail: require("../../../assets/logo/logo27.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo28.jpeg"),
      thumbnail: require("../../../assets/logo/logo28.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo29.jpeg"),
      thumbnail: require("../../../assets/logo/logo29.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo30.jpeg"),
      thumbnail: require("../../../assets/logo/logo30.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo31.jpeg"),
      thumbnail: require("../../../assets/logo/logo31.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo32.jpeg"),
      thumbnail: require("../../../assets/logo/logo32.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo33.jpeg"),
      thumbnail: require("../../../assets/logo/logo33.jpeg"),
    },
    {
      original: require("../../../assets/logo/logo34.jpeg"),
      thumbnail: require("../../../assets/logo/logo34.jpeg"),
    },
  ];

  return (
    <React.Fragment>
      <section id="portfolio">
        <div className="bg-gray-800 p-5 mt-10 text-center">
          <h2 className="text-3xl font-bold text-center text-white px-3 pt-10">
            See Our Portfolio
          </h2>
          <p className="font-normal text-center p-2 text-white mb-5">
            Create a logo with our diverse catalog. Pick one and we'll make
            something different
          </p>
          <ImageGallery items={images} autoPlay={true} />
          {/* <div className="w-full mx-auto text-center justify-center px-5 items-center">
          <Gallery
            images={IMAGES}
            enableLightbox={true}
            // maxRows={3}
            backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
          />
        </div> */}
        </div>
      </section>
    </React.Fragment>
  );
}

export default Portfolio;
