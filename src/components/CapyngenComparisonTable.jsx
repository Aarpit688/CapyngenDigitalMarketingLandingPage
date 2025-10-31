import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const comparisonData = [
  {
    feature: "1 Month Free Services",
    capyngen: "✅",
    others: "❌",
  },
  {
    feature: "IT Expert Team",
    capyngen: "✅",
    others: "❌",
  },
  {
    feature: "Digital Marketing With IT Solution",
    capyngen: "✅",
    others: "❌",
  },
  { feature: "Advance Marketing Features", capyngen: "✅", others: "❌" },
  {
    feature: "Real Time Support",
    capyngen: "✅",
    others: "❌",
  },
  { feature: "Weekly Performance Report", capyngen: "✅", others: "❌" },
  {
    feature: "Marketing Transparency",
    capyngen: "✅",
    others: "❌",
  },
  {
    feature: "Unlimited Minor Revisions",
    capyngen: "✅",
    others: "❌",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const CapyngenComparisonTableDark = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="px-4 sm:px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl border border-gray-700 py-20 max-w-full"
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      aria-label="Comparison table showing why Capyngen is better than others"
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent select-none"
        variants={fadeInVariants}
        transition={{ duration: 0.8 }}
      >
        Why Capyngen Is Better Than Others
      </motion.h2>
      <div className="overflow-x-auto rounded-lg shadow-lg max-w-full">
        <motion.table
          className="min-w-[600px] w-full table-auto border-collapse rounded-lg overflow-hidden"
          initial="hidden"
          animate={controls}
          variants={listVariants}
        >
          <thead className="bg-gray-800/90 border-b border-gray-700">
            <tr>
              <th className="py-3 px-4 sm:py-4 sm:px-6 text-left text-gray-300 text-lg sm:text-xl font-semibold tracking-wide select-none">
                Features
              </th>
              <th className="py-3 px-4 sm:py-4 sm:px-6 text-center text-green-400 text-lg sm:text-xl font-bold select-none">
                Capyngen
              </th>
              <th className="py-3 px-4 sm:py-4 sm:px-6 text-center text-red-500 text-lg sm:text-xl font-bold select-none">
                Others
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map(({ feature, capyngen, others }, index) => (
              <motion.tr
                key={index}
                className={`transition-colors duration-300 ${
                  index % 2 === 0 ? "bg-gray-900/70" : "bg-gray-800/60"
                } hover:bg-indigo-700/50 cursor-pointer`}
                variants={itemVariants}
                tabIndex={0}
                role="row"
                aria-rowindex={index + 2}
              >
                <td className="py-3 px-4 sm:py-4 sm:px-6 text-gray-200 font-medium text-base sm:text-xl whitespace-normal">
                  {feature}
                </td>
                <td className="py-3 px-4 sm:py-4 sm:px-6 text-green-400 text-center text-xl sm:text-2xl">
                  {capyngen}
                </td>
                <td className="py-3 px-4 sm:py-4 sm:px-6 text-red-500 text-center text-xl sm:text-2xl">
                  {others}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
      <motion.p
        className="mt-4 sm:mt-6 text-center text-blue-500 italic text-xs sm:text-xl select-none"
        variants={fadeInVariants}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Experience transparency, expertise, and dedicated support with{" "}
        <span className="font-bold">Capyngen</span>.
      </motion.p>
    </motion.div>
  );
};

export default CapyngenComparisonTableDark;
