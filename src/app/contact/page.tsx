"use client"; // Ensure this page runs client-side

import axios from "axios";
import { useForm } from "react-hook-form";

import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Make sure you have react-icons installed

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler for the form
  // const onSubmit = async (data: any) => {
  //   console.log(data);
  //   const response = await axios.post('/api/users', data);
  //   console.log(response, "response");
  // };

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

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="grid gap-6">
            <div>
              <label htmlFor="fullName" className="block text-lg text-gray-200 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full p-4 rounded-lg bg-gray-700 text-white"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-2">
                  {typeof errors.fullName.message === "string" ? errors.fullName.message : "This field is required"}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full p-4 rounded-lg bg-gray-700 text-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {typeof errors.email.message === "string" ? errors.email.message : "Invalid email address"}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mobile" className="block text-lg text-gray-200 mb-2">
                Mobile Number
              </label>
              <input
                type="text"
                id="mobile"
                {...register("mobile", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit mobile number",
                  },
                })}
                className="w-full p-4 rounded-lg bg-gray-700 text-white"
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-2">
                  {typeof errors.mobile.message === "string" ? errors.mobile.message : "Enter a valid mobile number"}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-lg text-gray-200 mb-2">
                Message
              </label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="w-full p-4 rounded-lg bg-gray-700 text-white"
                rows={6}  // Corrected to number
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-2">
                  {typeof errors.message.message === "string" ? errors.message.message : "Message is required"}
                </p>
              )}
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </div>
        </form> */}
      </div>
    </section>
  );
}
