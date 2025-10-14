import React,{useState} from 'react'
import {data} from './data'
import {useParams} from 'react-router-dom'
console.log('data : ',data);
function Servicedetail() {
     const [activeSection, setActiveSection] = useState("about");
    const {id} = useParams();
    const filter = data.filter((item)=> item.id == id);
    console.log('filter : ',filter);
     const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
    
  return (
      <>
    <div className='w-full'>
      
        <div className="relative w-full h-[100vh] overflow-hidden">
  {/* Background Image */}
  <img
    className="w-full h-full object-cover absolute top-0 left-0"
    src={filter[0].heading.image}
    alt=""
  />

  {/* Overlay Text */}
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-start px-10 bg-black/40">
    <div className="text-white z-20 max-w-2xl">
      <h2 className="text-3xl font-bold mb-4">{filter[0].heading.subtitle}</h2>
      <h1 className="text-5xl font-extrabold mb-6">{filter[0].heading.title}</h1>
      <button className="px-6 py-3 border text-white rounded-lg hover:bg-blue-700 transition">
        {filter[0].heading.button}
      </button>
    </div>
  </div>
</div>
    <div>
        <header className="flex w-full bg-orange-500 justify-center gap-10 px-20 text-white font-semibold text-xl  py-4">
        <button
          onClick={() => scrollToSection("about")}
          className={`m-2 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:transition-transform after:scale-x-0 hover:after:scale-x-100 ${
            activeSection === "about" ? "after:scale-x-100" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("service")}
          className={`m-2 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:transition-transform after:scale-x-0 hover:after:scale-x-100 ${
            activeSection === "service" ? "after:scale-x-100" : ""
          }`}
        >
          Service
        </button>
        <button
          onClick={() => scrollToSection("feedback")}
          className={`m-2 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:transition-transform after:scale-x-0 hover:after:scale-x-100 ${
            activeSection === "feedback" ? "after:scale-x-100" : ""
          }`}
        >
          Feedback
        </button>
      </header>
    </div>
   {/* ✅ Add padding-top to offset the fixed header */}
      <div className="pt-20">

        {/* 🟠 About Section */}
        <div id="about" className={`flex flex-col md:flex-row w-full p-10 gap-10  min-h-[80vh] ${activeSection === 'about' ? 'pt-28':''} `}>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-5">{filter[0].about.title}</h1>
            <p className="text-lg text-gray-600">{filter[0].about.content}</p>
          </div>
          <div className="md:w-1/2">
            <img src={filter[0].about.imgage} alt="About" />
          </div>
        </div>

        {/* 🟢 Service Section */}
        <div id="service" className={`flex flex-col md:flex-row w-full p-10 gap-10 bg-gray-100 min-h-[80vh] ${activeSection === 'service' ? 'pt-36':''} `}>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-5">{filter[0].service.title}</h1>
            <p className="text-lg text-gray-600">{filter[0].service.content}</p>
          </div>
          <div className="md:w-1/2">
            <img src={filter[0].service.imgage} alt="Service" />
          </div>
        </div>


        {/* 🔵 Feedback Section */}
        <div
  className={`w-full p-10 gap-10 min-h-[80vh] ${activeSection === 'feedback' ? 'pt-36':''}`}
  id="feedback"
>
  <h1 className="text-3xl font-bold mb-10 text-center">Our Feedback</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {filter[0].feedback.map((item) => (
      <div
        key={item.id}
        className="relative h-96 rounded-lg overflow-hidden shadow-md"
      >
        {/* Background Image */}
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
       

        {/* Content at the bottom */}
        <div className="absolute px-4 py-2 mx-3 my-2 bg-black/40 bottom-0 left-0  p-6 text-white">
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
  )
}

export default Servicedetail
