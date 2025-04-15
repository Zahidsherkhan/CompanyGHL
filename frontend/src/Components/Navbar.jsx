import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex bg-cyan-700 h-22 z-50 fixed justify-between items-center shadow-md  px-12">
        <div>home</div>

        <div className="flex gap-2">
          <div className="py-0 px-7 border rounded-full h-10 flex items-center justify-center">
            home
          </div>
          <div className="py-0 px-7 border rounded-full h-10 flex items-center justify-center">
            h
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
