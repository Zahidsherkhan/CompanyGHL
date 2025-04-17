import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/Logo.jpeg";
const Navbar = () => {
  let [flag, setFlag] = useState(true);
  let handleMenuClick = () => {
    if (flag) setFlag(false);
    else setFlag(true);
  };
  const menuItems = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "PORTFOLIO",
    "CONTACT",
    "TEAM",
  ];
  const menuItemsLarge = [
    "Home",
    "About",
    "Services",
    "Portfolio",
    "Contact",
    "Team",
  ];

  return (
    <>
      <div className="w-full flex bg-blend-darken backdrop-blur-md h-22 z-50 fixed justify-between items-center shadow-md px-2 py-1 max-sm:relative ">
        <div className="w-1/4 lg:flex lg:justify-center lg:pr-12">
          <img
            className="w-14.5 h-14.5 rounded-4xl object-contain ml-5"
            src={logo}
            alt=""
          />
        </div>
        <nav className="max-lg:hidden w-2/4 flex-wrap ">
          <ul className="flex gap-4 flex-wrap">
            {menuItemsLarge.map((element, index) => (
              <li className="border px-5 py-1 rounded-2xl " key={index}>
                {element}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4 mr-5 sm:max-w-3/4 pl-3.5 ">
          <button className="py-6 px-7 border rounded-full h-10 flex items-center bg-black text-white justify-center text-[19px]">
            Get Started
          </button>
          <div
            className="flex items-center justify-center pl-2 pr-0 ml-0 mr-0 lg:hidden"
            onClick={handleMenuClick}
          >
            <AiOutlineMenu className="h-7 w-7 font-bold" />
          </div>
        </div>
        {flag ? (
          ""
        ) : (
          <div className="absolute top-3 w-[98%] h-screen bg-[#f3f4f6]">
            <div className="flex items-center justify-between">
              <img
                className="w-14.5 h-14.5 rounded-4xl object-contain ml-5"
                src={logo}
                alt=""
              />
              <p
                className="font-extrabold mr-4 lg:hidden"
                onClick={handleMenuClick}
              >
                CLOSE
              </p>
            </div>
            <div className="flex flex-col items-center mt-10">
              {menuItems.map((element, index) => (
                <>
                  <hr className="w-[94%] border-t-1 border-gray-300" />
                  <p className="py-6 text-2xl font-semibold">{element}</p>
                </>
              ))}
            </div>
            <div class="text-black space-y-6 pl-7">
              <div>
                <h4 class="text-xl text-gray-500 mb-1">Address</h4>
                <p class="font-semibold leading-snug text-2xl">
                  541 Melville Geek,
                  <br />
                  Palo Alto, CA 94301
                </p>
              </div>

              <div>
                <h4 class="text-sm text-gray-500 mb-1">Social Media</h4>
                <ul class="space-y-1">
                  <li>
                    <a href="#" class="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-sm text-gray-500 mb-1">Contact Us</h4>
                <p>info@Naxon Solution</p>
                <p>+00 333 112234</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
