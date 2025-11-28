import React, { useState } from "react";
import { Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

import heroImg from "../assets/contact.jpeg";
import meetingImg from "../assets/contact1.avif";
import axios from "axios";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/message`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuccessMsg(response.data.message || "Message sent successfully!");

      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.log("Error:", error);

      setErrorMsg(
        error.response?.data?.message ||
          "Something went wrong! Please try again"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full font-[Cormorant_Garamond]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[500px] md:h-[560px] overflow-hidden">
        <img
          src={heroImg}
          alt="Contact Banner"
          className="w-full h-full object-cover brightness-[0.65]"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-6xl font-semibold tracking-wide"
          >
            Contact
          </motion.h1>
        </div>
      </section>

      {/* ================= CONTACT DETAILS SECTION ================= */}
      <section className="w-full py-28 md:py-36 bg-white">
        <div className="container mx-auto px-5 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold leading-snug mb-6">
              Our team is available for <br /> custom requests
            </h2>

            <p className="text-gray-600 text-[18px] leading-relaxed mb-12">
              Let us bring beauty, harmony, and tranquility to your outdoor
              oasis with our expert landscaping services. Your journey to a more
              beautiful landscape starts here.
            </p>

            {/* Contact Items */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Phone size={30} className="text-blue-700" />
                <div>
                  <p className="text-xl font-semibold">+91 926 443 1303</p>
                  <p className="text-gray-500 text-sm">
                    Reach us from 9 am – 6 pm
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin size={30} className="text-blue-700" />
                <div>
                  <p className="text-xl font-semibold">5th Avenue</p>
                  <p className="text-gray-500 text-sm">10212 New York City</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={meetingImg}
              alt="Team Meeting"
              className="rounded-3xl shadow-lg w-full object-cover"
              style={{ height: "400px" }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="w-full py-32 md:py-40 bg-[#F5F7F8]">
        <div className="container mx-auto px-5 md:px-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold mb-6"
          >
            Contact form
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg mb-16 leading-relaxed"
          >
            Contact us today to schedule a consultation and experience the
            difference that passion, creativity, and expertise can make in your
            outdoor space.
          </motion.p>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-10 md:p-14"
          >
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={data.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-blue-700"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-blue-700"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={data.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full focus:outline-blue-700"
              />

              <textarea
                name="message"
                placeholder="Message"
                value={data.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-md p-3 w-full h-48 md:col-span-2 focus:outline-blue-700"
              />

              {successMsg && (
                <p className="text-blue-900 font-medium md:col-span-2">
                  {successMsg}
                </p>
              )}

              {errorMsg && (
                <p className="text-red-600 font-medium md:col-span-2">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-blue-900 text-white py-3 rounded-md w-full md:col-span-2 text-xl hover:bg-blue-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
