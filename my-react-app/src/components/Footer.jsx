export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-gray-700 text-sm">
          &copy; {new Date().getFullYear()} MyLandingPage. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#privacy" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Privacy Policy
          </a>
          <a href="#terms" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Terms of Service
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
