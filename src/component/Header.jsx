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
      className={`fixed max-w-[1480px] mx-auto inset-x-0 top-0 flex justify-center z-10 transition-all duration-500 ${
    isScrolled
      ? "bg-black/20 backdrop-blur-md shadow-md"
      : "bg-transparent"
  }`}
    >
      <div className="w-full mx-auto px-2  flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl    flex font-bold text-gray-800">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-18  w-auto"
          />
          <div className="flex flex-col justify-center items-center my-auto  h-full">
  <p className="text-white font-bold -mt-2  text-xl">
    Superior Groups
    <span className="flex justify-start text-[9px] mt-0.5">
      WHERE INNOVATION MEET
    </span>
  </p>
</div>

        </div>

        {/* Center: Nav Links (Desktop) */}
        <nav className="hidden text-lg md:flex space-x-8 ">
          <a
            onClick={() => navigate("/")}
            className={`cursor-pointer font-poppins hover:text-white ${
              isActive("/") ? "text-white font-semibold " : "text-white"
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
            <button className="flex items-center gap-1 hover:text-white-500 ">
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
            className={`cursor-pointer  hover:text-white-500 ${
              isActive("/about") ? "text-white-500 font-semibold " : "text-white"
            }`}
          >
            About
          </a>
          <a
            href="#blog"
            className={`cursor-pointer hover:text-white-500 ${
              isActive("/blog") ? "text-white-500 font-semibold " : "text-white"
            }`}
          >
            Blog
          </a>
        </nav>

        {/* Right: Contact Button */}
        <div className="hidden font-semibold md:block space-x-2">
          <button className="text-lg w-20 px-2 py-1 border-white text-white  border rounded-lg">
            Login
          </button>
         <button className="text-lg w-24 px-2 py-1 bg-white   border-none rounded-lg">
            Sign Up
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
