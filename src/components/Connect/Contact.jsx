import { useState } from 'react';
import "../../index.css";
import Footer from '../Footer/Footer';

function ContactForm() {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        message: '' 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xjvnonol', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission
        console.log('Form submitted successfully!');
        setSubmitSuccess(true);
        setFormData({
              name: '', 
              email: '', 
              message: '' 
        });
      } else {
        // Handle errors
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <section className=" m-3">
        <form className="bg-gradient-to-b from-black via-stone-300 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-5 mt-5">
                <label className="block font-serif text-white uppercase text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>
            <div className="mb-5">
            <label className="block font-serif text-white uppercase text-sm font-bold mb-2" htmlFor="name">
                    Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
            />
            </div>
            <div className="mb-5">
            <label className="block font-serif text-white uppercase text-sm font-bold mb-2" htmlFor="name">
                    Message
            </label>
                <textarea  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id="message"
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                />
            </div>
            <div className="flex items-center justify-center">
                <button className="neon-img text-lg text-white uppercase py-2 px-4 mt-6 mb-5 rounded focus:outline-none focus:shadow-outline" 
                    type="submit">Submit
                </button>
            </div>
            {submitSuccess && (
        <p className=" flex text-green-500 text-lg mt-8 items-center justify-center"> 
            Thanks for reaching out!
        </p>)}
        </form>
    </section>

</>
  );
}

export default ContactForm;
