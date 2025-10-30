import { assets } from "../assets/assets";

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
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
          Our promise to you
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {promises.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="p-8 flex flex-col items-center text-white 
                bg-gradient-to-r from-white/10 via-white/20 to-white/10 
                backdrop-blur-lg rounded-xl shadow-lg transition-transform hover:scale-[1.03]"
            >
              <div
                className="mb-6 w-20 h-20 rounded-lg overflow-hidden 
                  bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 
                  flex items-center justify-center"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
