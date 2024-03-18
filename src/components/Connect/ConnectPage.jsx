import linkedin from "../../assets/NavBar/linkedin.png";
import download from "../../assets/Work/download.png";
import ContactForm from "../../components/Connect/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "../../index.css";

function ConnectPage(){
    const resumeLink= "resume.pdf";

return(
    <>
     <section className="relative flex justify-center items-center">
    <div className="p-6 mt-8 text-center">
            <h1 className="neon text-4xl m-4">Let's Connect</h1>
            <p className="text-lg uppercase"> Send me a Message</p>
    </div>
    </section>

    <section>
        <div className="mb-12">
        <ContactForm/>
        </div>

    <section className="relative flex justify-center items-center mb-10">
        <ul>
            <li>{/*insert downloadable resume*/}
                <p>
                    <a className="flex items-center space-x-3 mt-3" href={resumeLink} target="_blank" rel="noreferrer">
                    <img className="w-6 h-6 neon-yellow outline-yellow-950" src={download} alt="A download icon that allows users to download my resume upon click"/>
                        <span className="link">Download my Resume</span>
                    </a>
                </p>
            </li>
            <li>
                <p>
                    <a className="flex items-center space-x-3 mt-4" href="https://www.linkedin.com/in/karla-gaudet-b95b2b261/" 
                        target="_blank">
                    <img className="w-7 h-7 neon-yellow outline-yellow-950" src={linkedin} alt="Linkedin Icon that takes you to my LinkedIn profile"/>
                        <span className="link">Connect in LinkedIn</span>
                    </a>
                </p>
            </li>
        </ul>
    </section>

    </section>

    <Footer/>
    
    </>
);
}
export default ConnectPage;