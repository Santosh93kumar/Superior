import React, { useEffect, useRef, useState } from "react";
import { data } from "./data";
import { useParams } from "react-router-dom";

function Servicedetail() {
  const [activeSection, setActiveSection] = useState("about");
  const { id } = useParams();

  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const feedbackRef = useRef(null);

  const filter = data.filter((item) => item.id == id);
  const content = filter[0];

  // ✅ Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // ✅ Observe sections
  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "service", ref: serviceRef },
      { id: "feedback", ref: feedbackRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  if (!content) {
    return (
      <div className="p-10 text-center text-red-500 font-semibold">
        Service not found 🚫
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        {/* 🏞 Hero Section */}
        <div className="relative w-full h-[100vh] overflow-hidden">
          <img
            className="w-full h-full object-cover absolute top-0 left-0"
            src={content.heading.image}
            alt="hero"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-10 bg-black/40">
            <div className="text-white z-20 max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                {content.heading.subtitle}
              </h2>
              <h1 className="text-5xl font-extrabold mb-6">
                {content.heading.title}
              </h1>
              <button className="px-6 py-3 border text-white rounded-lg hover:text-blue-500 hover:border-blue-500 transition hover:font-semibold">
                {content.heading.button}
              </button>
            </div>
          </div>
        </div>

        {/* 🧭 Sticky Navigation */}
        <div className="sticky top-0 z-30 bg-white">
          <header className="flex w-full bg-orange-500 justify-center gap-20 px-20 text-white font-semibold text-xl py-4">
            {["about", "service", "feedback"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`m-2 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:transition-transform after:scale-x-0 hover:after:scale-x-100 ${
                  activeSection === section ? "after:scale-x-100" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </header>
        </div>

        {/* 🟡 Sections */}
        <div className="pt-20">
          {/* About Section */}
          <div
            id="about"
            ref={aboutRef}
            className={`flex flex-col md:flex-row w-full p-10 gap-10 min-h-[80vh] ${
              activeSection === "about" ? "pt-28" : ""
            }`}
          >
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-5">{content.about.title}</h1>
              <p className="text-lg text-gray-600">{content.about.content}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={content.about.image}
                alt="About"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Service Section */}
          <div
            id="service"
            ref={serviceRef}
            className={`flex flex-col md:flex-row w-full p-10 gap-10 bg-gray-100 min-h-[80vh] ${
              activeSection === "service" ? "pt-36" : ""
            }`}
          >
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-5">
                {content.service.title}
              </h1>
              <p className="text-lg text-gray-600">{content.service.content}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={content.service.image}
                alt="Service"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Feedback Section */}
          <div
            id="feedback"
            ref={feedbackRef}
            className={`w-full p-10 gap-10 min-h-[80vh] ${
              activeSection === "feedback" ? "pt-36" : ""
            }`}
          >
            <h1 className="text-3xl font-bold mb-10 text-center">
              Our Feedback
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {content.feedback.map((item) => (
                <div
                  key={item.id}
                  className="relative h-96 rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/40 p-4 text-white">
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-sm line-clamp-3">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Servicedetail;
