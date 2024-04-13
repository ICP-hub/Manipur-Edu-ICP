import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center">
      <div className="w-12 h-12 border-b-2 border-black rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
