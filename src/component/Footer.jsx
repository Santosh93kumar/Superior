import React from "react";

function Footer() {
  return (
    <footer className="max-w-[1480px] mx-auto bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <div className="flex space-x-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMqKoPHyaQi5Pqk2R2ezGvONL3lYygFmzZQ&s"
              className="h-16"
              alt="Logo"
            />
            <p className="text-lg items-center flex ">Superior Groups</p>
          </div>
          <p className="text-gray-400">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex flex-col">
          <h3 className="font-bold mb-4">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get the latest updates and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg  border border-blue-600 focus:outline-none "
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
