import Link from "next/link";

export default function Services() {
    return (
      <section className="min-h-screen bg-cover bg-center relative py-16 px-8 sm:px-20"
        style={{ backgroundImage: 'url(/images/background.jpg)' }} // Ensure this matches your background image path
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for text visibility */}
  
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Services</h2>
          <p className="text-xl sm:text-2xl leading-relaxed mb-12">
            I provide a variety of web development and full-stack solutions, helping businesses and individuals create impactful and scalable applications.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service 1: Web Development */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Web Development</h3>
              <p className="text-lg text-gray-300 mb-4">
                I offer custom web development services using modern frameworks like React.js, Next.js, and more. Whether it's a simple landing page or a full-fledged web app, I ensure seamless user experiences and responsive design.
              </p>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Custom Websites</li>
                <li>Single Page Applications</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
  
            {/* Service 2: Full-Stack Development */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Full-Stack Development</h3>
              <p className="text-lg text-gray-300 mb-4">
                With expertise in both frontend and backend technologies, I provide end-to-end development solutions. I work with Node.js, React.js, MongoDB, PostgreSQL, and more to create robust, scalable applications.
              </p>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Backend Development (Node.js, Express.js)</li>
                <li>Database Design (MongoDB, PostgreSQL)</li>
                <li>Frontend Development (React.js, Next.js)</li>
              </ul>
            </div>
  
            {/* Service 3: Database Design & Optimization */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Database Design & Optimization</h3>
              <p className="text-lg text-gray-300 mb-4">
                I specialize in designing and optimizing databases, ensuring high performance, scalability, and data integrity. Whether it's MongoDB or PostgreSQL, I can create databases tailored to your application's needs.
              </p>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Database Architecture</li>
                <li>Database Optimization</li>
                <li>Data Migration & Backup</li>
              </ul>
            </div>
          </div>
  
          {/* Call to Action */}
          <div className="mt-12">
            <p className="text-lg text-gray-300 mb-4">Interested in working with me? Feel free to get in touch, and let's discuss how I can help you build your next project!</p>
            <Link href="/contact">
              <p className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                Contact Me
              </p>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  