import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { label: "Home", href: "home" },
    { label: "Why Choose Us", href: "whychoose" },
    { label: "Best for Digital Marketing", href: "whycapyngenbetter" },
    { label: "Our Services", href: "ourservices" },
    { label: "About Us", href: "about" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur bg-black/40 border-b border-white/10 z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-1 px-6 text-white">
        {/* Logo */}
        <motion.div
          className="text-xl font-bold tracking-wide cursor-pointer"
          whileHover={{ scale: 1.03 }}
        >
          <img src={assets.capyngenLogo} alt="" className="w-32" />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {menuItems.map((item) => (
            <motion.li key={item.href} whileHover={{ scale: 1.05 }}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="relative text-sm font-medium transition-colors hover:text-gray-200"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full" />
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/70 border-t border-white/10"
          >
            <ul className="flex flex-col py-4 space-y-4 text-center text-white">
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpen(false)}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
