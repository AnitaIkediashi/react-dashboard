import React from "react";
import bell from '../images/bell.svg'
import Avatar from '../images/Img.png'

const Header = () => {
  return (
    <header className="h-fit w-full flex items-center lg:px-20 px-8 py-7">
      <nav className="w-full h-full flex items-center justify-between">
        <h1 className="text-color-black-100 text-lg font-extrabold pl-11 lg:pl-0">
          Dashboard
        </h1>
        <div className="flex items-center gap-2">
          {/* search bar */}
          <div className=" w-[307px] h-[40px] rounded-lg border relative hidden md:flex">
            <i className="absolute left-0 top-[7px] ml-[13px] ri-search-line  mr-[11px]"></i>
            <input
              type="text"
              placeholder="Type to search..."
              className=" w-full h-full pl-[44px] placeholder-color-black-50 placeholder:text-xs text-color-black-100 text-sm"
            />
          </div>

          <div className="flex items-center gap-4">
            {/* notification */}
            <div className="w-10 h-10 grid place-items-center border rounded-lg">
              <img src={bell} alt="notification icon" />
            </div>

            {/* user image */}
            <img src={Avatar} alt="user " />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
