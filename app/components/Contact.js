"use client";
import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import AOS from 'aos';

const Contact = () => {

  
  useEffect(() => {
    //initialize animate on scroll
    AOS.init();
}, []);
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-8">Contact Us</h2>
        <div data-aos="fade-down" className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="form-input block w-full sm:text-sm border-purple-300 focus:ring focus:ring-purple-500 focus:border-purple-500 rounded-md px-4 py-3"
              />
            </div>
            <div className="relative rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="form-input block w-full sm:text-sm border-purple-300 focus:ring focus:ring-purple-500 focus:border-purple-500 rounded-md px-4 py-3"
              />
            </div>
            <div className="relative rounded-md shadow-sm">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="form-textarea block w-full sm:text-sm border-purple-300 focus:ring focus:ring-purple-500 focus:border-purple-500 rounded-md px-4 py-3"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="cta-button2 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
