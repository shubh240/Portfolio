export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-cover bg-center relative py-16 px-8 sm:px-20"
      style={{ backgroundImage: 'url(/images/background.jpg)' }} // Ensure this path matches your image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for text visibility */}

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8 ">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Project 1 */}
          <div className="border rounded-lg p-6 hover:shadow-lg bg-white bg-opacity-80">
            <h3 className="text-xl font-bold mb-4 text-black">CRUDMaster</h3>
            <p className="text-gray-700 mb-4">CRUDMaster is a full-stack web application designed to perform CRUD operations (Create, Read, Update, and Delete) on records efficiently. This project demonstrates my skills in building robust and scalable web applications with seamless data management capabilities.</p>
            <a
              href="https://github.com/shubh240/startup_sahay"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
  
          {/* Project 2 */}
          <div className="border rounded-lg p-6 hover:shadow-lg bg-white bg-opacity-80">
            <h3 className="text-xl font-bold mb-4 text-black">Auth-Next</h3>
            <p className="text-gray-700 mb-4">Authentication using Next.js involves implementing a secure way to verify users and control access to resources or pages. Next.js, as a React framework with built-in server-side rendering (SSR) and API routes, provides a robust environment for handling authentication efficiently.</p>
            <a
              href="https://github.com/shubh240/Auth-Next"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
