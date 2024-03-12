import city from "../../assets/Work/city.jpg";
import opendoor from "../../assets/Work/opendoor.png";
import penguin from "../../assets/Work/penguin.jpg";
import ReactJs from "../../assets/Work/ReactJs.png";
import puredjango from "../../assets/Work/puredjango.jpg";

function PortfolioPage(){
    

    return(
        <>
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
                <p> Using Django REST</p>
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

        <article>
            <a href="https://codepen.io/ktechgau/pen/poxpNeb" target="_blank">
                <img src={city} alt="screenshot of a city skyline I created with css."/>
            </a>
                <p> CSS Skyline</p>
                <p>Playing with media query, z-index and shapes </p>            
        </article>

        <article>
            <a href="https://www.youtube.com/watch?v=RX3jeoCbZSg" target="_blank">
                <img src={puredjango} alt="screenshot of my a page of my django project"/>
            </a>
                <p> Using Django Framework</p>
                <p>Used Django framework to create a news/blog site </p>  
                <a href="https://github.com/ktechgau/she_codes_news/tree/main" target="_blank">View on Git</a>           
        </article>

    </section>


        </>
    )
}
export default PortfolioPage;