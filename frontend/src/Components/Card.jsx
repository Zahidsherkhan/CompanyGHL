import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
];

const Card = () => {
  return (
    <div className="bg-gray-200 px-4 pt-34">
      {/* Shared container with border/rounded */}
      <div className="overflow-hidden rounded-2xl border border-gray-300 bg-gray-100 shadow-xl">
        {/* Static Card Section */}
        <div className="h-120 flex justify-center flex-col items-center px-8 py-10">
          <div className="text-7xl mb-8">Finally</div>
          <div className="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            nobis itaque quia quisquam optio explicabo maxime vel exercitationem
            perspiciatis facilis eaque voluptate neque tenetur vero minima, sint
            iusto dolorem consequuntur?
          </div>
          <div className="py-0 mt-6 px-7 border rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md">
            <button>About Us</button>
          </div>
        </div>

        {/* Scrolling Images Section */}
        <div className="relative h-[900px] overflow-hidden">
          {/* White Top Blur */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

          {/* Animated images */}
          <motion.div
            className="flex flex-col gap-4"
            animate={{ y: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...images, ...images].map((src, index) => (
              <div key={index} className="h-80">
                <img src={src} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
