import React, { useState } from "react";
import { links, lists } from "../data";
import logo from '../images/logo.png'

const SideBar = () => {

  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <>
      {/* desktop */}
      <aside className="bg-color-blue-50 hidden lg:block hide-scroll relative">
        {/* logo */}
        <div className="px-8 pt-5 mb-[42px]">
          <img src={logo} alt="company logo" />
        </div>
        {/* links */}
        <h3 className="font-light text-color-black-50 pl-8 mb-[11px]">
          Navigation
        </h3>
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`flex items-center gap-[14px] px-8 py-3 text-color-black-50 font-bold cursor-pointer hover:text-color-black-100 hover:border-r-2 hover:border-r-color-blue-100 duration-300 ease-in ${
                  selected === index
                    ? "text-color-black-100 border-r-2 border-r-color-blue-100"
                    : ""
                }`}
                onClick={() => setSelected(index)}
              >
                <i className={link.icon}></i>
                <span className="hidden xl:flex">{link.title}</span>
              </li>
            );
          })}
        </ul>
        {/* balance */}
        <h3 className="mt-[42px] mb-[11px] font-light text-color-black-50 pl-8 hidden xl:block">
          Balances
        </h3>
        <ul className="xl:flex flex-col gap-2 hidden ">
          {lists.map((list, idx) => {
            return (
              <li
                key={idx}
                className="flex items-center gap-[14px] px-8 py-3 text-color-black-50 font-bold cursor-pointer"
              >
                <img src={list.flag} alt="" />
                <span>{list.number}</span>
              </li>
            );
          })}
        </ul>
        <div className="px-8 py-3 flex items-center gap-[14px] text-color-black-50 font-bold">
          <i className="ri-add-circle-line"></i>
          <span className="hidden xl:flex">Open a balance</span>
        </div>

        {/* settings */}
        <div className="absolute xl:top-[951px] lg:top-[680px] right-0 left-0 pb-5 flex gap-[14px] items-center px-8 text-color-black-50 font-bold">
          <i className="ri-settings-3-line"></i>
          <span className="hidden xl:flex">Profile Settings</span>
        </div>
      </aside>

      {/* mobile */}

      {/* hamburger menu */}
      <div
        className="fixed top-6 md:top-7 left-6 lg:hidden w-10 h-10 rounded-full bg-white shadow-md grid place-items-center z-10 cursor-pointer text-color-black-100"
        onClick={() => setActive(!active)}
      >
        <i className="ri-menu-fill"></i>
      </div>

      {/* sidebar */}
      <aside className={`hide-scroll ${active ? "sidebar active" : "sidebar"}`}>
        {/* logo */}
        <div className="px-8 pt-5 mb-[42px]" onClick={() => setActive(false)}>
          <img src={logo} alt="company logo" />
        </div>

        {/* links */}
        <h3 className="font-light text-color-black-50 pl-8 mb-[11px]">
          Navigation
        </h3>
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`flex items-center gap-[14px] px-8 py-3 text-color-black-50 font-bold cursor-pointer hover:text-color-black-100 hover:border-r-2 hover:border-r-color-blue-100 duration-300 ease-in ${
                  selected === index
                    ? "text-color-black-100 border-r-2 border-r-color-blue-100"
                    : ""
                }`}
                onClick={() => {
                  setSelected(index);
                  setActive(!active);
                }}
              >
                <i className={link.icon}></i>
                <span>{link.title}</span>
              </li>
            );
          })}
        </ul>

        <div className="px-8 py-3 my-2 flex items-center gap-[14px] text-color-black-50 font-bold">
          <i className="ri-add-circle-line"></i>
          <span>Open a balance</span>
        </div>

        {/* settings */}
        <div className="px-8 py-3 mb-4  flex gap-[14px] items-center text-color-black-50 font-bold">
          <i className="ri-settings-3-line"></i>
          <span >Profile Settings</span>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

