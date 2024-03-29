import { Link, Outlet } from "react-router-dom";
import portfoliopic3 from "../../assets/Hero/portfoliopic3.png";
import React, { useRef, useState, useEffect } from "react";
import ReactJs from "../../assets/Work/ReactJs.png";
import icons from "../../assets/Hero/icons.png";
import opendoor from "../../assets/Work/opendoor.png";
import penguin from "../../assets/Work/penguin.jpg";
import puredjango from "../../assets/Work/puredjango.jpg";
import city from "../../assets/Work/city.jpg";
import arrow from "../../assets/Hero/arrow.png";
import py from "../../assets/Work/py.png";
import Footer from "../Footer/Footer.jsx";
import AboutSection from "../ShowMoreText/AboutSection.jsx";
import RevealOnScroll from "../RevealOnScroll.jsx";

function HomePage() {
  const aboutRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [aboutHeight, setAboutHeight] = useState("auto");
  const [reactToggle, setReactToggle] = useState(false);
  const [drfToggle, setDrfToggle] = useState(false);
  const [cssToggle, setCssToggle] = useState(false);
  const [skyToggle, setSkyToggle] = useState(false);
  const [djangoToggle, setDjangoToggle] = useState(false);
  const [pyToggle, setPyToggle] = useState(false);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleReactToggle = () => {
    setReactToggle(!reactToggle);
  };
  const handlePyToggle = () => {
    setPyToggle(!pyToggle);
  };
  const handleDrfToggle = () => {
    setDrfToggle(!drfToggle);
  };
  const handleCssToggle = () => {
    setCssToggle(!cssToggle);
  };
  const handleSkyToggle = () => {
    setSkyToggle(!skyToggle);
  };
  const handleDjangoToggle = () => {
    setDjangoToggle(!djangoToggle);
  };

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };
  useEffect(() => {
    if (aboutRef.current) {
      setAboutHeight(aboutRef.current.offsetHeight);
    }
  }, [showMore]);

  return (
    <>
      <section className="relative flex flex-row flex-wrap h-screen">
        <div className="p-6 mt-20  lg:w-1/3 lg:order-2 lg:flex lg:flex-col lg:pt-28 md:w-1/2 md:order-2 md:flex md:pt-32 xl:w-1/2 xl:order-2">
          <div className="md:mr-auto">
            <p className="text-l xs:text-base lg:text-3xl lg:mb-10 lg:top-[25vh] md:text-2xl md:mb-10 xl:text-4xl">
              Hi! My name is
            </p>
            <h1 className="animate-pulse neon text-4xl m-4 xs:text-1xl lg:text-7xl  lg:mb-10 md:text-6xl md:leading-relaxed md:ml-2 xl:text-8xl xl:leading-relaxed">
              Karla
              <span className="lg:ml-10 lg:mr-0 lg:mt-5  md:mt-5"> Gaudet</span>
            </h1>
            <div>
              <p className="text-l xs:text-base lg:mt-5 lg:justify-center lg:items-center md:mt-10 xl:text-2xl xl:ml-10">
                Junior Software Developer
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to="/#about"
                  onClick={() => {
                    handleScroll(aboutRef.current);
                  }}
                >
                  <img
                    className="neon-img animate-bounce hidden lg:inline lg:items-center lg:mt-20 md:inline md:w-20 md:mt-[30vh] xl:mt-[40vh]"
                    src={arrow}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Link
              to="/#about"
              onClick={() => {
                handleScroll(aboutRef.current);
              }}
            >
              <img
                className="neon-img mt:h-[30vh] animate-bounce hidden xl:hidden "
                src={arrow}
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center h-auto xs:w-3/4 xs:h-full lg:w-2/3 lg:h-screen lg:order-1 md:h-full md:w-1/2 xl:w-1/2">
          <div className="relative h-auto  w-3/4  xs:h-full xs:w-[65vw]  lg:h-screen lg:w-3/4 md:h-full md:w-full xl:w-full">
            <img
              className=" z-[-1]  bg-gradient-to-b from-black via-stone-300 object-contain  mb-20
               xl:bg-gradient-to-r xl:from-black xl:via-stone-300 md:bg-gradient-to-r md:from-black md:via-stone-300 lg:bg-gradient-to-r lg:from-black lg:via-stone-300 lg:h-full lg:w-4/5 md:h-full md:w-full xl:w-full xl:object-contain"
              src={icons}
              alt="images of logos for CSS, HTML, REACT and GIT"
            />
            <Link
              to="/#about"
              onClick={() => {
                handleScroll(aboutRef.current);
              }}
            >
              <img
                className="neon-img z-40 m-4 animate-bounce sm:mt-[-15vh] xs:inline xs:mt-[-38vh] md:hidden lg:hidden "
                src={arrow}
              />
            </Link>
            <img
              className="absolute top-[27vh] right-[-20vw] w-3/4 h-auto rounded-md sm:top-[27vh] xs:top-[15vh] xs:right-[-27vw] lg:top-[22vh] lg:right-[-5vw] lg:w-1/2 lg:h-auto md:top-[50vh] md:right-[-11vw] xl:right-[-10vw] xl:top-[53vh] xl:w-[35vw] "
              src={portfoliopic3}
              alt="Professional picture of Karla Gaudet arms crossed, smiling"
            />
          </div>
        </div>
      </section>

      <section
        className="relative flex flex-row flex-wrap lg:h-full"
        id="about"
        ref={aboutRef}
      >
        <AboutSection
          handleShowMore={handleToggleShowMore}
          showMore={showMore}
        />
      </section>

      <section className="relative flex flex-row flex-wrap lg:mt-32 lg:justify-center lg:items-center xl:mt-auto">
        <div className="p-6 mt-8">
          <RevealOnScroll>
            <p className="text-xl">Learn.Create.Repeat</p>
            <h2 className="neon text-2xl m-4 lg:text-5xl">My Projects</h2>
          </RevealOnScroll>
        </div>
      </section>

      <section className=" p-4 my-4 mx-6 border-t-2 border-r-2 border-dotted border-zinc-300 lg:flex lg:flex-col lg:justify-center lg:items-left lg:mx-80 lg:px-44 xl:flex xl:flex-col xl:justify-center xl:items-left xl:mx-10 xl:p-5 ">
        <div
          className="flex items-center justify-between border-b border-gray-500 cursor-pointernpy-2 px-4"
          onClick={handleReactToggle}
        >
          <span className="text-lg">OpenDoor - Frontend</span>
          <span className="text-2xl text-white outline-4 outline-green-950 neon-img">
            {reactToggle ? "▲" : "▼"}
          </span>
        </div>

        {reactToggle && (
          <article className="work">
            <div className="work-img">
              <a href="https://opendoor.netlify.app/" target="_blank">
                <img
                  src={ReactJs}
                  alt="screenshot image of my React JS project that leads to the live site"
                />
              </a>
            </div>

            <div className="mt-4">
              <p>
                <span className="uppercase"> stack:</span> React JS, HTML, CSS
              </p>
              <p>
                <span className="uppercase"> scope:</span> Frontend development
                using APIs created with Django REST. This was a project
                assignment of the She Codes Plus program.
              </p>
              <p>
                <a
                  className="underline text-tan "
                  href="https://opendoor.netlify.app/"
                  target="_blank"
                >
                  View Live
                </a>
              </p>
              <p>
                <a
                  className="underline text-tan "
                  href="https://github.com/ktechgau/crowdfunding_front_end"
                  target="_blank"
                >
                  View code
                </a>
              </p>
            </div>
          </article>
        )}

        <div
          className="flex items-center justify-between border-b border-gray-500 cursor-pointernpy-2 px-4"
          onClick={handleDrfToggle}
        >
          <span className="text-lg">OpenDoor - Backend</span>
          <span className="text-2xl text-white outline-4 outline-green-950 neon-img">
            {drfToggle ? "▲" : "▼"}
          </span>
        </div>
        {drfToggle && (
          <article className="work">
            <div className="work-img">
              <a
                href="https://drf-patient-pond-1056.fly.dev/projects/"
                target="_blank"
              >
                <img
                  src={opendoor}
                  alt="logo of my Django REST project that leads to the live site"
                />
              </a>
            </div>
            <div className="mt-4">
              <p>
                {" "}
                <span className="uppercase"> stack:</span> Django REST, Python
              </p>
              <p>
                <span className="uppercase"> scope:</span> Create APIs for a
                crowdfunding site using Django REST framework. This was a
                project assignment of the She Codes Plus program.
              </p>
              <a
                className="underline text-tan "
                href="https://github.com/ktechgau/crowdfunding_back_end"
                target="_blank"
              >
                View code
              </a>
            </div>
          </article>
        )}

        <div
          className="flex items-center justify-between border-b border-gray-500 cursor-pointernpy-2 px-4"
          onClick={handleCssToggle}
        >
          <span className="text-lg">CSS Animations</span>
          <span className="text-2xl text-white outline-4 outline-green-950 neon-img">
            {cssToggle ? "▲" : "▼"}
          </span>
        </div>
        {cssToggle && (
          <article className="work">
            <div className="work-img">
              <a href="https://codepen.io/ktechgau/pen/GRYyNre" target="_blank">
                <img
                  src={penguin}
                  alt="screenshot of an animated penguin I made using css. Link leads to codepen"
                />
              </a>
            </div>
            <div className="mt-4">
              <p>
                {" "}
                <span className="uppercase"> stack:</span> CSS
              </p>
              <p>
                <span className="uppercase"> scope:</span> Learn CSS animations
                through this tutorial via FCC
              </p>
              <a
                className="underline text-tan "
                href="https://codepen.io/ktechgau/pen/GRYyNre"
                target="_blank"
              >
                View on Codepen
              </a>
            </div>
          </article>
        )}

        <div
          className="flex items-center justify-between border-b border-gray-500 cursor-pointernpy-2 px-4"
          onClick={handleSkyToggle}
        >
          <span className="text-lg">CSS Media Queries</span>
          <span className="text-2xl text-white outline-4 outline-green-950 neon-img">
            {skyToggle ? "▲" : "▼"}
          </span>
        </div>
        {skyToggle && (
          <article className="work">
            <div className="work-img">
              <a href="https://codepen.io/ktechgau/pen/poxpNeb" target="_blank">
                <img
                  src={city}
                  alt="logo of my CSS Skyline project that leads to the live site"
                />
              </a>
            </div>
            <div className="mt-4">
              <p>
                {" "}
                <span className="uppercase"> stack:</span> CSS
              </p>
              <p>
                <span className="uppercase"> scope:</span> Learning media query,
                z-index and creatings shapes via FCC
              </p>
              <a
                className="underline text-tan "
                href="https://codepen.io/ktechgau/pen/poxpNeb"
                target="_blank"
              >
                View on Codepen
              </a>
            </div>
          </article>
        )}

        <div
          className="flex items-center justify-between border-b border-gray-500 cursor-pointernpy-2 px-4"
          onClick={handleDjangoToggle}
        >
          <span className="text-lg">She Codes News</span>
          <span className="text-2xl text-white outline-4 outline-green-950 neon-img">
            {djangoToggle ? "▲" : "▼"}
          </span>
        </div>
        {djangoToggle && (
          <article className="work">
            <div className="work-img">
              <a
                href="https://www.youtube.com/watch?v=RX3jeoCbZSg"
                target="_blank"
              >
                <img
                  src={puredjango}
                  alt="a screenshot of my django news site that links to a youtube video run through of the site"
                />
              </a>
            </div>
            <div className="mt-4">
              <p>
                {" "}
                <span className="uppercase"> stack:</span> Django, Python
              </p>
              <p>
                <span className="uppercase"> scope:</span> Using Django
                framework, I was to create a news room site for She Codes
                Australia. This project was not deployed. This was a project
                assignment of the She Codes Plus program.
              </p>
              <p>
                <a
                  className="underline text-tan "
                  href="https://www.youtube.com/watch?v=RX3jeoCbZSg"
                  target="_blank"
                >
                  View Video
                </a>
              </p>
              <p>
                <a
                  className="underline text-tan "
                  href="https://github.com/ktechgau/she_codes_news"
                  target="_blank"
                >
                  View code
                </a>
              </p>
            </div>
          </article>
        )}

        <div
          className="flex items-center justify-between border-b border-gray-500 cursor-pointernpy-2 px-4"
          onClick={handlePyToggle}
        >
          <span className="text-lg">Data Manipulation</span>
          <span className="text-2xl text-white outline-4 outline-green-950 neon-img">
            {pyToggle ? "▲" : "▼"}
          </span>
        </div>
        {pyToggle && (
          <article className="work">
            <div className="work-img">
              <a
                href="https://www.youtube.com/watch?v=RX3jeoCbZSg"
                target="_blank"
              >
                <img
                  src={py}
                  alt="a screenshot of my django news site that links to a youtube video run through of the site"
                />
              </a>
            </div>
            <div className="mt-4">
              <p>
                {" "}
                <span className="uppercase"> stack:</span> Python
              </p>
              <p>
                <span className="uppercase"> scope:</span> Practising some
                fundamental concepts of Python by manipulating data for a
                Weather App. This project was not deployed. This was a project
                assignment of the She Codes Plus program.
              </p>
              <a
                className="underline text-tan "
                href="https://github.com/ktechgau/Weather_Project"
                target="_blank"
              >
                View code
              </a>
            </div>
          </article>
        )}
      </section>

      <Outlet />
      <Footer />
    </>
  );
}
export default HomePage;
