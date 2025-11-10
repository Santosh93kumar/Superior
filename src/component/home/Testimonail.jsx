// import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AOS from 'aos';
// import { useEffect } from "react";
// import 'aos/dist/aos.css';
// import { Flashlight } from "lucide-react";

// // Closure for testimonials
// const useTestimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       name: "Satyam Rai",
//       role: "Full Stack Developer @Tech Ahead",
//       image: "https://randomuser.me/api/portraits/men/26.jpg",
//       text: "I applied for Full Stack Developer via NN Hire and the experience from application to hire was so smooth. I was placed at Tech Ahead with confidence due to NovaNectar's support and their approach of Smart IT Solutions.",
//     },
//     {
//       id: 2,
//       name: "Trupti Chandwani",
//       role: "Software Developer @Cognizant",
//       image: "https://randomuser.me/api/portraits/women/25.jpg",
//       text: "I still remember the day I posted my resume on NN Hire. One step turned everything around. NovaNectar's methodical direction and Smart IT Solution framework aided me in cracking the interview of Cognizant. Eternally thankful for this experience!",
//     },
//     {
//       id: 3,
//       name: "Dheeraj Maurya",
//       role: "Python Developer @NovaNectar",
//       image: "https://randomuser.me/api/portraits/men/27.jpg",
//       text: "I got my job through NN Hire and now I am working as a Python Developer at NovaNectar itself. The process was so clear and guided I never felt lost. This platform truly reflects what a Smart IT Solution should be!",
//     },
//     {
//       id: 4,
//       name: "Deepika Rai",
//       role: "Developer @Green Valley HR Services",
//       image: "https://randomuser.me/api/portraits/women/29.jpg",
//       text: "When I applied to NN Hire I didn't expect such a quick response. But within days, I got interview calls and finally got placed at Green Valley HR Services. NovaNectar's platform and Smart IT driven system made the whole process seamless!",
//     },
//     {
//       id: 5,
//       name: "Ayush Dangwal",
//       role: "IT Teacher @Jamdagni Public School",
//       image: "https://randomuser.me/api/portraits/men/30.jpg",
//       text: "Thanks to NN Hire, I'm now an IT Teacher. I signed up on the website and it was all so easy, from the call to the offer letter. NovaNectar's Smart IT Solution concept is something all job-seekers should try out!",
//     },
//     // {
//     //   id: 6,
//     //   name: "Sagar Pimoli",
//     //   role: "Subject Matter Expert @Appsndevice Technologies",
//     //   image: "https://randomuser.me/api/portraits/men/31.jpg",
//     //   text: "Using NN Hire to apply was the best option. I got selected at Appsndevice Technologies within weeks. NovaNectar's professional team and Smart IT Solution thinking made me job-ready. Very grateful!",
//     // },
//     {
//       id: 7,
//       name: "Sumit Kaintura",
//       role: "Web Developer @Rekruters",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//       text: "I noticed the position at NN Hire, applied, and voila! A couple of interviews down the line, I received the offer from Rekruters. This platform is not only a job board, it's a Smart IT Solution developed by NovaNectar to transform lives. Thank you!",
//     },
//     {
//       id: 8,
//       name: "Aditya",
//       role: "Frontend Developer @KSolve India",
//       image: "https://randomuser.me/api/portraits/men/33.jpg",
//       text: "Thanks to NN Hire, I am now a Frontend Developer at KSolve India. The entire hiring process was well guided and tech enabled. NovaNectar's Smart IT Solution made me job-ready and confident for every interview round.",
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   const getTestimonials = () => testimonials;

//   return { getTestimonials };
// };

// const TestimonialSection = () => {
//   const { getTestimonials } = useTestimonials();
//   const testimonials = getTestimonials();

//   const totalDots = 6;
//   const chunkSize = Math.ceil(testimonials.length / totalDots);

//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     customPaging: (i) => (
//       <div className="dot-custom w-9 h-9 rounded-full transition-all duration-300"></div>
//     ),
//     appendDots: (dots) => (
//       <div>
//         <ul className="flex justify-center mt-6 space-x-2">{dots.slice(0, totalDots)}</ul>
//       </div>
//     ),
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const getColorFromName = (name) => {
//     const colors = [

//       "bg-blue-500",
//       "bg-purple-500",

//       "bg-indigo-500",

//     ];
//     const charCodeSum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
//     return colors[charCodeSum % colors.length];
//   };

//   return (
//     <div className=" py-16 my-14 px-10 md:px-18">
//       <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
//         What A Job Holder Says About Us
//       </h2>
//       <p className="text-center text-gray-400 mt-2">
//         Connecting professionals with their dream jobs.
//       </p>

//     <div className="mt-8 bg-gray-100 w-full max-w-[1480px] mx-auto">
//   <Slider {...settings}>
//     {testimonials.map((item, index) => (
//       <div
//         key={index}
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         data-aos-delay={index * 100}
//         data-aos-easing="ease-in-out"
//         className="px-1.5  my-1"
//         style={{
//           boxShadow:
//             "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//         }}
//       >
//         <div className="rounded-xl border-2 border-zinc-300 py-6 px-4 min-h-[320px] transition duration-300 transform hover:scale-103 bg-[#F3F2FF] shadow-[0_0_7px_rgba(0,0,0,0.2)]">
//           <FaQuoteLeft className="text-xl text-blue-600 hover:text-white" />
//           <p className="mt-2 text-base line-clamp-5">{item.text}</p>

//           <div className="flex flex-col  mt-14 gap-2">
//                 <div className="w-full border-t-2 border-gray-400"></div>
//            <div className="flex gap-2">
//              <div
//               className={`w-12 h-12 rounded-full  flex items-center  justify-center text-white font-bold text-lg shadow-md
//               ${getColorFromName(item.name)}`}
//             >
//               {item.name.charAt(0).toUpperCase()}
//             </div>

//             <div className="">
//            <p className="font-semibold text-lg whitespace-nowrap">{item.name}</p>
//               <p className="text-sm line-clamp-1">{item.role}</p>
//             </div>
//            </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </Slider>
// </div>

//       {/* Custom Styling for Dots and Arrows */}
//       <style>
//         {`
//           /* Custom Dot Styling */
//           .dot-custom {
//             background-color: #93c5fd; /* Tailwind bg-blue-300 */
//           }
//           .slick-dots li.slick-active .dot-custom {
//             background-color: #2563eb; /* Tailwind bg-white text-blue-300 */
//           }

//           /* Large Arrow Styling */
//           .slick-prev,
//           .slick-next {
//             width: 50px !important;
//             height: 50px !important;
//             z-index: 1;
//           }

//           .slick-prev {
//             left: -20px !important;
//           }

//           .slick-next {
//             right: -20px !important;
//           }

//           .slick-prev:before,
//           .slick-next:before {
//             font-size: 30px !important;
//             color: #2563eb !important;
//             opacity: 0.8;
//           }

//           .slick-prev:hover:before,
//           .slick-next:hover:before {
//             opacity: 1;
//             color: #1d4ed8 !important;
//           }

//           /* Responsive arrows */
//           @media (max-width: 768px) {
//             .slick-prev,
//             .slick-next {
//               width: 40px !important;
//               height: 40px !important;
//             }

//             .slick-prev {
//               left: -25px !important;
//             }

//             .slick-next {
//               right: -25px !important;
//             }

//             .slick-prev:before,
//             .slick-next:before {
//               font-size: 40px !important;
//             }
//           }

//           @media (max-width: 480px) {
//             .slick-prev,
//             .slick-next {
//               width: 35px !important;
//               height: 35px !important;
//             }

//             .slick-prev {
//               left: -15px !important;
//             }

//             .slick-next {
//               right: -15px !important;
//             }

//             .slick-prev:before,
//             .slick-next:before {
//               font-size: 35px !important;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default TestimonialSection;

import React from "react";
import { Star, Play } from "lucide-react";

const testimonials = [
  {
    name: "Amit Kumar",
    role: "Final Year - CSE Student, Graduating in 2026",
    username: "@amitkumar",
    message:
      "I had an incredible learning experience in the Backend Development course. The course covered everything from networking, databases,ad an incredible learning experience in the Backend Development course. The course covered everything from networking, .",
    stars: 5,
    // type: "video",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
  },
  {
    name: "Krishna Tiwari",
    role: "Student",
    username: "@krishnatiwari",
    message:
      "I have been searching for content that levels me up and spent a lot of time and money. Rakesh sir, where have you been all this time? Absolutely game winner course ad an incredible learning experience in the Backend Development course. The course covered everything from networking, .",
    stars: 5,
    // type: "text",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWjBTIJQA5vmWLWDq7a3w9a1QTZzv9TbaPWA&s",
  },
  {
    name: "Sujoy Kumar Haldar",
    role: "Frontend Engineer",
    username: "@sujoykumarhaldar",
    message:
      "I found both the Advanced MERN and Backend Foundation courses to be exceptionally well-structured and beginner-friendly. Highly recommended for anyone \\\\\\\\\\\\\\\\\ ad an incredible learning experience in the Backend Development course. The course covered everything from networking,",
    stars: 5,
    // type: "video",
    image:
      "https://imgs.search.brave.com/0-x_bzTdAsmVTbTAxNcINw_liyip68lLOr_EeSFaHGc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/aWdpdGFsLWFydC1w/b3J0cmFpdC1wZXJz/b24tbGlzdGVuaW5n/LW11c2ljLWhlYWRw/aG9uZXNfMjMtMjE1/MTA2NTA3OC5qcGc_/c2VtdD1haXNfaHli/cmlkJnc9NzQw",
  },
];

export default function TestimonialSection() {
  return (
    <section className="text-black bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">What Our Students Say</h2>
        <p className="text-gray-400">
          Real stories from people who leveled up 🚀
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl border border-blue-300/30 shadow-lg flex flex-col bg-black backdrop-blur-xl overflow-hidden group"
          >
            {/* Image */}
            <img
              src={t.image}
              alt={t.name}
              className="absolute top-6 left-6 w-12 h-12 rounded-full object-cover border border-blue-300/30
             transition-all duration-500 group-hover:top-0 group-hover:left-0 group-hover:w-full group-hover:h-full group-hover:rounded-none group-hover:object-contain"
            />

            {/* Top-left User info (default) */}
            <div className="text-left flex flex-col relative ml-14 transition-opacity duration-500 group-hover:opacity-0 z-20">
              <h4 className="font-semibold text-white text-base">{t.name}</h4>
              <p className="text-xs text-gray-300 w-[150px]">{t.role}</p>
              <p className="text-xs text-blue-300">{t.username}</p>
            </div>

            {/* Stars */}
            <div className="flex mb-2 justify-end absolute right-0 p-6 top-0 z-20 transition-opacity duration-500 group-hover:opacity-0">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-white fill-white" />
              ))}
            </div>

            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent opacity-0
                    transition-opacity duration-500 group-hover:opacity-100 z-10"
            ></div>

            {/* Bottom User info (on hover) */}
            <div
              className="absolute bottom-6 left-6 text-left flex flex-col opacity-0 z-20
                    transition-opacity duration-500 group-hover:opacity-100"
            >
              <h4 className="font-semibold text-white text-base">{t.name}</h4>
              <p className="text-xs text-gray-300 w-[150px]">{t.role}</p>
              <p className="text-xs text-blue-300">{t.username}</p>
            </div>

            {/* Message / Play button */}
            <div className="relative z-20 flex flex-col gap-2 mt-auto">
              {t.type === "video" && (
                <div className="absolute top-4 left-4 bg-blue-300/20 backdrop-blur-md p-2 rounded-full cursor-pointer z-30">
                  <Play className="w-5 h-5 text-white" />
                </div>
              )}

              <p className="text-white text-sm transition-opacity duration-300 group-hover:opacity-0">
                {t.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
