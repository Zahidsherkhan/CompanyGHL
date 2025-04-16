import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="bg-teal-500 pb-30">
      <div className="flex flex-col justify-center items-center ">
        <div className="p-6 pt-20">
          <img
            className="border-0 h-110 rounded-2xl"
            src="https://images.unsplash.com/photo-1482874478989-aaf30c03fe37?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Portfolio Image"
          />
        </div>

        <div className="text-3xl  px-6 mb-10 mt-6 md:text-5xl md:px-8 md:text-center md:mt-24">
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

        <div className="flex flex-col justify-center items-center gap-6 w-full max-w-[600px] md:flex-row md:pt-8">
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

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div
            key={index}
            className="bg-stone-50 m-4 py-2 border-0 rounded-2xl h-[600px] overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 pt-6 pb-3">
              <div>Fitness Funnel</div>
              <div>
                <img src="vite.svg" alt="" className="h-10" />
              </div>
            </div>
            <div className="overflow-hidden h-[500px] rounded-3xl p-4 group">
              <motion.div
                className="w-full"
                initial={{ y: 0 }}
                whileHover={{ y: "-100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img
                  className="h-[500px] w-full object-cover rounded-3xl"
                  src="https://images.unsplash.com/photo-1696506121011-a2b464ea2922?w=800&auto=format&fit=crop&q=60"
                  alt="Primary"
                />
                <img
                  className="h-[500px] w-full object-cover rounded-3xl"
                  src={
                    index === 0
                      ? "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?w=1000&auto=format&fit=crop&q=60"
                      : index === 1
                      ? "https://images.unsplash.com/photo-1674027326254-88c960d8e561?w=1000&auto=format&fit=crop&q=60"
                      : index === 2
                      ? "https://images.unsplash.com/photo-1674027326254-88c960d8e561?w=1000&auto=format&fit=crop&q=60"
                      : index === 3
                      ? "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?w=1000&auto=format&fit=crop&q=60"
                      : "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=1000&auto=format&fit=crop&q=60"
                  }
                  alt="Secondary"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* AfterProject Text */}
      <div className="flex flex-col items-center mt-20 md:px-18">
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

      <div className="grid grid-cols-1 mt-20 gap-6 md:grid-cols-2 md:mx-6 xl:grid-cols-3">
        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl md:mx-0 ">
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

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl md:mx-0">
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

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl md:mx-0">
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

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl md:mx-0">
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

        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl md:mx-0">
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
        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl md:mx-0">
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
        <div className="flex flex-col items-center bg-stone-50 gap-4 py-8 mx-8 rounded-2xl md:mx-0">
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
      <div className="flex mt-35 gap-4 mx-4 border-0 rounded-2xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              className="border-0 h-110 object-cover  rounded-2xl"
              src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29mdHdhcmUlMjBlbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-start p-10 gap-5 bg-teal-100 border-0 rounded-2xl md:px-18">
            <div>
              <img src="vite.svg" className="h-16" alt="" />
            </div>
            <div className="text-4xl">
              Schedule a call with us to see how we can help you
            </div>
            <div>
              Exploring Solution Together: Book a Consultaion for Personalized
              Assistance
            </div>

            <hr className="w-full border-t-2 border-gray-400 my-2" />

            <div className="flex ">
              <div>
                <img src="vite.svg" alt="" />
              </div>
              <div>info@naxon.com</div>
            </div>
            <div className="flex">
              <div>
                <img src="vite.svg" alt="" />
              </div>
              <div>info@naxon.com</div>
            </div>
            <div className="flex">
              <div>
                <img src="vite.svg" alt="" />
              </div>
              <div>info@naxon.com</div>
            </div>
          </div>
        </div>
      </div>
      {/* Rating Section */}
      <div className="flex flex-col gap-12 items-center mt-40">
        <div className="flex items-center bg-black border-0 rounded-4xl gap-3 px-4 py-3">
          <div>
            <img src="vite.svg" alt="" />
          </div>
          <div className="text-white">Rated 5/5 By Our Clients</div>
        </div>

        <div className="text-5xl text-center px-6">
          Words of praise from others about our presence.
        </div>

        <div className="grid md:grid-cols-3">
          <div className="bg-stone-200 border-0 rounded-sm m-3">
            <div className="flex border-0 rounded-2xl justify-around flex-col gap-4 bg-stone-50 p-4 m-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div>5</div>
                  <div>stars</div>
                </div>
                <div>Dec 25,2024</div>
              </div>
              <div className=" pt-2 pb-12">
                Their Websites are smooth and Aesthetic and their communicaton
                is great
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 ">
                  <div>
                    <img className="h-6" src="vite.svg" alt="" />
                  </div>
                  <div>Naveed Khan</div>
                </div>
                <div>
                  <img className="h-6" src="vite.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 pb-6">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>...</div>
              <div>&gt;</div>
            </div>
          </div>
          <div className="bg-stone-200 border-0 rounded-sm m-3">
            <div className="flex border-0 rounded-2xl justify-around flex-col gap-4 bg-stone-50 p-4 m-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div>5</div>
                  <div>stars</div>
                </div>
                <div>Dec 25,2024</div>
              </div>
              <div className=" pt-2 pb-12">
                Their Websites are smooth and Aesthetic and their communicaton
                is great
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 ">
                  <div>
                    <img className="h-6" src="vite.svg" alt="" />
                  </div>
                  <div>Naveed Khan</div>
                </div>
                <div>
                  <img className="h-6" src="vite.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 pb-6">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>...</div>
              <div>&gt;</div>
            </div>
          </div>
          <div className="bg-stone-200 border-0 rounded-sm m-3">
            <div className="flex border-0 rounded-2xl justify-around flex-col gap-4 bg-stone-50 p-4 m-4">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div>5</div>
                  <div>stars</div>
                </div>
                <div>Dec 25,2024</div>
              </div>
              <div className=" pt-2 pb-12">
                Their Websites are smooth and Aesthetic and their communicaton
                is great
              </div>
              <div className="flex justify-between">
                <div className="flex gap-2 ">
                  <div>
                    <img className="h-6" src="vite.svg" alt="" />
                  </div>
                  <div>Naveed Khan</div>
                </div>
                <div>
                  <img className="h-6" src="vite.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 pb-6">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>...</div>
              <div>&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
