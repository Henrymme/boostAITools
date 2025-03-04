"use client"

import React from "react";
import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1f2235] text-[#A3B3CC] text-sm py-6 text-center w-full mt-auto">        
      <div className="border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <Link href="#"><FiLinkedin className="text-xl hover:text-white" /></Link>
          <Link href="#"><FiTwitter className="text-xl hover:text-white" /></Link>
          <Link href="#"><FiYoutube className="text-xl hover:text-white" /></Link>
          <Link href="#"><FiInstagram className="text-xl hover:text-white" /></Link>
          <Link href="#"><FiFacebook className="text-xl hover:text-white" /></Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Copyright BoostAITools. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;