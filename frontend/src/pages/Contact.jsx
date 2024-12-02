import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nlqi9cp', // Replace with your EmailJS service ID
        'template_ii6bgj4', // Replace with your EmailJS template ID
        e.target,
        'eVcZyO55nBp_bNQqo' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setFormSubmitted(true);
          e.target.reset(); // Clear the form after successful submission
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you! Feel free to get in touch via the form below or reach out through email.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-wrap md:flex-nowrap gap-8">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Our Location</h3>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> 4000 Victoria Park Ave, North York, ON M2H 3S7
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Email:</strong> trafficpulse.simulation@gmail.com
            </p>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5758.262598421443!2d-79.3489344237058!3d43.81163587109508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d37201da4057%3A0x7d23466a116ce50a!2s4000%20Victoria%20Park%20Ave%2C%20North%20York%2C%20ON%20M2H%203S7!5e0!3m2!1sen!2sca!4v1733111332150!5m2!1sen!2sca"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '250px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Updated Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Get in Touch</h3>
            {formSubmitted ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded-lg">
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            ) : null}
            <form id="contact-form" onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" // Match EmailJS template variable
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email" // Match EmailJS template variable
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" // Match EmailJS template variable
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
