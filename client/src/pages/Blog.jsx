import React from "react";
import { motion } from "framer-motion";

// Example images (replace with real images)
import blog1 from "../assets/blog1.avif";
import blog2 from "../assets/blog2.avif";
import blog3 from "../assets/blog3.avif";
import blog4 from "../assets/blog4.avif";
import blog5 from "../assets/blog5.avif";
import blog6 from "../assets/blog6.avif";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Healthy Lifestyle Starts With Small Daily Habits",
      desc: "Simple changes that create long-lasting impact on your wellbeing.",
      img: blog1,
    },
    {
      id: 2,
      title: "Elderly Healthcare: What You Should Know",
      desc: "Practical advice and care tips for seniors at home.",
      img: blog2,
    },
    {
      id: 3,
      title: "Mental Wellness and Mind-Body Balance",
      desc: "Ways to maintain emotional & mental calm in a busy world.",
      img: blog3,
    },
    {
      id: 4,
      title: "Healthy Lifestyle Starts With Small Daily Habits",
      desc: "Simple changes that create long-lasting impact on your wellbeing.",
      img: blog4,
    },
    {
      id: 5,
      title: "Elderly Healthcare: What You Should Know",
      desc: "Practical advice and care tips for seniors at home.",
      img: blog5,
    },
    {
      id: 6,
      title: "Mental Wellness and Mind-Body Balance",
      desc: "Ways to maintain emotional & mental calm in a busy world.",
      img: blog6,
    },
  ];

  return (
    <div className="w-full bg-white">

      {/* ✔ HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-20 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Explore ideas shaping <br /> modern healthcare
        </h1>

        <p className="text-gray-600 mt-4 text-lg max-w-xl mx-auto">
          Our blog shares practical advice, research, and updates designed to support patients.
        </p>
      </motion.div>

      {/* ✔ BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">{post.desc}</p>
              </div>

            </motion.div>
          ))}

        </div>
      </div>

    </div>
  );
};

export default Blog;
