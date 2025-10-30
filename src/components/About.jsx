import React from "react";
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

const GlobeIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100086626928653",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/capyngen-private-limited-5ba173390",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/capyngen/",
    label: "Instagram",
  },
  { icon: Twitter, href: "https://x.com/CapyngenIndia", label: "Twitter" },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@Capyngen-pvt-ltd",
    label: "YouTube",
  },
];

const About = () => {
  return (
    <section className="bg-slate-900 text-white w-full shadow-slate-900/50 overflow-hidden">
      <div className="relative p-8 md:p-12 h-full flex flex-col justify-center">
        {/* Background gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900/10 z-0"></div>
        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <GlobeIcon className="h-8 w-8 text-cyan-400" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              About Capyngen
            </h2>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-slate-300 text-base md:text-lg">
            <p>
              Capyngen is an internationally recognized IT and digital marketing
              company that offers innovative solutions in Branding, App
              Development, Website Design, and Online Marketing.
            </p>
            <p className="italic text-slate-400">
              We Use Innovative Strategies and State-of-the-Art Technology To
              Support Our Clients' Business Growth, Connectivity, And
              Competitiveness.
            </p>

            {/* Contact info and social links */}
            <div className="!mt-10 pt-6 border-t border-slate-700/50 space-y-6">
              {/* Links */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                <a
                  href="http://www.capyngen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  www.capyngen.com
                </a>
                <a
                  href="mailto:info@capyngen.com"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@capyngen.com
                </a>

                {/* Connect with social media */}
                <div className="flex items-center gap-4 mt-4">
                  <span className="font-medium text-slate-400">
                    Connect With Us:
                  </span>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon className="w-4 h-4 text-slate-300 hover:text-white transition-colors duration-200" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
