import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-amber-400 pb-90">
      <div className="flex flex-col justify-center items-center">
        <div className="p-6">
          <img
            src="https://images.unsplash.com/photo-1482874478989-aaf30c03fe37?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Portfolio Image"
          />
        </div>

        <div className="text-3xl px-6 mb-10 mt-6">
          Have Any Projects in Mind? Don't Hesitate to Contact US
        </div>
        <div className="text-lg px-6 mb-2">
          Are you ready to make something awesome? Let's get on a call.
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-2">
          <button className=" py-6 px-2 mt-6 w-full border rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md">
            Schedule a Call
          </button>
          <button className=" py-6 mt-6 w-full border-0 rounded-full px-2 h-10 flex items-center justify-center bg-white text-black text-md">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <div className="text-4xl mt-16  font-semibold mb-8">Our Portfolio</div>

        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[600px]">
          <button className="primary-btn text-center text-gray-700 max-w-1/2">
            All
          </button>

          {/* First Button Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="primary-btn">Forms</button>
            <button className="primary-btn">Forms</button>
          </div>

          {/* Second Button Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="primary-btn">Forms</button>
            <button className="primary-btn">Forms</button>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1">
        <div className="bg-stone-50 m-4 py-2 border-0 rounded-2xl">
          <div className="flex items-center justify-between px-5 pt-6 pb-3">
            <div>Fitness Funnel</div>
            <div>
              <img src="vite.svg" alt="" className="h-10" />
            </div>
          </div>
          <div>
            <img
              className="p-4 h-120 object-cover border-0 rounded-3xl"
              src="https://images.unsplash.com/photo-1696506121011-a2b464ea2922?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="bg-stone-50 m-4 py-2 border-0 rounded-2xl">
          <div className="flex items-center justify-between px-5 pt-6 pb-3">
            <div>Fitness Funnel</div>
            <div>
              <img src="vite.svg" alt="" className="h-10" />
            </div>
          </div>
          <div>
            <img
              className="p-4 h-120 object-cover border-0 rounded-3xl"
              src="https://images.unsplash.com/photo-1696506121011-a2b464ea2922?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="bg-stone-50 m-4 py-2 border-0 rounded-2xl">
          <div className="flex items-center justify-between px-5 pt-6 pb-3">
            <div>Fitness Funnel</div>
            <div>
              <img src="vite.svg" alt="" className="h-10" />
            </div>
          </div>
          <div>
            <img
              className="p-4 h-120 object-cover border-0 rounded-3xl"
              src="https://images.unsplash.com/photo-1696506121011-a2b464ea2922?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="bg-stone-50 m-4 py-2 border-0 rounded-2xl">
          <div className="flex items-center justify-between px-5 pt-6 pb-3">
            <div>Fitness Funnel</div>
            <div>
              <img src="vite.svg" alt="" className="h-10" />
            </div>
          </div>
          <div>
            <img
              className="p-4 h-120 object-cover border-0 rounded-3xl"
              src="https://images.unsplash.com/photo-1696506121011-a2b464ea2922?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
        <div className="bg-stone-50 m-4 py-2 border-0 rounded-2xl">
          <div className="flex items-center justify-between px-5 pt-6 pb-3">
            <div>Fitness Funnel</div>
            <div>
              <img src="vite.svg" alt="" className="h-10" />
            </div>
          </div>
          <div>
            <img
              className="p-4 h-120 object-cover border-0 rounded-3xl"
              src="https://images.unsplash.com/photo-1696506121011-a2b464ea2922?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2Vic2l0ZSUyMHRlbXBsYXRlfGVufDB8fDB8fHww"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* AfterProject Text */}
      <div className="flex flex-col items-center mt-20">
        <div className="text-4xl text-center px-4 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
        </div>
        <div className="text-lg text-center mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          distinctio sint quia omnis commodi assumenda eveniet quasi
        </div>
        <div>
          <button className="primary-btn">Talk to sales</button>
        </div>
      </div>

      {/* AfterProject Grid */}

      <div className="grid grid-cols-1 mt-20 gap-6">
        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl">
          <div>
            <img src="vite.svg" alt="" className="h-20" />
          </div>
          <div className="text-2xl font-medium">Awarded</div>
          <div className="text-center px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            et distinctio omnis illum quo aliquam distinctio omnis illum quo
            aliquam
          </div>
        </div>

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl">
          <div>
            <img src="vite.svg" alt="" className="h-20" />
          </div>
          <div className="text-2xl font-medium">Awarded</div>
          <div className="text-center px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            et distinctio omnis illum quo aliquam distinctio omnis illum quo
            aliquam
          </div>
        </div>

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl">
          <div>
            <img src="vite.svg" alt="" className="h-20" />
          </div>
          <div className="text-2xl font-medium">Awarded</div>
          <div className="text-center px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            et distinctio omnis illum quo aliquam distinctio omnis illum quo
            aliquam
          </div>
        </div>

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl">
          <div>
            <img src="vite.svg" alt="" className="h-20" />
          </div>
          <div className="text-2xl font-medium">Awarded</div>
          <div className="text-center px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            et distinctio omnis illum quo aliquam distinctio omnis illum quo
            aliquam
          </div>
        </div>

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl">
          <div>
            <img src="vite.svg" alt="" className="h-20" />
          </div>
          <div className="text-2xl font-medium">Awarded</div>
          <div className="text-center px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            et distinctio omnis illum quo aliquam distinctio omnis illum quo
            aliquam
          </div>
        </div>
        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl">
          <div>
            <img src="vite.svg" alt="" className="h-20" />
          </div>
          <div className="text-2xl font-medium">Awarded</div>
          <div className="text-center px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            et distinctio omnis illum quo aliquam distinctio omnis illum quo
            aliquam
          </div>
        </div>
        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl">
          <div>
            <img src="vite.svg" alt="" className="h-20" />
          </div>
          <div className="text-2xl font-medium">Awarded</div>
          <div className="text-center px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            et distinctio omnis illum quo aliquam distinctio omnis illum quo
            aliquam
          </div>
        </div>
      </div>

      {/* AfterProject Grid After */}
    </div>
  );
};

export default Portfolio;
