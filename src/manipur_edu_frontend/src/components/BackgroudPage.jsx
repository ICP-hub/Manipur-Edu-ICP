import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Background({ children }) {
  return (
    <div>
      <div className="overflow-hidden">
        <Navbar />
        <div className="m-4 mb-0 relative rounded-3xl bg-[#E5F1FF] ">
          <div className="absolute right-0 -top-1/4 transform translate-x-1/3 w-[80vw] h-[1000px] rounded-full bg-gradient-to-b from-[#cfe5ff] to-[#DCECFF00]"></div>
          {children}
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default Background;
