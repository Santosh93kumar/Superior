import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCode, FaPaintBrush, FaSearch, FaBullhorn, FaPenNib } from "react-icons/fa";
import TestimonialSection from "./home/Testimonail";
import HexagonBackground from './Source/HexaBackground'
import data from './data.js'
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
function Home() {
  const images = [
    "https://media.istockphoto.com/id/1312447731/photo/business-woman-at-office-stock-photo.jpg?s=1024x1024&w=is&k=20&c=D0B6UJetXL7j1Gge8JclH1rckVPjW3_iBY0gTMSMGnE=",
    "https://cdn.pixabay.com/photo/2024/06/21/12/45/lake-8844310_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
  ];

function Carousel() {
  const [current, setCurrent] = useState(0);

  // Sample images (replace with your own)
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  ];

  // Auto-slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="w-full h-[100vh] object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* 🖤 Blackish Overlay with blur */}
    

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-20"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 z-20"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-gray-400"
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">Our Trusted Partners</h2>
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
    const services = [
      {
        title: "Web Development",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
        description: "  Building scalable and high-performance websites with modern technologies. Building scalable and high-performance websites with modern technologies",
        icon: <FaCode className="text-blue-600 text-4xl mb-4" />,
      },
      {
        img: "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
        title: "Web Design",
        description: "Crafting user-friendly and responsive designs for better engagement.",
        icon: <FaPaintBrush className="text-pink-500 text-4xl mb-4" />,
      },
      {
        title: "SEO",
        img: "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
        description: "Optimizing your website to rank higher in search engines and reach more people.",
        icon: <FaSearch className="text-green-600 text-4xl mb-4" />,
      },
      {
        title: "Digital Marketing",
        img: "https://dynamic.design.com/asset/logo/e8483a98-2141-43f4-a663-d2f5afcd3f3a/logo-search-grid-2x?logoTemplateVersion=1&v=638908470043100000",
        description: "Effective online marketing strategies to grow your business.",
        icon: <FaBullhorn className="text-yellow-500 text-4xl mb-4" />,
      },
      {
        title: "Graphic Design",
        img: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsbmTZu_uMrmJ0z--CrG-o1UIXytu1OCizQ&s',
        description: "Creative and impactful visuals for branding, ads, and promotions.",
        icon: <FaPenNib className="text-purple-600 text-4xl mb-4" />,
      },
    ];

    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
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
                    `/service/${service.name.toLowerCase().replace(/\s+/g, "-")}/${service.id}`
                  )
                }
                className="group cursor-pointer bg-white rounded-2xl shadow-md transition transform hover:scale-105 hover:shadow-xl flex flex-col"
              >
                {/* Image Wrapper with Glow */}
                <div className="relative h-56 w-full flex justify-center items-center mb-2 bg-blue-100 overflow-hidden rounded-t-2xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-56 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  {/* Glow Effect from Bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[linear-gradient(to_top,rgba(37,99,235,0.6),transparent)] opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-base line-clamp-4">{service.content}</p>
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

    )
  }

  function ProjectScroller() {
    const projects = [
      {
        title: "Project One",
        discription: "This project highlights the serene beauty of nature through a carefully crafted design, focusing on the calm and balance trees bring to our environment. It emphasizes simplicity, peacefulness, and natural inspiration, making it a perfect representation of creativity, sustainability, and harmony between modern design and the natural world.",
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      },
      {
        title: "Project Two",
        description: "An adventurous project exploring the wild landscapes.",
        img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/adventure-1867271_1280.jpg",
      },
      {
        title: "Project Three",
        description: "A road to success project reflecting endless possibilities.",
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      },
      {
        title: "Project Four",
        description: "Another calm and peaceful nature view.",
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      },
      {
        title: "Project One",
        discription: "This project highlights the serene beauty of nature through a carefully crafted design, focusing on the calm and balance trees bring to our environment. It emphasizes simplicity, peacefulness, and natural inspiration, making it a perfect representation of creativity, sustainability, and harmony between modern design and the natural world.",
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      },
      {
        title: "Project Two",
        description: "An adventurous project exploring the wild landscapes.",
        img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/adventure-1867271_1280.jpg",
      },
      {
        title: "Project Three",
        description: "A road to success project reflecting endless possibilities.",
        img: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
      },
      {
        title: "Project Four",
        description: "Another calm and peaceful nature view.",
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      },
    ];

    const [paused, setPaused] = useState(false);
    const [selected, setSelected] = useState(projects[0]);

    return (
      <div className="flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-center  text-gray-800">Our Projects</h2>
        <p className="text-gray-600 mt-2 text-center mb-6">
          We offer a wide range of digital solutions to grow your business
        </p>

        <div className="flex w-full gap-6 px-6">
          {/* LEFT SCROLLER */}
          <div className="relative w-3/12 h-[500px] border-4 p-6 border-zinc-100 rounded-lg overflow-hidden">
            <div
              className={`animate-scroll space-y-4 pr-2 ${paused ? "animate-scroll-paused" : ""
                }`}
            >
              {projects.map((project, i) => (
                <div
                  key={i}
                  className={`mb-8 p-4 rounded-xl cursor-pointer transition shadow-md hover:shadow-lg ${selected.title === project.title
                      ? "border-2 border-blue-500"
                      : "bg-white"
                    }`}
                  onMouseEnter={() => {
                    setPaused(true);
                    setSelected(project);
                  }}
                  onMouseLeave={() => setPaused(false)}
                  onClick={() => setSelected(project)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-28 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PREVIEW */}
          <div className="w-9/12 h-[500px] flex justify-center items-center bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex w-full h-full">
              {/* LEFT (Image) */}
              <div className="w-6/12 flex items-center justify-center ">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="w-full h-full p-5 object-cover"
                />
              </div>

              {/* RIGHT (Details) */}
              <div className="w-6/12 p-5 flex flex-col ">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {selected.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </div>
          </div>

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
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
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


    )
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
        "The hands-on capstone projects were extremely helpful in building my skills. A special thanks to Rakesh Sir for making each concept easy to understand and apply throughout."
    },
    {
      name: "Krishna Tiwari",
      role: "Student",
      image: "https://i.pravatar.cc/150?img=4",
      message:
        "I have been searching for the content that levels up me and spent amount of time and money, but Rakesh sir where you have been that time. Absolutely game winner course."
    },
    {
      name: "Sujey Kumar Haldar",
      role: "Frontend Engineer",
      handle: "sujoykumarhaldar",
      image: "https://i.pravatar.cc/150?img=5",
      message:
        "I found both the Advanced MERN and Backend Foundation courses to be exceptionally well-structured and beginner-friendly.",
      highlight:
        "Highly recommended for anyone serious about leveling up their skills in fullstack development."
    }
  ];




  return (
    <>


        <Carousel />
 
    
      <TrustedPartner />
      <ServicesSection />
      <ProjectScroller />
      <TestimonialSection testimonial={testimonialData}/>
      <Contactus />
    </>



  )
}

export default Home