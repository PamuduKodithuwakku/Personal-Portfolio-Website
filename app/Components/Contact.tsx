'use client';

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact:React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_bc9g937', 
        'template_8987dws', 
        form.current!,
        'OGrzTRiRAhztyQja2'
      ).then(
        () => {
          alert('Email sent successfully!');
        }, 
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send email.');
        }
      );
    }
  };

  return (
    <div id='contact' className="w-full bg-gray-800 py-10 px-6 md:px-12 lg:px-24">
      <h2 className="heading mb-6">
        Contact <span className='text-yellow-400'>Me</span>
      </h2>
      <div data-aos='fade-up' className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-[45%] text-white">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-4">Feel free to reach out via the form or use the contact details below.</p>
          <p className="mb-2">
            <span className="font-medium">Email: </span>
            <a href="mailto:pamudupankaja2002@gmail.com" className="text-yellow-400 hover:underline">
              pamudupankaja2002@gmail.com
            </a>
          </p>
          <p className="mb-2">
            <span className="font-medium">Phone: </span>
            +94 704 610 684
          </p>
          <p className="mb-2">
            <span className="font-medium">Location: </span>
            Kopiwaththagoda, Hawpe, Imaduwa, Galle
          </p>
          
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/Manuli.Hansana" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f text-yellow-400 hover:text-yellow-500 text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/pamudu_u" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-yellow-400 hover:text-yellow-500 text-2xl"></i>
            </a>
            <a href="https://github.com/PamuduKodithuwakku" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-yellow-400 hover:text-yellow-500 text-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/pamudu-kodithuwakku" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in text-yellow-400 hover:text-yellow-500 text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-[50%] bg-gray-700 p-6 rounded-md shadow-lg">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                className="w-full px-3 py-2 h-32 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-md shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;