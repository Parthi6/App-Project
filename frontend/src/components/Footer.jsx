import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="bg-black text-white w-full pt-1">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm px-5 sm:px-20">
        {/* Footer Left Section */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="LuxeLane Logo" />
          <p className="w-full md:w-2/3 text-gray-400">
            LuxeLane is your go-to destination for exclusive and trendy fashion.
            Explore our curated collections of high-quality apparel, accessories,
            and more, designed to help you express your unique style and stand out.
            Join us and experience luxury like never before!
          </p>
        </div>

        {/* Footer Middle Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Footer Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>+94761234567</li>
            <li>help@luxelane.com</li>
          </ul>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div>
        <hr className="border-gray-600" />
        <p className="py-5 text-sm text-center text-gray-400">
          Copyright 2024 @LuxeLane.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;