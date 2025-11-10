import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  FaCode,
  FaPaintBrush,
  FaSearch,
  FaBullhorn,
  FaPenNib,
} from "react-icons/fa";
import TestimonialSection from "./home/Testimonail";
import HexagonBackground from "./Source/HexaBackground";
import {data, project} from "./data.js";

console.log(project)
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import { div } from "framer-motion/client";

function Home() {
  function Carousel() {
    const images = [
      "https://res.cloudinary.com/dv54awv2k/image/upload/v1762718603/Gemini_Generated_Image_htzm97htzm97htzm_bym3jq.png",
      "https://res.cloudinary.com/dv54awv2k/image/upload/v1762718604/Gemini_Generated_Image_fpor9yfpor9yfpor_1_d2jys1.png"
      
    ];

    const REPEAT_COUNT = 100;
    const extendedImages = Array(REPEAT_COUNT).fill(images).flat(); // 💥 creates 3 x 100 = 300 slides

    const [current, setCurrent] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);

    // ⏳ Auto slide
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }, []);

    // 🔁 Handle infinite scroll
    useEffect(() => {
      if (current === extendedImages.length - 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrent(1);
        }, 700);
      }
      if (current === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrent(extendedImages.length - 2);
        }, 700);
      } else {
        setIsTransitioning(true);
      }
    }, [current]);

    const prevSlide = () => setCurrent((prev) => prev - 1);
    const nextSlide = () => setCurrent((prev) => prev + 1);

    return (
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Slides */}
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-[100vh] object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* ⬅️ Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-20"
        >
          <FaChevronLeft />
        </button>

        {/* ➡️ Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-20"
        >
          <FaChevronRight />
        </button>

        {/* ⭕ Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)} // offset by 1 because of clone
              className={`w-3 h-3 rounded-full ${
                current === i + 1 ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
  }

  function TrustedPartner() {
    const partners = [
      "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
      "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
      "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
      "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
      "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
    ];

    return (
      <section className="py-12">
        <div className="max-w-7xl flex flex-col justify-center mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 mt-2 text-center mb-6">
            We offer a wide range of digital solutions to grow your business
          </p>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {partners.map((logo, i) => (
              <div
                key={i}
                className="flex justify-center items-center rounded-xl shadow-sm hover:shadow-md transition"
              >
                <img
                  src={logo}
                  alt={`Partner ${i + 1}`}
                  className="h-20 w-auto bg-amber-200 object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function ServicesSection() {
    const navigate = useNavigate();
   

    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Our Services
            </h2>
            <p className="text-gray-600 mt-2">
              We offer a wide range of digital solutions to grow your business
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {data.map((service, i) => (
              <div
                key={i}
                onClick={() =>
                  navigate(
                    `/service/${service.name.toLowerCase().replace(/\s+/g, "-")}/${service.id}`,
                  )
                }
                className="group cursor-pointer bg-white rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-xl flex flex-col"
              >
                {/* Image Wrapper with Glow */}
                <div className="relative h-56 w-full flex justify-center items-center mb-2 bg-blue-100 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-56 w-full object-center transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  {/* Glow Effect from Bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(37,99,235,0.6),transparent)] opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-base line-clamp-4">
                    {service.content}
                  </p>
                  <div>
                    <button className="text-sm text-blue-600 cursor-pointer">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function ProjectScroller() {
    const projects = [
      {
        title: "Project One",
        discription:
          "This project highlights the serene beauty of nature through a carefully crafted design, focusing on the calm and balance trees bring to our environment. It emphasizes simplicity, peacefulness, and natural inspiration, making it a perfect representation of creativity, sustainability, and harmony between modern design and the natural world.",
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      },
      {
        title: "Project Two",
        description: "An adventurous project exploring the wild landscapes.",
        img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/adventure-1867271_1280.jpg",
      },
      {
        title: "Project Three",
        description:
          "A road to success project reflecting endless possibilities.",
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      },
      {
        title: "Project Four",
        description: "Another calm and peaceful nature view.",
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      },
    ];

    
    return (
      <div className="flex flex-col bg-#191970 rounded-2xl shadow-xl py-10 px-4">
  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 drop-shadow-lg">
    Our Projects
  </h2>
  <p className="text-gray-300 mt-2 text-gray-700 text-center mb-6">
    We offer a wide range of digital solutions to grow your business
  </p>
<div className="w-full flex flex-wrap -mx-3">
  {project.map((data, index) => (
    <div
      key={index}
      className="w-1/2 px-3 mb-6" // 2 cards per row
    >
      <div className="bg-white rounded-lg shadow-md p-4">
        <img
          src={data.img}
          className="w-full h-auto object-cover rounded-md mb-3"
          alt={data.title}
        />
        <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.content}</p>
      </div>
    </div>
  ))}
</div>



 
</div>

    );
  }

  function Contactus() {
    return (
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm  opacity-30"></div>

        {/* Overlay with form */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-end mr-4">
          <div className="bg-zinc-100 p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:outline-none"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const testimonialData = [
    {
      name: "Amit Kumar",
      role: "Final Year - CSE Student, Graduating in 2026",
      handle: "amitkumar",
      image: "https://i.pravatar.cc/150?img=3",
      message:
        "This is Amit Kumar, and I had an incredible learning experience in the Backend Development course by CodersGyan. The course covered everything from networking, databases, DevOps, Linux (AWS), web security & more.",
      highlight:
        "The hands-on capstone projects were extremely helpful in building my skills. A special thanks to Rakesh Sir for making each concept easy to understand and apply throughout.",
    },
    {
      name: "Krishna Tiwari",
      role: "Student",
      image: "https://i.pravatar.cc/150?img=4",
      message:
        "I have been searching for the content that levels up me and spent amount of time and money, but Rakesh sir where you have been that time. Absolutely game winner course.",
    },
    {
      name: "Sujey Kumar Haldar",
      role: "Frontend Engineer",
      handle: "sujoykumarhaldar",
      image: "https://i.pravatar.cc/150?img=5",
      message:
        "I found both the Advanced MERN and Backend Foundation courses to be exceptionally well-structured and beginner-friendly.",
      highlight:
        "Highly recommended for anyone serious about leveling up their skills in fullstack development.",
    },
  ];

  return (
    <>
      <Carousel />

      <TrustedPartner />
      <ServicesSection />
      <ProjectScroller />
      <TestimonialSection testimonial={testimonialData} />
      <Contactus />
    </>
  );
}

export default Home;
