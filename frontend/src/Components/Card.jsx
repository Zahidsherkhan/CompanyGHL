import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
];
const static_images = [
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  "https://image.freepik.com/free-photo/businessman-businesswoman_23-2147580178.jpg?1",
];
const Card = () => {
  return (
    <div className="bg-gray-200 px-4 pt-34 sm:max-lg:grid-rows-2 ">
      {/* Shared container with border/rounded */}

      <div className="overflow-hidden rounded-3xl border border-gray-300 bg-gray-100 shadow-xl h-[150vh] lg:grid lg:grid-cols-2 lg:bg-amber-300 md:mx-7">
        {/* Static Card Section */}
        <div className="h-120 flex justify-center flex-col items-center px-8 py-10 lg:block lg:pl-12 bg-amber-300">
          <div className="text-7xl mb-8">Finally</div>
          <div className="max-lg:text-center lg:text-2xl">
            You've discovered Naxon Solution, a comprehensive software company
            dedicated to providing expert tech support for CRMs, crafting
            brands, developing websites, and engineering digital solutions for
            forward-thinking tech enterprises.
          </div>
          <div>
            <button className="py-0 mt-6 px-7 border rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md lg:block lg:w-2/5 lg:py-6 lg:px-4 lg:text-xl">
              About Us
            </button>
          </div>
        </div>

        {/* The Div of the images  */}
        <div className="relative sm:grid grid-cols-2 h-2/5 gap-4">
          <div className="absolute top-0 w-full h-24 shadow-[0_11118px_2000px_1000px_rgba(255,255,255,0.1)">
            {" "}
            blur
          </div>

          {/* White Top Blur */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none " />

          {/* Scrolling Images Section */}
          <div className="relative h-[900px] overflow-hidden ">
            {/* Animated images */}
            <motion.div
              className="flex flex-col gap-4 "
              animate={{ y: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...images, ...images].map((src, index) => (
                <div key={index} className="h-80">
                  <img
                    src={src}
                    className="w-full h-full object-cover rounded-3xl "
                    alt=""
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Static images section that appears at the breakpoint of sm */}
          <div className="hidden sm:flex flex-col gap-4">
            {static_images.map((src, index) => (
              <div key={index} className="h-80">
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
