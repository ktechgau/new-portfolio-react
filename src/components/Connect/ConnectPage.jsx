import { Outlet } from "react-router-dom";
import linkedin from "../../assets/NavBar/linkedin.png";
import wave from "../../assets/Contact/wave.png";
import download from "../../assets/Work/download.png";
import ContactForm from "../../components/Connect/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "../../index.css";

function ConnectPage(){
    const resumeLink= "resume.pdf";

return(
    <>
     <section className="relative flex justify-center items-center">
    <div className="p-6  mt-20 text-center">
            <h1 className="neon text-4xl m-4">Let's Connect</h1>
            <p className="text-lg uppercase"> Send me a Message</p>
    </div>
    </section>

    <section className="h-full">
        <div className="mb-12 lg:pr-5 lg:pb-10">
        <ContactForm/>
        </div>
   
    
    <section className="relative flex justify-center items-center h-1/8 lg:hidden">
        <ul>
            <li>{/*insert downloadable resume*/}
                <p>
                    <a className="flex items-center space-x-8 mt-3" href={resumeLink} target="_blank" rel="noreferrer">
                    <img className="w-6 h-6 neon-green outline-yellow-950" src={download} alt="A download icon that allows users to download my resume upon click"/>
                        <span className="link">Download my Resume</span>
                    </a>
                </p>
            </li>
            <li>
                <p>
                    <a className="flex items-center space-x-5 mt-5" href="https://www.linkedin.com/in/karla-gaudet-b95b2b261/" 
                        target="_blank">
                    <img className="w-9 h-9 neon-green outline-yellow-950" src={linkedin} alt="Linkedin Icon that takes you to my LinkedIn profile"/>
                        <span className="link">Connect in LinkedIn</span>
                    </a>
                </p>
            </li>
        </ul>
    </section>

    <section className="flex justify-center items-center p-5 lg:hidden">
        <img className="animate-pulse h-auto w-1/5  neon-yellow"src={wave}/>
    </section>

    </section>
    


 <Footer/>

    
    </>
);
}
export default ConnectPage;