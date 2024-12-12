import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="w-full px-8 py-4 bg-gray-100 border-t mt-auto">
      <div className="max-w-6xl mx-auto text-center text-gray-600">
        <div className="text-lg mb-4">
          <p>Contact Me:</p>
          <p className="text-sm text-gray-700">Email: <a className="text-blue-600 hover:underline">shubhamvarma8257@gmail.com</a></p>
          <p className="text-sm text-gray-700">Phone: <a className="text-blue-600 hover:underline">+91 720 108 8257</a></p> {/* Replace with your actual phone number */}
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.instagram.com/_shubh_varma_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://www.facebook.com/shubh.varma.581" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://github.com/shubh240/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
        </div>

        <div className="text-sm text-gray-600">
          <p>© {currentYear} Shubham Varma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
