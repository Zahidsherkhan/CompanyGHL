import React from "react";

const About = () => {
  const cards = [
    {
      icon: "/vite.svg",
      title: "Management",
      description:
        "Our dedicated management team combines experience and vision to guide the company towards success. We prioritize effective communication, strategic decision-making, and fostering a positive work environment. ",
    },
    {
      icon: "/vite.svg",
      title: "Productivity",
      description:
        "Enhance team efficiency with powerful tools and real-time insights that streamline workflows and boost output across departments.",
    },
    {
      icon: "/vite.svg",
      title: "Analytics",
      description:
        "Gain deep insights into your operations with detailed reports and visual dashboards designed for smarter decision-making.",
    },
    {
      icon: "/vite.svg",
      title: "Security",
      description:
        "Protect your data with industry-leading security protocols and continuous monitoring to ensure peace of mind at all times.",
    },
  ];

  return (
    <div className="bg-gray-200">
      <div className="h-90 bg-gray-200 flex items-center flex-col mb-24  px-6 gap-6 pt-20">
        <div className="text-4xl text-center font-semibold capitalize">
          We Take Your Business Success Seriously.
        </div>
        <div className="text-lg text-center">
          Building Trust Through Transparency, Collaboration and Innovation
        </div>
        <div className="py-6 mt-6 w-34 border rounded-full h-10 flex items-center justify-center bg-black text-gray-50 text-md">
          <button>Contact Us</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 pt-6 sm:grid-cols-2 bg">
        {cards.map((card, index) => (
          <div className="border rounded-2xl bg-teal-500 h-80 flex flex-col justify-around items-start px-8 pt-6 ">
            <div className="bg-amber-300">
              <img src={card.img} alt="" />
            </div>
            <p className="text-2xl font-bold bg">{card.title}</p>
            <p className="text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
