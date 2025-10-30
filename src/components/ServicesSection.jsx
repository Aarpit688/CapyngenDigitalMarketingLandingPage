import { assets } from "../assets/assets";

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Put your brand out there where your customers are. Use creative social campaigns to connect, expand, and convert.",
    image: assets.smm, // replace with actual asset
  },
  {
    id: 2,
    title: "Meta (Facebook / Instagram) Ads",
    description:
      "Help that exact person to see your ad by using the most powerful ad targeting. Lead the way to get more visitors, more leads, and increased business growth.",
    image: assets.metaAds, // replace with actual asset
  },
  {
    id: 3,
    title: "Google Ads",
    description:
      "Help people to find you when it is most important. Make the most of the search queries by turning them into sales through clever advertising.",
    image: assets.googleAds, // replace with actual asset
  },
  {
    id: 4,
    title: "Website Design",
    description:
      "Have a website that is trendy, speedy, and user-friendly. Perfectly designed to attract and made to convert.",
    image: assets.webDesign, // replace with actual asset
  },
  {
    id: 5,
    title: "SEO (Google Ranking)",
    description:
      "Get ranked ahead of the other competing sites, attract more traffic, and keep your position at the top. We make your site more visible and productive through optimization.",
    image: assets.seo, // replace with actual asset
  },
  {
    id: 6,
    title: "Branding & Graphics",
    description:
      "Develop a brand that people will not only recognize but also remember. We take care of everything from logos to the visuals that reflect your brand.",
    image: assets.branding, // replace with actual asset
  },
  {
    id: 7,
    title: "eCommerce Marketing",
    description:
      "Help your online store to be seen and sell more. We assist you in attracting new customers and making loyal customers out of them.",
    image: assets.eComm, // replace with actual asset
  },
  {
    id: 8,
    title: "App Development",
    description:
      "Objective accomplished - your ideas are turned into reality with the help of custom mobile apps. The app is smartly designed, performs smoothly, and brings real results.",
    image: assets.appDevFullSize, // replace with actual asset
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black via-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Our Digital Marketing Services
        </h2>
        <p className="text-xl text-white mb-12">
          Experience ! ‌​‍​‌‍​‍‌​‍​‌‍​‍‌ our top-notch digital marketing suite
          without paying anything during your first month.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="p-8 flex flex-col items-center text-white 
                bg-gradient-to-r from-white/10 via-white/20 to-white/10 
                backdrop-blur-lg rounded-xl shadow-lg transition-transform hover:scale-[1.03]"
            >
              <div
                className="mb-6 w-full aspect-16/9 rounded-lg overflow-hidden 
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
