import React from "react";
import HeroImage from "../assets/img/header-img.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(400);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "Programmer",
    "Problem Solver",
    "Cyber Expert",
  ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-black  bg-no-repeat bg-center bg-cover"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-cur text-white mr-10">
            {`Hi! I'm Deep Onkar`} <br />
            {/* <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
            > */}
            <div className="mt-10">
              <span>{text}</span>
            </div>
            {/* </span> */}
          </h2>
          <p className="text-gray-500 py-4 max-w-md mt-10">
            Indian Institute of Information Technology Pune 2025 | React JS |
            Node.JS | Full Stack Web Developer (MERN Stack Developer) | Android
            Developer | Competitive Programmer | Codeforces Pupil (Max: 1227) |
            CodeChef 3-Star (Max: 1668)
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto ml-20 w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
