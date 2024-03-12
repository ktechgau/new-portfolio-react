function ConnectPage(){


return(
    <>
    <section className="contact">
        <h1>Let's Connect!</h1>
    </section>

    <section className="contact-body">
        <div className="contact-form">

        </div>

    <div className="other-details">
        <ul>
            <li>{/*insert downloadable resume*/}
                <p>View my Resume</p>
            </li>
            <li><a href="https://www.linkedin.com/in/karla-gaudet-b95b2b261/" 
                target="_blank">
                <img src={linkedin} alt="Linkedin Icon that takes you to my LinkedIn profile"/></a>
                <p>Connect in LinkedIn</p>
            </li>
            <li>{/*mailto: email*/}
                <p>Send me an Email</p>
            </li>
        </ul>
    </div>

    </section>

    </>
)
}
export default ConnectPage;