import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
import logo from "../assets/weblogo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#E7EFF2] text-[#233957] pt-10 mt-10 relative">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 
                      px-5 md:px-0 pb-16 md:pb-24">

        {/* LEFT SECTION */}
        <div>
          <img src={logo} alt="Logo" className="w-40 h-auto mb-4" />

          <p className="leading-6 mb-4">
            Jora Talab, Bariatu, Ranchi <br />
            Jharkhand (834009), India
          </p>

          <p className="flex items-center gap-2 mb-2">
            <FaPhoneAlt /> +91 9264431303
          </p>

          <p className="flex items-center gap-2">
            <FaEnvelope /> info@carecorner.in
          </p>
        </div>

        {/* MIDDLE MENU */}
        <div className="flex flex-col gap-3 text-md font-normal">
          <p className="cursor-pointer hover:text-[#057C8B]">Relationship Counselling</p>
          <p className="cursor-pointer hover:text-[#057C8B]">Depression</p>
          <p className="cursor-pointer hover:text-[#057C8B]">Anxiety</p>
          <p className="cursor-pointer hover:text-[#057C8B]">Nida's Blog</p>
          <p className="cursor-pointer hover:text-[#057C8B]">About</p>
          <p className="cursor-pointer hover:text-[#057C8B]">Contact</p>
        </div>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex flex-col md:items-end items-start gap-4 px-0">
          <h3 className="text-lg font-semibold">Follow Us</h3>

          <div className="flex items-center gap-5 text-2xl">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/care_corner_ranchi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#057C8B] transition"
            >
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/CareCornerRanchi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#057C8B] transition"
            >
              <FaFacebookF />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#057C8B] transition"
            >
              <FaTwitter />
            </a>

            {/* Google Maps */}
            <a
              href="https://www.google.com/maps/place/Care+Corner/@23.3938047,85.3518069"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#057C8B] transition"
            >
              <FaGoogle />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="w-full bg-[#057C8B] text-white text-center py-5 md:py-6 text-sm">
        Care Corner © 2025. All Rights Reserved. Powered by{" "}
        <a
          href="https://www.enegixwebsolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Enegix Web Solutions.
        </a>
      </div>

    </footer>
  );
}
