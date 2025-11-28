/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import banner1 from "../assets/banner5.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import doctorImg from "../assets/aboutDoc.png";
import aboutBg from "../assets/aboutme.png";

// Example images for services
import service1 from "../assets/service6.avif";
import service2 from "../assets/service2.avif";
import service3 from "../assets/service3.avif";
import service4 from "../assets/service4.avif";
import service5 from "../assets/service2.avif";

// appointment
import appointmentVideo from "../assets/appointemnt.mp4";

// gallery 
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery3.avif";
import gallery9 from "../assets/gallery4.avif";
import gallery10 from "../assets/gallery6.avif";

//insta
import insta1 from "../assets/instav1.mp4";
import insta2 from "../assets/instav2.mp4";
import insta3 from "../assets/instav3.mp4";

// FAQ

import faqImage from "../assets/appoinment.jpg"; // replace with your image

// Client Review
import { FaStar } from "react-icons/fa";
import client1 from "../assets/client.png";
import client2 from "../assets/client.png"
import client3 from "../assets/client.png"

import youtube1 from "../assets/videoplayback1.mp4";
import youtube2 from "../assets/videoplayback2.mp4";
import youtube3 from "../assets/videoplayback 3.mp4";

// BLog section 
import blogImg from "../assets/blog1.avif"; // import at top of your file
import blogImg1 from "../assets/blog2.avif"; // import at top of your file
import blogImg2 from "../assets/blog3.avif"; // import at top of your file

export default function Home() {
  // -------------------- Banner Slider State --------------------
  const slides = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // +1 next, -1 previous

//   FAQ
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  // About Section Animations
  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
  };

  // Service 
  const servicesData = [
  {
    title: "Relationship Counselling",
    desc: "Dr. Nida Maqbool offers relationship counselling, providing guidance and support to couples for building healthier, stronger, and more fulfilling relationships.",
    img: service1,
  },
  {
    title: "Depression Therapy",
    desc: "Supportive and evidence-based approaches to help individuals cope with depression and regain emotional stability.",
    img: service2,
  },
  {
    title: "Anxiety Management",
    desc: "Guided techniques to manage anxiety, reduce stress, and improve overall mental well-being.",
    img: service3,
  },
  {
    title: "Personalized Coaching",
    desc: "One-on-one coaching sessions tailored to individual needs for lasting personal growth.",
    img: service4,
  },
  {
    title: "Wellness Programs",
    desc: "Holistic wellness programs focusing on body, mind, and emotional health.",
    img: service5,
  },
];

//gallery
  const leftImages = [gallery1, gallery2, gallery3, gallery4, gallery5];
  const rightImages = [gallery6, gallery7, gallery8, gallery9, gallery10];

  //insta
  const videos = [insta1, insta2, insta3];

// FAQ
 const faqs = [
    {
      question: "What types of therapy do you offer?",
      answer:
        "We offer relationship counselling, depression therapy, anxiety management, personalized coaching, and wellness programs tailored to individual needs."
    },
    {
      question: "How can I book an appointment?",
      answer:
        "Appointments can be booked through our website by clicking the 'Book an Appointment' button or by contacting our front desk directly."
    },
    {
      question: "Are the sessions online or in-person?",
      answer:
        "We offer both in-person and online sessions depending on your preference and convenience."
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major insurance providers. Please check with us for your specific plan."
    },
    {
      question: "How long is each session?",
      answer:
        "Sessions typically last between 45 to 60 minutes depending on the type of service required."
    },
  ];

//   Review
const clientReviews = [
  {
    img: client1,
    name: "John Doe",
    designation: "CEO of Virtual Inc.",
    review:
      "Amazing experience! The therapy and guidance helped me improve both personally and professionally.",
    location: "New York, USA",
    rating: 5,
  },
  {
     img: client2,
    name: "Jane Smith",
    designation: "Founder of TechWorld",
    review:
      "Highly recommend! The sessions are structured, supportive, and very effective.",
    location: "London, UK",
    rating: 4,
  },
  {
     img: client3,
    name: "Michael Brown",
    designation: "COO of InnovateX",
    review:
      "Professional, empathetic, and transformative. I feel more confident and focused than ever.",
    location: "Sydney, Australia",
    rating: 5,
  },
  // You can add more clients here
];




  return (
    <div className="w-full">

      {/* -------------------- Banner Slider -------------------- */}
      <div className="w-full px-0 md:px-16 py-8 md:py-12">
        <div className="relative w-full h-[20vh] sm:h-[55vh] md:h-[85vh] overflow-hidden rounded sm:rounded-3xl shadow-lg">
          {/* Slides */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={current}
              src={slides[current]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 
            bg-white/30 backdrop-blur-md text-white rounded-full 
            w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl 
            hover:bg-white/40 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 
            bg-white/30 backdrop-blur-md text-white rounded-full 
            w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-lg sm:text-xl 
            hover:bg-white/40 transition"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition 
                ${index === current ? "bg-white" : "bg-white/40"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* -------------------- About Section -------------------- */}
      <div className="w-full px-0 md:px-16 py-8 md:py-12">
        <section
          className="w-full bg-cover bg-center py-12 md:py-20"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-center gap-10 px-5 md:px-16">

            {/* Left: Doctor Image */}
            <motion.div
              className="flex-1 flex justify-center md:justify-end"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={doctorImg}
                alt="Dr. Nida Maqbool"
                className="w-full md:w-[80%] rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Right: About Content */}
            <motion.div
              className="flex-1 bg-white/30 backdrop-blur-md rounded-3xl p-6 md:p-10 flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={contentVariants}
            >
              {/* Heading with border only */}
            <h3 className=" font-medium text-sm md:text-base border w-25 border-[#057C8B] text-[#057C8B] rounded-full mb-4 px-3 py-1">
  About Me
</h3>



              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">
                Hi, I&apos;m Dr. Nida Maqbool
              </h2>

              <p className="text-base md:text-lg mb-6 text-center md:text-left">
                Care Corner, Founded by Dr. Nida Maqbool, Care Corner offers compassionate, evidence-based mental health support in a safe and calming space. From anxiety and depression to relationship challenges, we provide personalized therapy that helps you heal, grow, and rediscover emotional balance.
Your journey to a healthier, happier life starts here.
              </p>

              {/* Features Vertical List */}
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#057C8B]" />
                  <div>
                    <span className="font-semibold text-black">Qualified Physiotherapist</span><br />
                    <span className="text-gray-600 text-sm">Experienced in providing evidence-based mental health care</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#057C8B]" />
                  <div>
                    <span className="font-semibold text-black">Holistic Treatment</span><br />
                    <span className="text-gray-600 text-sm">Focused on emotional healing, stress reduction & overall well-being</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#057C8B]" />
                  <div>
                    <span className="font-semibold text-black">Professional Training</span><br />
                    <span className="text-gray-600 text-sm">Skilled in CBT, mindfulness practices & relationship counseling</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#057C8B]" />
                  <div>
                    <span className="font-semibold text-black">Patient Care</span><br />
                    <span className="text-gray-600 text-sm">Safe, empathetic & client-centered approach for long-term resilience</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        </section>
      </div>

 {/* ---------- Services Section (Left Fixed, Right Scrollable) ---------- */}
<div className="w-full flex flex-col md:flex-row px-5 md:px-16 py-12 md:py-20">

  {/* LEFT FIXED SECTION */}
  <div className="w-full md:w-1/3 md:sticky md:top-24 h-fit mb-10 md:mb-0">
    <h3 className="inline-block text-[#057C8B] font-semibold border-2 border-[#057C8B] rounded-full px-3 py-1 mb-3">
      Services
    </h3>

    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
      Clear Minds, Lasting Change
    </h2>

    <p className="text-gray-600 max-w-md mt-4 md:mt-8">
      Feel the difference with supportive, evidence-based care that brings
      clarity, confidence, and emotional balance.
    </p>
  </div>

  {/* RIGHT SCROLL SECTION */}
  <div className="w-full md:w-2/3 md:h-[90vh] md:overflow-y-scroll pr-3 space-y-16">

    {servicesData.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="flex flex-col md:flex-row items-start gap-6 md:gap-10"
      >

        {/* Image */}
        <div className="flex-1">
          <img
            src={service.img}
            alt={service.title}
            className="w-full md:w-[85%] rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>

          {/* View Detail Button */}
          <motion.button
            whileHover={{ x: 3 }}
            className="inline-flex items-center justify-between border-2 border-black rounded-full px-4 py-2 text-black font-medium hover:bg-black hover:text-white transition-all duration-300 w-max"
          >
            View Detail
            <span className="ml-2 bg-black text-white rounded-full p-1 flex items-center justify-center">
              <FaArrowLeft className="rotate-180 w-3 h-3 md:w-4 md:h-4" />
            </span>
          </motion.button>
        </div>
      </motion.div>
    ))}

  </div>
</div>


{/* ----------------book appointment-------------- */}
  <div className="w-full px-0 md:px-16 py-8 md:py-12">
<section className="w-full bg-[#E7EFF2] py-12 md:py-20 px-5 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left: Text Content */}
    <div className="flex-1 flex flex-col gap-6">
      <h2 className="text-3xl md:text-5xl font-bold">
        Get expert therapy today for the future.
      </h2>
      <p className="text-gray-700 text-base md:text-lg">
        Start your journey towards a brighter tomorrow with expert therapy. Our specialized sessions are designed to address your unique needs, offering the support and guidance you need to overcome challenges and embrace a healthier, more fulfilling future.
      </p>
      <a href="#appointment" className="text-[#057C8B] font-semibold underline mt-2 w-max">
        Book an Appointment
      </a>
    </div>

    {/* Right: Video */}
<div className="flex-1 flex justify-center md:justify-end">
  <video
    src={appointmentVideo}
    autoPlay
    loop
    muted
    playsInline
    className="w-full md:w-[90%] rounded-2xl object-cover"
  />
</div>


  </div>
</section>
</div>



<section className="w-full py-12 md:py-20 px-5 md:px-16 bg-white overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="inline-block text-gray-500 border-2 border-gray-400 rounded-full px-4 py-1 mb-3">
      Gallery
    </h3>
    <h2 className="text-3xl md:text-5xl font-bold mb-2">A glimpse into our space</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Step into a calm and comforting space where healing begins the moment you arrive.
    </p>
  </div>

  {/* First row: scroll right → left */}
  <div className="relative overflow-hidden width-1/3">
    <motion.div
      className="flex gap-4"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    >
      {leftImages.concat(leftImages).map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 1}`}
          className="inline-block w-[300px] md:w-[400px] lg:w-[450px] h-60 md:h-80 lg:h-96 object-cover rounded-lg shadow-md"
        />
      ))}
    </motion.div>
  </div>

  {/* Second row: scroll left → right */}
  <div className="relative overflow-hidden mt-6">
    <motion.div
      className="flex gap-4"
      animate={{ x: ["-50%", "0%"] }}
      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
    >
      {rightImages.concat(rightImages).map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Gallery ${index + 7}`}
          className="inline-block w-[300px] md:w-[400px] lg:w-[450px] h-60 md:h-80 lg:h-96 object-cover rounded-lg shadow-md"
        />
      ))}
    </motion.div>
  </div>
</section>

{/* ----------insta------------ */}
<section className="w-full bg-[#e6eff2] py-12 md:py-20 px-5 md:px-16 overflow-hidden">
  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="inline-block text-gray-500 border-2 border-gray-400 rounded-full px-4 py-1 mb-3">
      Our Instagram
    </h3>
    <h2 className="text-3xl md:text-5xl font-bold mb-2">Follow Our Moments</h2>
  </div>

  {/* Videos */}
  <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
    {videos.map((vid, index) => (
      <video
        key={index}
        src={vid}
        autoPlay
        muted
        loop
        playsInline
        className="flex-1 min-w-[250px] md:min-w-[300px] max-w-[32%] 
                   h-100 md:h-96 lg:h-[32rem] 
                   object-cover rounded-lg shadow-lg"
      />
    ))}
  </div>

  {/* View All Posts */}
  <div className="text-center">
    <button className="inline-block border-2 border-black rounded-full px-6 py-3 font-semibold text-black hover:bg-black hover:text-white transition-colors duration-300">
      View All Posts
    </button>
  </div>
</section>


{/*  -----------------youtube------------ */}
<section className="w-full bg-white py-12 md:py-20 px-5 md:px-16">

  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="inline-block text-gray-500 border-2 border-gray-400 rounded-full px-4 py-1 mb-3">
      Our YouTube
    </h3>
    <h2 className="text-3xl md:text-5xl font-bold mb-2">Watch Our Sessions</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Supportive and structured sessions that help you understand emotional patterns, rebuild 
      motivation, and find renewed balance and purpose.
    </p>
  </div>

  {/* Thumbnails */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
    
    {/* Thumbnail 1 */}
    <div className="relative w-full md:w-1/3 rounded-lg overflow-hidden border border-gray-300 shadow-md">

      {/* Play Icon */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/oGOsAq1e7xQ?si=T1Rf8o5DhfoM9rzR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    {/* Thumbnail 2 */}
    <div className="relative w-full md:w-1/3 rounded-lg overflow-hidden border border-gray-300 shadow-md">
      

      <iframe width="560" height="315" src="https://www.youtube.com/embed/jh48of5Mw1k?si=r8Ed9QBtflFKKrBF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    {/* Thumbnail 3 */}
    <div className="relative w-full md:w-1/3 rounded-lg overflow-hidden border border-gray-300 shadow-md">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/B5LS_t8YVUk?si=-5wV8uVTwxAxb7W-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

  </div>

  {/* View All Videos Button */}
  <div className="text-center">
    <button className="inline-block border-2 border-black rounded-full px-6 py-3 font-semibold text-black hover:bg-black hover:text-white transition-colors duration-300">
      View All Videos
    </button>
  </div>

</section>


{/* ------------FAQ-------------- */}
 <section className="w-full py-12 md:py-20 px-5 md:px-16 bg-[#E7EFF2]">
  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="inline-block text-gray-500 border-2 border-gray-400 rounded-full px-4 py-1 mb-3">
      FAQ
    </h3>
    <h2 className="text-3xl md:text-5xl font-bold mb-2">
      Your Questions, Answered Clearly
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Whether you’re seeking strategic direction or improving business performance, here are answers to the most common questions clients ask.
    </p>
  </div>

  {/* Content: Image + Accordion */}
  <div className="flex flex-col md:flex-row items-start gap-10 max-w-7xl mx-auto">
    {/* Left: Image */}
    <div className="flex-1 flex justify-center md:justify-start">
      <img
        src={faqImage} // replace with your image
        alt="FAQ Illustration"
        className="w-full md:w-[80%] lg:w-[70%] h-auto rounded-2xl shadow-lg object-cover"
      />
    </div>

    {/* Right: Accordion */}
    <div className="flex-1 flex flex-col gap-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-xl overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
          >
            <span className="font-semibold text-black">{faq.question}</span>
            <span className="text-xl">{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className="px-4 py-3 text-gray-700 bg-white">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

{/* --------Client------------ */}
 <section className="w-full py-12 md:py-20 px-5 md:px-16 bg-white overflow-hidden">
  {/* ---------------- Heading ---------------- */}
  <div className="text-center mb-12">
    <h3 className="inline-block text-gray-500 border-2 border-gray-400 rounded-full px-4 py-1 mb-3">
      Client Review
    </h3>
    <h2 className="text-3xl md:text-5xl font-bold mb-2">
      What Our Loving Clients Say
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      We’ve helped businesses of all sizes unlock growth, refine their strategies,
      and achieve lasting results. Here’s what our clients say.
    </p>
  </div>


  {/* ---------------- Review Cards Row with Fade ---------------- */}
  <div className="relative overflow-hidden mb-12">
    {/* Left fade overlay */}
    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
    {/* Right fade overlay */}
    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

    <motion.div
      className="flex gap-6"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    >
      {clientReviews.concat(clientReviews).map((client, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[300px] md:w-[350px] bg-[#E7EFF2] rounded-2xl p-6 shadow-lg flex flex-col justify-between"
        >
          {/* Top: Client Image & Name */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={client.img}
              alt={client.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h4 className="font-semibold text-lg">{client.name}</h4>
              <span className="text-gray-600 text-sm">{client.designation}</span>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-sm mb-4">{client.review}</p>

          {/* Bottom: Location + Stars */}
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">{client.location}</span>
            <div className="flex gap-1">
              {Array.from({ length: client.rating }).map((_, i) => (
                <FaStar key={i} className="text-black w-4 h-4" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>

  {/* ---------------- Stats Banner Below Cards ---------------- */}
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#057C8B] rounded-3xl py-10 px-6 md:px-16 flex flex-col md:flex-row justify-around items-center gap-10 text-center shadow-lg">
      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">180+</h3>
        <p className="text-gray-200 mt-1">Counsellings Done</p>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">96%</h3>
        <p className="text-gray-200 mt-1">Client Satisfaction Rate</p>
      </div>
      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">15+</h3>
        <p className="text-gray-200 mt-1">Years of Experience</p>
      </div>
    </div>
  </div>
</section>

{/* -----------blog------- */}
<section className="w-full py-12 md:py-20 px-5 md:px-16 bg-white">
  {/* Heading */}
  <div className="text-center mb-12">
    <h3 className="inline-block text-gray-500 border-2 border-gray-400 rounded-full px-4 py-1 mb-3">
      Our Blog
    </h3>
    <h2 className="text-3xl md:text-5xl font-bold mb-2">
      Explore insights and stay ahead
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Our blog features insights from our team of consultants, who share their best practices on a wide range of topics.
    </p>
  </div>

  {/* Blog Cards */}
  <div className="flex flex-col md:flex-row gap-6 justify-center">
    {/* Blog Card 1 */}
    <div className="relative w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg">
      <div className="absolute top-4 left-4 bg-sky-500 text-white text-sm px-3 py-1 rounded-full z-10">
        12 Oct 2025
      </div>
      <img
        src={blogImg}
        alt="Blog 1"
        className="w-full h-64 md:h-80 object-cover"
      />
      

      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold mb-2">5 Ways to Improve Emotional Well-being</h3>
        <p className="text-gray-600 text-sm">Learn strategies to manage stress and boost happiness in daily life.</p>
      </div>
    </div>

    {/* Blog Card 2 */}
    <div className="relative w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg">
      <div className="absolute top-4 left-4 bg-sky-500 text-white text-sm px-3 py-1 rounded-full z-10">
        08 Oct 2025
      </div>
      <img
        src={blogImg1}
        alt="Blog 2"
        className="w-full h-64 md:h-80 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold mb-2">Building Resilience in Challenging Times</h3>
        <p className="text-gray-600 text-sm">Tips and techniques to stay strong and focused during adversity.</p>
      </div>
    </div>

    {/* Blog Card 3 */}
    <div className="relative w-full md:w-1/3 rounded-2xl overflow-hidden shadow-lg">
      <div className="absolute top-4 left-4 bg-sky-500 text-white text-sm px-3 py-1 rounded-full z-10">
        01 Oct 2025
      </div>
      <img
        src={blogImg2}
        alt="Blog 3"
        className="w-full h-64 md:h-80 object-cover"
      />
      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold mb-2">Effective Stress Management Techniques</h3>
        <p className="text-gray-600 text-sm">Practical advice to reduce stress and maintain mental clarity.</p>
      </div>
    </div>
  </div>
</section>

{/* ---contact--- */}
<section className="w-full py-16 px-16 sm:px-16 md:px-16 rounded-2xl">
  <div className="max-w-7xl mx-auto flex flex-col p-5 bg-[#057C8B] rounded-2xl items-center text-center gap-6">

    {/* Main Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug">
      Your wellness journey begins in one click
    </h2>

    {/* Subheading / Description */}
    <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-3xl">
      Book your appointment today and experience expert care designed around you to be better. 
      Our service is tailored to your needs, helping you regain balance and improve well-being.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mt-6">

      {/* Contact Us Button */}
      <a
        href="#contact"
        className="inline-flex items-center justify-center bg-white text-black border-2 border-white rounded-full px-6 py-3 font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300"
      >
        Contact Us
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>

      {/* Our Services Button */}
      <a
        href="#services"
        className="inline-flex items-center justify-center text-white border-2 border-white rounded-full px-6 py-3 font-semibold text-base sm:text-lg hover:bg-white hover:text-[#057C8B] transition-all duration-300"
      >
        Our Services
      </a>
    </div>

  </div>
</section>
    </div>
  );
}
