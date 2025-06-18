import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="w-32 mb-5" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde dicta
            alias eos debitis consequuntur aut ad obcaecati fugiat, ipsum beatae
            perferendis quaerat nihil? Eum doloribus, eveniet consequuntur
            quaerat quibusdam pariatur?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium  mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="font-medium text-xl mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+11-222-333-444</li>
            <li>contactforver@gmail.com</li>
          </ul>
        </div>
      </div>
        <div>
          <hr />
          <p className="py-5 text-sm text-center">
            CopyRight 2025@ forver.com- All Right Reserved
          </p>
        </div>
    </div>
  );
};

export default Footer;
