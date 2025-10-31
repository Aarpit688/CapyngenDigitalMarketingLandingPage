import React from "react";

const comparisonData = [
  {
    feature: "Free 1-Month Social Media Marketing",
    capyngen: "✅",
    others: "❌",
  },
  {
    feature: "Dedicated Marketing Expert for Each Client",
    capyngen: "✅",
    others: "❌",
  },
  { feature: "Real-Time Performance Tracking", capyngen: "✅", others: "❌" },
  { feature: "1000+ Happy Clients Globally", capyngen: "✅", others: "❌" },
  {
    feature: "Customized Strategies for Every Business",
    capyngen: "✅",
    others: "❌",
  },
  { feature: "Daily Content & Ad Optimization", capyngen: "✅", others: "❌" },
  {
    feature: "Guaranteed Growth Insights & Reports",
    capyngen: "✅",
    others: "❌",
  },
  {
    feature: "Multi-Platform Campaigns (Meta, Google, YouTube)",
    capyngen: "✅",
    others: "❌",
  },
  { feature: "15+ Years of Industry Expertise", capyngen: "✅", others: "❌" },
  { feature: "24/7 Support & Fast Response", capyngen: "✅", others: "❌" },
];

const CapyngenComparisonTableDark = () => {
  return (
    <div className="p-4 sm:p-6 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl border border-gray-700">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-center bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Why Capyngen Is Better Than Others
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg max-w-full">
        <table className="min-w-[600px] w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-800/90 border-b border-gray-700">
            <tr>
              <th className="py-3 px-4 sm:py-4 sm:px-6 text-left text-gray-300 text-lg sm:text-xl font-semibold tracking-wide">
                Features
              </th>
              <th className="py-3 px-4 sm:py-4 sm:px-6 text-center text-green-400 text-lg sm:text-xl font-bold">
                Capyngen
              </th>
              <th className="py-3 px-4 sm:py-4 sm:px-6 text-center text-red-500 text-lg sm:text-xl font-bold">
                Others
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map(({ feature, capyngen, others }, index) => (
              <tr
                key={index}
                className={`transition-colors duration-300 ${
                  index % 2 === 0 ? "bg-gray-900/70" : "bg-gray-800/60"
                } hover:bg-indigo-700/50 cursor-pointer`}
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 sm:mt-6 text-center text-gray-400 italic text-xs sm:text-sm">
        Experience transparency, expertise, and dedicated support with Capyngen.
      </p>
    </div>
  );
};

export default CapyngenComparisonTableDark;
