import React from "react";
import Med from "../assets/portfolio/Med.png";
import nodejs from "../assets/portfolio/nodejs.png";
import estore from "../assets/portfolio/estore.png";
import battery from "../assets/portfolio/battery.png";
import deepai from "../assets/portfolio/deepai.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Med,
      link: "https://github.com/YoungCoderboy/med-Dapp",
      live: "https://github.com/YoungCoderboy/med-Dapp",
      // live: "https://estore-react-learning.netlify.app/",
    },
    {
      id: 2,
      src: nodejs,
      link: "https://github.com/YoungCoderboy/natour",
      live: "https://github.com/YoungCoderboy/natour",
      // live: "https://estore-react-learning.netlify.app/",
    },
    {
      id: 3,
      src: estore,
      link: "https://github.com/YoungCoderboy/estore",
      live: "https://estore-react-learning.netlify.app/",
    },
    {
      id: 4,
      src: battery,
      link: "https://github.com/YoungCoderboy/Battery",
      live: "https://github.com/YoungCoderboy/Battery",
      // live: "https://estore-react-learning.netlify.app/",
    },
    {
      id: 5,
      src: deepai,
      link: "https://github.com/YoungCoderboy/Deep-Helper",
      live: "https://marketplace.visualstudio.com/items?itemName=DemonSlayer.deep-ai",
    },
  ];

  return (
    <div name="projects" className="bg-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-game inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, live }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link}>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>
              <div className="flex items-center justify-center">
                <a
                  href={live}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </a>
                <a
                  href={link}
                  target="blank"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
