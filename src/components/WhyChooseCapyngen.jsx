import React from "react";
import CountUp from "react-countup";

const WhyChooseCapyngen = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-12 bg-gradient-to-b from-blue-900 via-black to-gray-900 text-white shadow-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16 sm:mb-20 text-center">
        Why Choose <span className="text-blue-400">Capyngen</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            end: 1000,
            label: "Happy Clients Worldwide",
            desc: "We have been favored by clients of all types. Their happiness is the gauge of our success.",
          },
          {
            end: 15,
            label: "Years of Proven Expertise",
            desc: "Guiding the digital journey successfully for more than 15 years.",
          },
          {
            end: 99,
            label: "Quality & Consistency",
            desc: "Every campaign reflects our dedication to creativity and measurable growth.",
          },
          {
            end: 1000,
            label: "Business Growth Strategies",
            desc: "Personalized digital plans to help brands reach their goals quickly and efficiently.",
          },
        ].map(({ end, label, desc }, idx) => (
          <div key={idx} className="text-center px-4">
            <div className="flex justify-center items-center text-blue-400 font-extrabold mb-3 space-x-2">
              <CountUp
                end={end}
                duration={3}
                className="text-5xl sm:text-6xl font-extrabold"
              />
              <span className="text-4xl sm:text-5xl">+</span>
            </div>
            <p className="uppercase tracking-widest font-semibold mb-3 text-lg sm:text-xl">
              {label}
            </p>
            <p className="text-gray-300 max-w-xs mx-auto text-sm sm:text-base leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
      <div className="col-span-full mt-10 text-gray-300 max-w-4xl mx-auto text-center text-base sm:text-lg leading-relaxed px-4">
        <p>
          Our tools simplify digital marketing, amplifying growth through
          analytics, automation, and audience targeting for effortless success.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseCapyngen;
