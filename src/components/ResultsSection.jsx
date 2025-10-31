import React from "react";
import {
  HiOutlineEye,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
} from "react-icons/hi";

const StatCard = ({ icon, percentage, description }) => (
  <div className="bg-linear-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 md:p-8 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform transition-shadow duration-300 ease-in-out backdrop-blur-sm bg-opacity-70">
    <div className="flex justify-center mb-4 text-cyan-400 text-5xl">
      {icon}
    </div>
    <h3 className="text-4xl md:text-5xl font-extrabold text-cyan-400 text-center">
      {percentage}
    </h3>
    <p className="mt-4 text-slate-300 text-lg text-center">{description}</p>
  </div>
);

const ResultsSection = () => {
  const stats = [
    {
      icon: <HiOutlineEye />,
      percentage: "99%",
      description: "Improved Online Brand Visibility",
    },
    {
      icon: <HiOutlineUserGroup />,
      percentage: "99%",
      description: "Reported Better Audience Engagement",
    },
    {
      icon: <HiOutlineTrendingUp />,
      percentage: "99%",
      description: "Experienced Faster Business Growth",
    },
  ];

  return (
    <section className="bg-gray-900 text-white w-full shadow-gray-800/50 overflow-hidden px-4 py-12 md:py-16">
      {/* Header with title and subtitle */}
      <div className="relative z-10 text-center px-4 mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          See How Our Clients Experienced{" "}
          <span className="text-cyan-400">Real Business Growth</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto">
          Proven Results You Can Trust
        </p>
      </div>
      {/* Stats cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            percentage={stat.percentage}
            description={stat.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
