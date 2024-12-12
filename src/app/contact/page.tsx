"use client"; // Ensure this page runs client-side

import { useForm } from "react-hook-form";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Make sure you have react-icons installed

export default function Contact() {


  return (
    <section
      id="contact"
      className="min-h-screen bg-cover bg-center relative py-16 px-8 sm:px-20"
      style={{ backgroundImage: "url(/images/background.jpg)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg text-gray-200 mb-4">
          I would love to hear from you! You can either connect directly via WhatsApp or submit a message using the form below.
        </p>

        {/* Contact Options */}
        <div className="flex justify-center gap-8 mb-8">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/7201088257"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700"
          >
            <FaWhatsapp className="mr-2 text-2xl" /> Connect on WhatsApp
          </a>

          {/* Email Button */}
          <a
            href="mailto:shubhamvarma8257@gmail.com?subject=Subject%20Here&body=Message%20Here"
            className="flex items-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700"
          >
            <FaEnvelope className="mr-2 text-2xl" /> Send Email
          </a>
        </div>
      </div>
    </section>
  );
}
