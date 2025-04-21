import React from "react";
import img1 from "../assets/About/1.svg";
import img2 from "../assets/About/2.svg";
import img3 from "../assets/About/3.svg";
import img4 from "../assets/About/4.svg";
import { BsShieldPlus } from "react-icons/bs";
import { SiGoogleanalytics } from "react-icons/si";
import { DiYii } from "react-icons/di";
import { TfiLayoutAccordionList } from "react-icons/tfi";
const About = () => {
  const cards = [
    {
      icon: <TfiLayoutAccordionList className="w-8 h-8" />,
      title: "Management",
      description:
<<<<<<< HEAD
        "Our dedicated management team combines experience and vision to guide the company towards success.",
    },
    {
      icon: "/vite.svg",
      title: "Digital",
=======
        "Our dedicated management team combines experience and vision to guide the company towards success. We prioritize effective communication, strategic decision-making, and fostering a positive work environment. ",
    },
    {
      icon: <DiYii className="w-8 h-8" />,
      title: "Productivity",
>>>>>>> for-Contact-21-April
      description:
        "Enhance team efficiency with powerful tools and real-time insights that streamline workflows and boost output across departments.",
    },
    {
      icon: <SiGoogleanalytics className="w-8 h-8" />,
      title: "Analytics",
      description:
        "Gain deep insights into your operations with detailed reports and visual dashboards designed for smarter decision-making.",
    },
    {
      icon: <BsShieldPlus className="w-8 h-8" />,
      title: "Security",
      description:
        "Protect your data with industry-leading security protocols and continuous monitoring to ensure peace of mind at all times.",
    },
  ];

  return (
<<<<<<< HEAD
    <div className="bg-gray-200">
      <div className="h-90 bg-gray-200 flex items-center flex-col mb-24  px-6  gap-6 pt-20">
        <div className="text-4xl text-center font-medium">
=======
    <div id="About" className="bg-gray-200 lg:mx-15">
      <div className="h-90 bg-gray-200 flex items-center flex-col mb-24  px-6 gap-6 pt-20">
        <div className="text-4xl text-center font-semibold capitalize">
>>>>>>> for-Contact-21-April
          We Take Your Business Success Seriously.
        </div>
        <div className="text-lg text-center">
          Building Trust Through Transparency, Collaboration and Innovation
        </div>
        <div className="py-6 mt-6 w-34 border rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md transition-all duration-300 hover:bg-white hover:text-black hover:border-black cursor-pointer">
          <button className="cursor-pointer">Contact Us</button>
        </div>
      </div>

<<<<<<< HEAD
      <div className="grid grid-cols-1 gap-6 px-6 pt-6 sm:grid-cols-2 xl:px-32">
        {cards.map((card) => (
          <div className="border rounded-2xl bg-emerald-50 h-80 flex flex-col justify-around items-start px-8 pt-6 transition:all duration-350 hover:scale-105">
            <div>
              <img src={card.img} alt="" />
            </div>
            <div className="text-2xl font-bold">{card.title}</div>
            <div className="text-lg">{card.description}</div>
=======
      <div className="grid grid-cols-1 gap-6 px-8 pt-6 sm:grid-cols-2 lg:px-3">
        {cards.map((card, index) => (
          <div className="border rounded-2xl bg-black text-teal-50 flex flex-col justify-around items-start px-8 py-8 ">
            <div className="">{card.icon}</div>
            <p className="text-2xl font-semibold bg pt-6">{card.title}</p>
            <p className="text-lg pt-6">{card.description}</p>
>>>>>>> for-Contact-21-April
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
