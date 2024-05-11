
import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 backdrop-blur-md">
      <div
        className="w-10 h-10 border-b-2 border-black rounded-full animate-spin"
        style={{ marginTop: "-5px", marginLeft: "-5px" }}
      ></div>
    </div>
  );
};

export default Loader;

