import React from "react";
import { motion } from "framer-motion";
import mission from "../assets/mission.avif";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className="w-full font-sans pt-[50px]">

      {/* HERO SECTION */}
      <section className="w-full bg-white px-6 md:px-24 pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* About Tag */}
            <motion.span
              variants={fadeUp}
              className="px-5 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              About
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-8 text-4xl md:text-6xl font-semibold leading-tight text-gray-900"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Empowering Minds.<br />
              Restoring Balance.<br />
              Transforming Lives.
            </motion.h1>

            {/* Rating */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mt-8">
              <div className="flex text-black text-xl">★★★★★</div>
              <div className="h-4 w-px bg-gray-400"></div>
              <span className="text-gray-700 font-medium">Rated by loving Clients</span>
            </motion.div>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 mt-6 text-lg max-w-lg leading-relaxed"
            >
              We are here to support you with compassion, expertise, and genuine care.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="w-full h-px bg-gray-300 mt-10"
            ></motion.div>

            {/* Client avatars line */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((img, i) => (
                  <motion.img
                    key={i}
                    variants={fadeUp}
                    src={`https://i.pravatar.cc/150?img=${img}`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                Join 100+ other awesome clients
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
              alt="Therapy Session"
              className="rounded-3xl shadow-md w-full object-cover"
              style={{ height: "520px", objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="w-full bg-[#e9f0f4] px-6 md:px-24 py-32 md:py-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A guidance & counselling <br/>center with a leading counselling psychologist
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed text-lg max-w-md">
              Our step-by-step therapeutic approach simplifies emotional challenges,
              provides personalized strategies, and guides you toward measurable mental wellness.
            </p>

            <div className="flex items-center gap-2 mt-8">
              <img src="/star.svg" className="w-5" alt="" />
              <span className="text-gray-700 font-medium">4.5 Rated by loving Clients</span>
            </div>
          </motion.div>

          {/* CARDS */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200"
              >
                <p className="text-4xl font-semibold text-gray-800">{num}</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-3">
                  {num === 1 && "Easy Appointment Booking"}
                  {num === 2 && "Tailored Therapy Plan"}
                  {num === 3 && "Continuous Support & Growth"}
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {num === 1 &&
                    "Scheduling your session is simple and stress-free. Book online quickly and begin your journey."}
                  {num === 2 &&
                    "We create a personalized therapy plan based on your goals and emotional needs."}
                  {num === 3 &&
                    "We stay connected throughout your journey with guidance and progress support."}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="w-full bg-white px-6 md:px-24 py-32 md:py-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={mission}
              alt="Mission"
              className="rounded-3xl shadow-md w-full object-cover"
              style={{ height: "480px", objectFit: "cover" }}
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Our journey began with a<br />simple mission
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg max-w-xl">
              We started with one goal — to offer a safe, supportive space for people to heal.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed text-lg max-w-xl">
              Today, we help individuals overcome stress, anxiety, relationship issues,
              and emotional struggles with clarity.
            </p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-16 mt-12">
              <div>
                <p className="text-4xl font-semibold text-gray-900">15</p>
                <p className="text-gray-600 mt-1 text-sm tracking-wide">Years in Practice</p>
              </div>

              <div>
                <p className="text-4xl font-semibold text-gray-900">3k+</p>
                <p className="text-gray-600 mt-1 text-sm tracking-wide">Clients Supported</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      
    </div>
  );
};

export default About;
