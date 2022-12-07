import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Stats from "./Stats";
import UserBalance from "./UserBalance";

const MainBar = () => {
  return <div className="bg-white">
    <Header />
    <UserBalance />
    <Stats />
    <Footer />
  </div>;
};

export default MainBar;
