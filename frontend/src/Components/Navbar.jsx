import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex bg-blend-darken backdrop-blur-md h-22 z-50 fixed justify-between items-center shadow-md  px-12">
        <div>
          <img src="vite.svg" alt="" />
        </div>

        <div className="flex gap-2">
          <div className="py-0 px-7 border rounded-full h-10 flex items-center justify-center">
            Get Started
          </div>
          <div className="py-0 px-7 border rounded-full h-10 flex items-center justify-center">
            M
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
