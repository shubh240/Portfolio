"use client"; // Enable client-side rendering

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="w-full px-4 py-4 bg-gray-100 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-10 h-10">
            <Image
              src="/images/IMG_20221211_144018.jpg" // Replace with the path to your image
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          {/* Name */}
          <h1 className="text-xl font-bold">
            Shubham Varma / Software Engineer
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-4">
          <Link
            href="/"
            className="hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105"
          >
            Projects
          </Link>
          <Link
            href="/services"
            className="hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105"
          >
            Services
          </Link>
          <Link
            href="/skills"
            className="hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-500 transition duration-300 ease-in-out hover:scale-105"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block text-gray-600 focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isSidebarOpen
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="w-64 h-full bg-white shadow-lg flex flex-col py-6 px-4">
            {/* Logo and Name in Sidebar */}
            <div className="flex items-center gap-4 mb-8">
              {/* Logo */}
              <div className="w-10 h-10">
                <Image
                  src="/images/IMG_20221211_144018.jpg" // Replace with the path to your image
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              {/* Name */}
              <h1 className="text-lg font-bold">Shubham Varma</h1>
            </div>

            {/* Close Button */}
            <button
              className="self-end mb-6 text-gray-600 focus:outline-none"
              onClick={() => setIsSidebarOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
                onClick={() => setIsSidebarOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
                onClick={() => setIsSidebarOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
                onClick={() => setIsSidebarOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
                onClick={() => setIsSidebarOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/skills"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
                onClick={() => setIsSidebarOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-500 transition duration-300 ease-in-out"
                onClick={() => setIsSidebarOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
