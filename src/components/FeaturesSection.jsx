import { assets } from "../assets/assets";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const promises = [
  {
    id: 1,
    title: "Transparent Strategies",
    description:
      "We stick to honesty and openness - without any hidden tricks or complicated terms. Your entire digital journey is communicated publicly with actual data and outcomes.",
    image: assets.transparent,
  },
  {
    id: 2,
    title: "Results That Matter",
    description:
      "Our work focuses on real business growth—not just clicks or views. We deliver measurable success that brings sales, visibility, and brand power.",
    image: assets.results,
  },
  {
    id: 3,
    title: "Personalized Attention",
    description:
      "Each business is unique and receives targeted marketing strategies focused on your precise objectives.",
    image: assets.personalizedAttention,
  },
  {
    id: 4,
    title: "Long-Term Growth",
    description:
      "We build brands with staying power through ongoing optimization and innovation, ensuring your success expands every month.",
    image: assets.longTermGrowth,
  },
];

export function FeaturesSection() {
  // Intersection Observer hook to detect component in viewport
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-blue-900"
      aria-label="Features and promises section"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-12"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          transition={{ duration: 0.6 }}
        >
          Our promise to you
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {promises.map(({ id, title, description, image }) => (
            <motion.div
              key={id}
              className="p-8 flex flex-col items-center text-white bg-gradient-to-r from-white/10 via-white/20 to-white/10 backdrop-blur-lg rounded-xl shadow-lg transition-transform hover:scale-[1.03] hover:shadow-xl cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              tabIndex={0}
              role="article"
              aria-labelledby={`feature-title-${id}`}
            >
              <div className="mb-6 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <motion.h3
                id={`feature-title-${id}`}
                className="text-xl font-bold mb-3"
                variants={fadeInVariants}
                transition={{ duration: 0.3 }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-gray-300 text-sm leading-relaxed"
                variants={fadeInVariants}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
