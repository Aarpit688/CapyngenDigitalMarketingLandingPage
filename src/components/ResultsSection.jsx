import React from "react";
import {
  HiOutlineEye,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
} from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const StatCard = ({ icon, percentage, description, customDelay }) => (
  <motion.div
    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 p-6 md:p-8 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform transition-shadow duration-300 ease-in-out backdrop-blur-sm bg-opacity-70 cursor-default"
    initial={{ opacity: 0, y: 25 }}
    whileHover={{ scale: 1.07, boxShadow: "0 10px 25px rgba(14,116,144,0.5)" }}
    animate="visible"
    variants={{
      hidden: { opacity: 0, y: 25 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: customDelay, duration: 0.6 },
      },
    }}
  >
    <div className="flex justify-center mb-4 text-cyan-400 text-6xl md:text-7xl">
      {icon}
    </div>
    <h3 className="text-5xl md:text-6xl font-extrabold text-cyan-400 text-center drop-shadow-md">
      {percentage}
    </h3>
    <p className="mt-4 text-slate-300 text-lg md:text-xl text-center leading-relaxed max-w-xs mx-auto">
      {description}
    </p>
  </motion.div>
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

  // Intersection Observer and animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="bg-gray-900 text-white w-full shadow-gray-800/50 overflow-hidden px-4 py-12 md:py-16"
      aria-label="Results showing how clients experienced real business growth"
    >
      {/* Header with title and subtitle */}
      <motion.div
        className="relative z-10 text-center px-4 mb-8 md:mb-12 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 25 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
          See How Our Clients Experienced{" "}
          <span className="text-cyan-400">Real Business Growth</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Proven Results You Can Trust
        </p>
      </motion.div>

      {/* Stats cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            percentage={stat.percentage}
            description={stat.description}
            customDelay={index * 0.3}
            animate={controls}
          />
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
