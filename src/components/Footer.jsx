import React from "react";
import { footerLinks } from "../data";
import globe from '../images/globe.svg'

const Footer = () => {
  return (
    <footer className=" lg:px-20 px-8 w-full flex items-center mt-11 md:h-[86px] h-fit py-4 lg:py-0  border-t">
      <div className="w-full h-full flex md:items-center md:justify-between flex-col md:flex-row flex-wrap gap-1 overflow-y-hidden">
        {/* left */}
        <ul className="flex md:items-center gap-5 flex-col md:flex-row">
          {footerLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="px-1 text-color-black-100 font-bold text-xs"
              >
                {link.footerLink}
              </li>
            );
          })}
        </ul>

        {/* right */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <h3 className="text-color-black-100 font-bold text-sm">English</h3>
            <img src={globe} alt="" />
          </div>
          <button className="border w-[46px] h-[46px] rounded-lg">
            <i className="ri-moon-line"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
