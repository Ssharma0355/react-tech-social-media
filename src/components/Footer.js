import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full dark:bg-darkBg bg-[#FFFFFF] text-gray-200 py-6 fixed bottom-0 left-0">
      {" "}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-[#4CAF50] font-bold">
            Sachin's Development
          </h2>
          <p className="text-sm text-lightText mt-1">
            © {new Date().getFullYear()} On Wheels. All rights reserved.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <div className="flex gap-6 text-lightText text-sm">
          <a href="#about" className="hover:text-gray-400 transition">
            Privacy and Policy
          </a>
          <a href="#services" className="hover:text-gray-400 transition">
            Terms and Condition
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
