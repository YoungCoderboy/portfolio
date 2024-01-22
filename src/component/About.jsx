import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-game inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl font-game ">
          Hey there! I'm a third-year Computer Science and Engineering student
          at Indian Institute of Information Technology Pune, and I'm rocking it
          with skills in C, C++, Java, and Python, along with a knack for Data
          Structures and Algorithms. I thrive on coding challenges and am
          venturing into Android and Web development, managing the robotic club
          with an amazing team of tech enthusiasts.
        </p>
        <p className="text-xl mt-20 font-game">
          On a lighter note, life outside coding is all about fun for me. I'm a
          massive anime fan, finding magic in captivating stories and vibrant
          animation. When not immersed in the anime universe, I dive into gaming
          adventures, from epic quests to multiplayer battles. And, of course,
          there's my love affair with Linux – the open-source power is
          mind-blowing. Let's geek out or discuss the latest tech trends
          whenever you're up for it!
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
