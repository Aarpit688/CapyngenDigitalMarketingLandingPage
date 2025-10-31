import React from "react";
import { motion, useAnimation } from "framer-motion";

export default function GrowPresenceSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center">
          🌐 Grow Your Digital Presence
        </h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Take​‍​‌‍​‍‌​‍​‌‍​‍‌ Your Business a Step Higher
        </motion.p>
        <motion.p
          className="text-gray-400 mb-16 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          By smart marketing and engaging storytelling, we assist brands in
          conquering the online world. Make it happen with our specialists —
          success by each campaign.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div
            className="border border-gray-800 rounded-lg overflow-hidden bg-gray-950 hover:border-gray-700 transition-colors shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 min-h-64 border-b border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl font-bold text-white">
                  Boost Your Brand Visibility
                </h3>
              </div>
              <p className="text-md text-gray-400 leading-relaxed">
                Step above the rest online with the next generation marketing
                tactics of Capyngen. We accomplish this through targeted
                campaigns that make your brand stand out, be remembered, and
                trusted.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="border border-gray-800 rounded-lg overflow-hidden bg-gray-950 hover:border-gray-700 transition-colors shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-8 min-h-64 border-b border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💎</span>
                <h3 className="text-xl font-bold text-white">
                  Increase Customer Loyalty through Branded Identity
                </h3>
              </div>
              <p className="text-md text-gray-400 leading-relaxed">
                Shortly, a brand that is verified communicates to the customer
                that it is professional and credible. With effective and less
                but quality marketing, Capyngen will be the partner that helps
                your business to be the talk of the town among authentic and
                high-impact marketing.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.capyngen.com/"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-bold rounded-lg shadow-lg hover:opacity-90 transition transform hover:scale-[1.03]"
          >
            🚀 Explore More About Capyngen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
