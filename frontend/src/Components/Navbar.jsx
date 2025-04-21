import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActive = (index) => {
    setActiveIndex(index);
  };

  const menuItems = [
    "HOME",
    "ABOUT",
    "SERVICES",
    "PORTFOLIO",
    "CONTACT",
    "TEAM",
  ];

  return (
    <>
      <div className="w-full flex bg-blend-darken backdrop-blur-md h-22 z-50 items-center shadow-md px-2 sticky top-0 gap-10 justify-around">
        {/* Logo */}
        <div className="w-1/4 lg:flex lg:justify-end lg:pr-12 lg:w-[17%] lg:pl-5 ">
          <ScrollLink
            to="HOME"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <img
              className="w-13.5 h-13.5 rounded-4xl object-contain ml-5"
              src={logo}
              alt="Logo"
            />
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <nav className="max-lg:hidden w-[55%] flex-wrap">
          <ul className="flex gap-4 flex-wrap">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSetActive(index)}
                className={`menu-btns ${
                  activeIndex === index
                    ? "bg-black border-1 border-black text-amber-50"
                    : ""
                }`}
              >
                <ScrollLink
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
                </ScrollLink>
              </button>
            ))}
          </ul>
        </nav>

        {/* Right Buttons */}
        <div className="flex gap-4 mr-5 sm:max-w-3/4 pl-3.5">
          <RouterLink to="/getstarted">
            <button className="py-6 px-7 border rounded-full h-10 flex items-center bg-black text-white justify-center text-[19px] cursor-pointer">
              Get Started
            </button>
          </RouterLink>
          <div
            className="flex items-center justify-center pl-2 pr-0 ml-0 mr-0 lg:hidden"
            onClick={handleMenuClick}
          >
            <AiOutlineMenu className="h-7 w-7 font-bold" />
          </div>
        </div>

        {/* Mobile Menu */}
        {!isMenuOpen ? null : (
          <div className="absolute top-3 w-[98%] h-screen bg-[#f3f4f6] z-50 px-4">
            <div className="flex items-center justify-between py-4">
              <img
                className="w-14.5 h-14.5 rounded-4xl object-contain ml-5"
                src={logo}
                alt="Logo"
              />
              <p
                className="font-extrabold mr-4 lg:hidden cursor-pointer"
                onClick={handleMenuClick}
              >
                CLOSE
              </p>
            </div>

            <div className="flex flex-col items-center mt-10">
              {menuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <hr className="w-[94%] border-t-1 border-gray-300" />
                  <ScrollLink
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    onClick={handleMenuClick}
                  >
                    <p className="py-6 text-2xl font-semibold">
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).toLowerCase()}
                    </p>
                  </ScrollLink>
                </React.Fragment>
              ))}
            </div>

            <div className="text-black space-y-6 pl-7 mt-10">
              <div>
                <h4 className="text-xl text-gray-500 mb-1">Address</h4>
                <p className="font-semibold leading-snug text-2xl">
                  541 Melville Geek,
                  <br />
                  Palo Alto, CA 94301
                </p>
              </div>

              <div>
                <h4 className="text-sm text-gray-500 mb-1">Social Media</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm text-gray-500 mb-1">Contact Us</h4>
                <p>info@NaxonSolution</p>
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
