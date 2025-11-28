/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import weblogo from "../assets/weblogo.png";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">

      {/* ================= TOP BANNER ================= */}
      <div className="w-full bg-[#057C8B] text-white px-4 md:px-8 py-2 
        flex justify-between items-center text-sm">
        
        <div className="flex items-center gap-4 whitespace-nowrap overflow-hidden">
          <span className="flex items-center gap-1">
            <FaPhoneAlt /> +91 926 443 1303
          </span>

          <span className="hidden sm:flex items-center gap-1">
            info@carecorner.in
          </span>

          <span className="flex items-center gap-1">
            <FaClock /> Mon-Sat: 10:00 AM - 08:00 PM
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <span className="w-10 h-10 bg-white/20 rounded-full flex justify-center items-center cursor-pointer">
            <FaFacebookF />
          </span>

          <span className="w-10 h-10 bg-white/20 rounded-full flex justify-center items-center cursor-pointer">
            <FaTwitter />
          </span>

          <span className="w-10 h-10 bg-white/20 rounded-full flex justify-center items-center cursor-pointer">
            <FaInstagram />
          </span>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="w-full bg-white text-[#057C8B] px-4 md:px-8 py-4 shadow-md flex justify-between items-center">

        <div className="flex items-center gap-8">
          <img src={weblogo} alt="Logo" className="w-20 cursor-pointer" />

          {/* DESKTOP MENU */}
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex gap-10 text-lg font-medium"
          >
            <li><Link to="/" className="hover:text-black">Home</Link></li>
            <li><Link to="/services" className="hover:text-black">Services</Link></li>
            <li><Link to="/blog" className="hover:text-black">Blog</Link></li>
            <li><Link to="/about" className="hover:text-black">About</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
          </motion.ul>
        </div>

        {/* DESKTOP — BOOK APPOINTMENT BUTTON */}
        <Link
  to="/Contact"
  className="hidden md:inline-block bg-[#057C8B] text-white px-5 py-2 rounded-md font-medium hover:bg-[#046b77] transition"
>
  Book Appointment
</Link>


        {/* MOBILE MENU BUTTON */}
        <div
          className="md:hidden text-4xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>

      {/* ================= MOBILE DROPDOWN MENU ================= */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white text-[#057C8B] px-6 py-4 shadow flex flex-col gap-4 text-lg font-medium"
        >
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/services">Services</Link> 
          <Link onClick={() => setMenuOpen(false)} to="/blog">Blog</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>

          {/* MOBILE — BOOK APPOINTMENT BUTTON */}
          <Link
  to="/contact"
  className="block w-full bg-[#057C8B] text-white text-center py-2 rounded-md font-medium hover:bg-[#046b77] transition"
>
  Book Appointment
</Link>
        </motion.div>
      )}
    </header>
  );
}
