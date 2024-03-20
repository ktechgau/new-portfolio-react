import { useState } from "react";
import "../../index.css";
import wave from "../../assets/Contact/wave.png";
import download from "../../assets/Work/download.png";
import linkedin from "../../assets/NavBar/linkedin.png";

function ContactForm() {
  const resumeLink = "resume.pdf";
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xjvnonol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission
        console.log("Form submitted successfully!");
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Handle errors
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <section className=" m-3 lg:flex lg:flex-row lg:items-left lg:pl-0 lg:m-0 lg:h-ful xl:h-full">
        <form
          className="bg-gradient-to-b from-black via-stone-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:bg-gradient-to-r lg:from-black lg:via-stone-300  lg:w-3/4 lg:h-auto lg:flex lg:flex-col lg:justify-center"
          onSubmit={handleSubmit}
        >
          <div className="lg:p-20">
            <div className="mb-5 mt-5">
              <label
                className="block font-serif text-white uppercase text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                className="block font-serif text-white uppercase text-sm font-bold mb-2"
                htmlFor="name"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                className="block font-serif text-white uppercase text-sm font-bold mb-2"
                htmlFor="name"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                style={{ border: "3px solid white" }}
                className="neon-img text-lg text-white uppercase  px-5 mt-6  rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
          {submitSuccess && (
            <p className=" flex text-white bg-tan text-lg mt-8 items-center justify-center p-3 rounded-md lg:relative lg:mt-0 lg:p-1 ">
              Thanks for reaching out!
            </p>
          )}
        </form>

        <section className="relative flex justify-center items-center h-1/8 lg:inline hidden sm:inline md:hidden">
          <div className="flex justify-center items-center p-5 ">
            <img
              className="animate-pulse h-auto w-1/5  neon-yellow lg:inline lg:w-1/4 lg:mt-16 lg:mb-16"
              src={wave}
            />
          </div>
          <ul>
            <li>
              {/*insert downloadable resume*/}
              <p>
                <a
                  className="flex items-center space-x-8 mt-3 lg:justify-center lg-items-center "
                  href={resumeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-6 h-6 neon-green outline-yellow-950 lg:mb-5 lg:w-8 lg:h-8"
                    src={download}
                    alt="A download icon that allows users to download my resume upon click"
                  />
                  <span className="link llg:text-1xl g:mb-5">
                    Download my Resume
                  </span>
                </a>
              </p>
            </li>
            <li>
              <p>
                <a
                  className="flex items-center space-x-5 mt-5 lg:justify-center lg-items-center"
                  href="https://www.linkedin.com/in/karla-gaudet-b95b2b261/"
                  target="_blank"
                >
                  <img
                    className="w-9 h-9 neon-green outline-yellow-950 lg:w-8 lg:h-8"
                    src={linkedin}
                    alt="Linkedin Icon that takes you to my LinkedIn profile"
                  />
                  <span className="link lg:text-1xl">Connect in LinkedIn</span>
                </a>
              </p>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
}

export default ContactForm;
