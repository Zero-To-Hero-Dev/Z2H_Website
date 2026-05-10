import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';
import {InstagramLogoIcon, TwitterLogoIcon} from '@radix-ui/react-icons';


const Footer: React.FC = () => {
  const quickLinks = [
    // { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Training", path: "/training" },
    // { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: Globe, href: "https://www.Z2HDEV.com", color: "hover:text-blue-600" },
    { icon: InstagramLogoIcon, href: "https://www.instagram.com/z2h_dev_ltd", color: "hover:text-pink-600" },
    // { icon: FacebookLogoIcon, href: "https://www.facebook.com/z2hdev", color: "hover:text-blue-800" },
    { icon: TwitterLogoIcon, href: "https://www.twitter.com/z2hdev", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className=" w-10 h-10 rounded-lg flex items-center justify-center">
                {/* <span className="text-white font-bold text-lg">Z2H</span> */}
                <img src="../LOGO.png" alt="Z2H DEV LTD Logo" />
              </div>
              <h3 className="text-2xl font-bold">Z2H DEV LTD</h3>
            </div>
            <p className="text-gray-400 mb-2 text-sm">LEARN • BUILD • LAUNCH</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses, students, and future innovators through technology, creativity, and practical digital skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>+250 785 950 333</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>z2hsupport@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 relative inline-block">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} hover:bg-gray-700 transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Z2H DEV LTD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;