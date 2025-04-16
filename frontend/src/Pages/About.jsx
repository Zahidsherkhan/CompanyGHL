import React from "react";

const About = () => {
  const cards = [
    {
      icon: "/vite.svg",
      title: "Management",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi laborum exercitationem possimus dolorem laudantium doloribus officia dignissimos voluptatum hic? Dignissimos, vitae nesciunt laboriosam consect.",
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

      <div className="grid grid-cols-1 gap-6 px-6 pt-6 sm:grid-cols-2">
        {cards.map((card, index) => (
          <div className="border rounded-2xl bg-emerald-50 h-80 flex flex-col justify-around items-start px-8 pt-6 ">
            <div>
              <img src={card.img} alt="" />
            </div>
            <div className="text-2xl font-bold">{card.title}</div>
            <div className="text-lg">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
