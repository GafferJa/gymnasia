import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-800 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Karigar Ko Dukaan</h2>
          </div>
          <p className="text-sm text-white">
            Celebrating tradition through authentic, handmade art from the heart of Nepal.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/belts" className="hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay Connected</h3>
          <p className="text-sm mb-2">Email: info@karigarkodukaan.com</p>
          <p className="text-sm mb-2">Phone: +977 984-3340949</p>
          <p className="text-sm">Address: 123 Karigar Ave,Handicraft City</p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaPinterest /></a>
            <a href="#" className="hover:text-white"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-10">
        &copy; {new Date().getFullYear()} Karigar Ko Dukaan. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
