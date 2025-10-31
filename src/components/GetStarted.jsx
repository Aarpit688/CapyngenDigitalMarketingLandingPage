import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const GetStarted = ({
  title = "",
  description = "Our expert consulting team provides end-to-end support, from initial concept through to successful launch, ensuring every aspect of your app development is meticulously handled.",
  buttonText = "Get Started Today",
  buttonColor = "bg-white hover:scale-105",
  buttonTextColor = "text-black",
  backgroundColor = "bg-[#0a1b52]",
  backgroundVideo,
  textColor = "text-white",
  image,
  reverse = false,
  listItems = [],
  textSize = "text-base sm:text-lg",
  sectionBg = "bg-black/90",
}) => (
  <section
    className={`relative ${sectionBg} py-12 overflow-hidden  bg-linear-to-b from-slate-800 via-slate-900 to-black`}
  >
    <div
      className={`relative z-10 py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto rounded-3xl overflow-hidden backdrop-blur-sm ${
        backgroundVideo ? "bg-black/50" : backgroundColor
      } transition-colors duration-500`}
    >
      {backgroundVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
          src={backgroundVideo}
          aria-hidden="true"
        />
      )}

      <div
        className={`container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-20 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <motion.article
          initial={{ opacity: 0, x: image ? (reverse ? 50 : -50) : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 max-w-3xl z-10 text-center md:text-left"
          aria-label="Get Started Section Text Content"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold leading-tight mb-6 ${textColor} drop-shadow-lg`}
          >
            {title}
          </h2>
          <div className={`space-y-5 ${textSize} ${textColor} drop-shadow-md`}>
            {Array.isArray(description) ? (
              description.map((para, i) => <div key={i}>{para}</div>)
            ) : (
              <div>{description}</div>
            )}

            {listItems.length > 0 && (
              <ul className="mt-6 space-y-4 text-lg list-none">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="mt-1 text-green-400 font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.article>

        {/* Button when no image */}
        {!image && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:shrink-0 z-10 flex justify-center md:justify-start"
          >
            <a
              href=""
              className={`${buttonColor} ${buttonTextColor} font-bold px-8 py-3 rounded-lg shadow-lg flex items-center gap-3 transition cursor-pointer`}
              aria-label="Go to contact page"
            >
              <FaPhoneAlt className="text-lg" aria-hidden="true" />
              {buttonText}
              <FaArrowRight className="text-lg ml-1" aria-hidden="true" />
            </a>
          </motion.div>
        )}

        {/* Image Section (if provided) */}
        {image && (
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center z-10"
            aria-label="Get started section illustration"
          >
            <img
              src={image}
              alt="App Consulting Illustration"
              className="w-full max-w-md rounded-xl"
              loading="lazy"
            />
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

export default GetStarted;
