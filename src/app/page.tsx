import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16 px-8 sm:px-20 relative bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="text-center max-w-6xl mx-auto relative z-10 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Hi, I'm Shubham Varma
        </h1>
        <p className="text-xl mb-8">
          I'm a passionate developer specializing in building modern web applications.
          I love creating seamless and intuitive user experiences with technologies like React, Node.js, and MongoDB.
        </p>

        {/* Main Image */}
        <div className="mb-8">
          <Image
            src="/images/IMG_20221211_144018.jpg" // Replace with your portrait
            alt="Your portrait"
            width={200}
            height={200}
            className="rounded-full mx-auto"
          />
        </div>

        {/* Skills and Technologies */}
        <h2 className="text-2xl font-semibold mb-4">Technologies I Work With</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <Image
              src="/images/Reactlogo.png" // Replace with React logo
              alt="React logo"
              width={80}
              height={80}
            />
            <p className="mt-2 text-sm">ReactJs</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/node-js-icon-454x512-nztofx17.png" // Replace with Node.js logo
              alt="Node.js logo"
              width={80}
              height={80}
            />
            <p className="mt-2 text-sm">NodeJs</p>
          </div>
          <div className="text-center">
            <Image
              src="/images/mongo.png" // Replace with MongoDB logo
              alt="MongoDB logo"
              width={80}
              height={80}
            />
            <p className="mt-2 text-sm">MongoDB</p>
          </div>
          <div className="text-center mt-5">
            <Image
              src="/images/tailwindcss.jpg" // Replace with Tailwind CSS logo
              alt="Tailwind CSS logo"
              width={80}
              height={80}
            />
            <p className="mt-2 text-sm">Tailwind CSS</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            href="/projects"
            className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-all"
          >
            Check out my projects
          </Link>
        </div>
      </div>
    </section>
  );
}
