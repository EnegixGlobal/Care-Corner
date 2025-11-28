import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    id: 1,
    title: "Relationship Counselling",
    desc: "Strengthening bonds, resolving conflicts, and understanding patterns.",
    tags: ["Couples Therapy", "Healing", "Communication"],
    img: "https://images.pexels.com/photos/4098211/pexels-photo-4098211.jpeg",
  },
  {
    id: 2,
    title: "Depression",
    desc: "Compassionate guidance to overcome emotional heaviness and hopelessness.",
    tags: ["Calm Minds", "Healing", "Professional Support"],
    img: "https://images.pexels.com/photos/4101144/pexels-photo-4101144.jpeg",
  },
  {
    id: 3,
    title: "Anxiety",
    desc: "Personalized therapy to reduce worry, overthinking, and emotional tension.",
    tags: ["Stress Relief", "Therapy Session", "Progress Steps"],
    img: "https://images.pexels.com/photos/5699831/pexels-photo-5699831.jpeg",
  },
  {
    id: 4,
    title: "Personal Growth Coaching",
    desc: "Helping you discover clarity, confidence, and a stronger sense of self.",
    tags: ["Goal Setting", "Mindset", "Well-being"],
    img: "https://images.pexels.com/photos/6474120/pexels-photo-6474120.jpeg",
  },
];

const Services = () => {
  return (
    <div className="w-full font-sans">

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg"
          className="w-full h-full object-cover brightness-75"
          alt="Services Banner"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-semibold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl mt-4 max-w-2xl"
          >
            Providing compassionate therapy solutions to guide you toward
            emotional wellness, growth, and clarity.
          </motion.p>
        </div>
      </section>

      {/* STEPS HEADER */}
      <section className="px-6 md:px-24 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">OUR SERVICES</p>
              <h2
                className="text-3xl md:text-4xl font-semibold mt-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Clear Steps for Healing Minds
              </h2>
            </div>

            <button className="text-gray-700 text-sm border px-4 py-2 rounded-full hover:bg-gray-100">
              Our Approach →
            </button>
          </div>

        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="px-6 md:px-24 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">

          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gray-50 rounded-3xl p-6 md:p-10 shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* IMAGE */}
                <img
                  src={service.img}
                  alt=""
                  className="w-full h-56 md:h-72 object-cover rounded-2xl"
                />

                {/* TEXT CONTENT */}
                <div>
                  <span className="w-3 h-3 bg-green-500 rounded-full block mb-3"></span>

                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-base leading-relaxed">
                    {service.desc}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-gray-700 bg-white border px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
