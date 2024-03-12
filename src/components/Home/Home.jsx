import {Link,Outlet} from "react-router-dom";
import portfoliopic3 from "../../assets/Hero/portfoliopic3.png";
import React, {useRef, useState, useEffect} from 'react';
import ReactJs from "../../assets/Work/ReactJs.png";
import icons from "../../assets/Hero/icons.png"
import opendoor from "../../assets/Work/opendoor.png";
import penguin from "../../assets/Work/penguin.jpg";
import arrow from "../../assets/Hero/arrow.png";
import Footer from "../Footer/Footer.jsx";
import AboutSection from "../ShowMoreText/AboutSection.jsx";

function HomePage(){
    const aboutRef=useRef(null);
    const [showMore, setShowMore] = useState(false);
    const [aboutHeight, setAboutHeight] = useState('auto');

    const handleScroll = (ref) =>{
        window.scrollTo({
            top:ref.offsetTop,
            left:0,
            behavior:"smooth",
        })
    }

    const handleToggleShowMore = () => {
        setShowMore(!showMore);
    };
    useEffect(() => {
        if (aboutRef.current) {
            setAboutHeight(aboutRef.current.offsetHeight);
        }
    }, [showMore]);

return(
    <>
    <section className="relative flex flex-row flex-wrap h-screen">
    <div className="p-6 mt-8">
            <p className="text-xl">Hi! My name is</p>
            <h1 className="neon text-4xl m-4">Karla Gaudet</h1>
            <p className="text-lg"> An Aspiring Software Developer</p>
    </div>
        <div className="flex items-center p-3 h-full">
            <div className="relative h-full  w-3/4" >
                <img className=" z-0  bg-gradient-to-b from-black via-stone-300 object-contain"src={icons} alt="picture of a person's hands typing on a laptop"/>            
                <img className="absolute top-[27vh] right-[-20vw] w-3/4 h-auto rounded-md" src={portfoliopic3} alt="Professional picture of Karla Gaudet arms crossed, smiling"/>
                <Link to="/#about" onClick={() => 
                    {handleScroll(aboutRef.current);}}>
                    <img className="neon-img m-8 animate-bounce" src={arrow}/>
                </Link>
            </div>      
        </div>  
    </section>

    <section className="relative flex flex-row flex-wrap h-screen" id="about" ref={aboutRef} >
       <AboutSection handleShowMore={handleToggleShowMore} showMore={showMore}/> 
    </section>
    
    <section className="portfolio">
        <div>Projects</div>
    </section>

    <section className="work">
        <article>
            <a href="https://opendoor.netlify.app/" target="_blank">
                <img src={ReactJs} alt="screenshot image of my React JS project that leads to the live site"/>
            </a>
            <p> React JS</p>
            <p>Frontend Development using React JS sourcing APIs I created using Django REST</p>     
            <a href="https://github.com/ktechgau/crowdfunding_front_end" target="_blank">View on Git</a>    
        </article>

        <article>
            <a href="https://drf-patient-pond-1056.fly.dev/projects/" target="_blank">
                <img src={opendoor} alt="logo of my Django REST project that leads to the live site"/>
            </a>
                <p> Django REST</p>
                <p>Backend Development creating APIs for a crowdfunding site</p>   
                <a href="https://github.com/ktechgau/crowdfunding_back_end" target="_blank">View on Git</a>           
        </article>

        <article>
            <a href="https://codepen.io/ktechgau/pen/GRYyNre" target="_blank">
                <img src={penguin} alt="screenshot of an animated penguin I made using css. Link leads to codepen"/>
            </a>
                <p> CSS Animations</p>
                <p>Learning CSS animations with FreeCodeCamp</p>            
        </article>

        <div className="button">
            <Link to="/portfolio">View More</Link>
        </div>

    </section>
    
    <Footer/>
    

    <Outlet/>
   
    </>
)
};
export default HomePage;
