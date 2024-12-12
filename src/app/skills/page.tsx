export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-cover bg-center relative py-16 px-8 sm:px-20"
      style={{ backgroundImage: 'url(/images/background.jpg)' }} // Background image
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for text visibility */}

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">Html</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">Css</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">Javascript</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">Bootstartp</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">Tailwind CSS</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">Git</div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">PostgreSQL</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">MongoDB</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">MySQL</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">ReactJS</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">NodeJS</div>
            <div className="bg-gray-100 px-6 py-3 rounded-full text-lg text-black font-semibold">NextJS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
