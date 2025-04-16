import React from "react";

const About = () => {
  return (
    <div className="bg-gray-200">
      <div className="h-90 bg-gray-200 flex items-center flex-col mb-24  px-6 gap-6 pt-20 ">
        <div className="text-4xl text-center font-medium">
          We Take Your Business Success Seriously.
        </div>
        <div className="text-lg text-center">
          Building Trust Through Transparency, Collaboration and Innovation
        </div>
        <div className="py-6 mt-6 w-34 border rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md">
          <button>Contact Us</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pt-22 xl:px-60">
        <div className="border rounded-2xl bg-emerald-50 flex flex-col justify-around items-start px-8 gap-6 py-6 ">
          <div>
            <img src="/vite.svg" alt="" />
          </div>
          <div className="text-2xl font-bold">Management</div>
          <div className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            laborum exercitationem possimus Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Excepturi laborum exercitationem
            possimus
          </div>
        </div>
        <div className="border rounded-2xl bg-emerald-50  flex flex-col justify-around items-start px-8 py-6 ">
          <div>
            <img src="/vite.svg" alt="" />
          </div>
          <div className="text-2xl font-bold">Management</div>
          <div className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            laborum exercitationem possimus Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Excepturi laborum exercitationem
            possimus
          </div>
        </div>
        <div className="border rounded-2xl bg-emerald-50 flex flex-col justify-around items-start px-8 gap-6 py-6  ">
          <div>
            <img src="/vite.svg" alt="" />
          </div>
          <div className="text-2xl font-bold">Management</div>
          <div className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            laborum exercitationem possimus Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Excepturi laborum exercitationem
            possimus
          </div>
        </div>
        <div className="border rounded-2xl bg-emerald-50 flex flex-col justify-around items-start px-8 py-6 ">
          <div>
            <img src="/vite.svg" alt="" />
          </div>
          <div className="text-2xl font-bold">Management</div>
          <div className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            laborum exercitationem possimus Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Excepturi laborum exercitationem
            possimus
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
