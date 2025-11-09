import { useEffect, useState } from "react";
import React from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicedata = [
    { id: 1, name: "Web Development" },
    { id: 2, name: "Web Design" },
    { id: 3, name: "Website Design" },
    { id: 4, name: "SEO Services" },
    { id: 5, name: "Digital Marketing" },
  ];

  // 👇 Detect scroll and update state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (path) => {
    window.location.href = path;
  };

  const isActive = (path) => window.location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-500 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="w-full mx-auto px-2 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl space-x-2.5 flex font-bold text-gray-800">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMqKoPHyaQi5Pqk2R2ezGvONL3lYygFmzZQ&s"
            alt="Logo"
            className="h-10 w-auto"
          />
          <p className="text-white font-bold text-2xl">Superior Groups</p>
        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden text-lg md:flex space-x-8 font-semibold">
          <a
            onClick={() => navigate("/")}
            className={`cursor-pointer font-poppins font-semibold hover:text-white-500 ${
              isActive("/") ? "text-white-500 " : "text-white"
            }`}
          >
            Home
          </a>

          <div
            className={`relative inline-block group ${
              isActive("/service") ? "text-white-500" : "text-white"
            }`}
          >
            {/* Service Button */}
            <button className="flex items-center gap-1 hover:text-white-500 font-semibold">
              Service
              <FaChevronDown
                className={`transform transition-transform duration-300 group-hover:rotate-180`}
              />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute z-20 left-0 hidden w-72 bg-white/40 shadow-lg rounded-md border border-zinc-200 group-hover:block text-black">
              {servicedata.map((service, index) => (
                <a
                  onClick={() =>
                    navigate(
                      `/service/${service.name.toLowerCase().replace(/\s+/g, "-")}/${service.id}`,
                    )
                  }
                  key={index}
                  href={`#${service.slug || "web"}`} // optional: dynamic slug
                  className="block border-b border-zinc-400 px-4 py-2 hover:bg-gray-100"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <a
            onClick={() => navigate("/about")}
            className={`cursor-pointer font-semibold hover:text-white-500 ${
              isActive("/about") ? "text-white-500 " : "text-white"
            }`}
          >
            About
          </a>
          <a
            href="#blog"
            className={`cursor-pointer font-semibold hover:text-white-500 ${
              isActive("/blog") ? "text-white-500 " : "text-white"
            }`}
          >
            Blog
          </a>
        </nav>

        {/* Right: Contact Button */}
        <div className="hidden md:block space-x-3">
          <button className="text-lg w-20 px-2 py-1 border-white text-white font-semibold border-2 rounded-lg">
            Login
          </button>
          <button className="text-lg w-20 px-2 py-1 border-white-400 bg-white-400 text-white font-semibold border rounded-lg">
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md shadow-lg text-white">
          <nav className="flex flex-col items-center space-y-4 py-4 font-medium">
            <a
              href="#home"
              className="hover:text-white-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-white-500"
              onClick={() => setIsOpen(false)}
            >
              Service
            </a>
            <a
              href="#about"
              className="hover:text-white-500"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#blog"
              className="hover:text-white-500"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <a
              href="tel:9999999"
              className="bg-white-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-white-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us: 9999999
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
