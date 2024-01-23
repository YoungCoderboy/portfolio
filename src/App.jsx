// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import About from "./component/About";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Design from "./component/Design";
import Experience from "./component/Experience";
import Loader from "./component/Loader";
import Nav from "./component/Nav";
import Portfolio from "./component/Portfolio";
import React, { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Loader />
          <Design />
        </div>
      ) : (
        <div className="w-full h-screen bg-banner-bg">
          <Nav />
          <Banner />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Design />
        </div>
      )}
    </>
  );
}
