import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const businessTypes = [
  "E-commerce / Online Store",
  "Local Business / Shop",
  "Clinic / Hospital / Healthcare",
  "Real Estate / Builder",
  "Education / Coaching",
  "Finance / Insurance",
  "Other",
];

const serviceTypes = [
  "Social Media Marketing",
  "Meta (Facebook / Instagram) Ads",
  "Google Ads",
  "Website Design",
  "SEO (Google Ranking)",
  "Branding & Graphics",
  "Not Sure — Need Guidance",
];

const budgetOptions = [
  "₹5,000 – ₹20,000",
  "₹20,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

export default function HeroSection() {
  const [step, setStep] = useState(1);
  const [whatsappSameAsPhone, setWhatsappSameAsPhone] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsappNumber: "",
    city: "",
    brandName: "",
    website: "",
    businessType: "",
    serviceType: [],
    budget: "",
    bestTime: "",
    notes: "",
  });

  const validateStep = (s = step) => {
    switch (s) {
      case 1:
        return formData.fullName.trim() !== "";
      case 2:
        return (
          (formData.phone.trim() !== "" && whatsappSameAsPhone) ||
          formData.whatsappNumber.trim() !== ""
        );
      case 3:
        return (
          formData.city.trim() !== "" &&
          formData.brandName.trim() !== "" &&
          formData.website.trim() !== ""
        );
      case 4:
        return formData.businessType !== "";
      case 5:
        return formData.serviceType.length > 0;
      case 6:
        return formData.budget !== "";
      case 7:
        return formData.bestTime.trim() !== "";
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep() && step < 8) setStep((s) => s + 1);
  };

  const handleBack = () => setStep((s) => Math.max(1, s - 1));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleCheckboxChange = (service) => {
    setFormData((prev) => {
      const exists = prev.serviceType.includes(service);
      const updated = exists
        ? prev.serviceType.filter((s) => s !== service)
        : [...prev.serviceType, service];
      return { ...prev, serviceType: updated };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your API call
    console.log("submit", formData);
    alert("Submitted — check console for payload");
  };

  const stepLabels = ["1", "2", "3", "4", "5", "6", "7"];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-linear-to-b from-black via-slate-900 to-slate-800 text-white font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
            Grow Your Brand. Get 100% FREE Social Media Marketing for 1 Month.
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-xl leading-relaxed selection:bg-indigo-600 selection:text-white">
            Unlock expert-driven campaigns that help your business shine across
            Facebook, Instagram, Twitter (X), and YouTube — absolutely free.
          </p>

          <div className="mt-16 text-center">
            <button className="px-6 py-3 bg-linear-to-r from-pink-500 to-yellow-500 text-black font-bold rounded-lg shadow-lg hover:opacity-90 transition">
              🚀 Register Now – Limited Offer for First 30 Clients
            </button>
          </div>
        </div>

        {/* Right form */}
        <div className="w-full flex justify-center">
          <div className="relative w-full max-w-md min-h-[550px] bg-white/6 backdrop-blur-lg rounded-3xl shadow-2xl border border-indigo-600/30 overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -left-8 -top-12 w-44 h-44 bg-linear-to-tr from-indigo-400/40 via-purple-300/30 to-pink-400/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-6 bottom-8 w-36 h-36 bg-linear-to-br from-pink-400/30 via-red-400/20 to-yellow-400/10 rounded-full blur-2xl pointer-events-none" />

            {/* Content area */}
            <form
              onSubmit={handleSubmit}
              className="relative z-10 h-full flex flex-col"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-indigo-300">Let's talk</div>
                  <div className="font-semibold text-white">
                    Quick intake form
                  </div>
                </div>
                <div className="text-sm text-indigo-200">
                  Step {Math.min(step, 7)}/7
                </div>
              </div>

              {/* Progress bar */}
              <div className="px-8">
                <div className="w-full bg-white/6 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-indigo-500 shadow-[0_8px_24px_rgba(99,102,241,0.12)] transition-all"
                    style={{ width: `${((step - 1) / 7) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step indicators */}
              <div className="px-6 mt-4">
                <div className="flex items-center justify-between text-xs text-indigo-300 font-medium select-none">
                  {stepLabels.map((label, i) => (
                    <div key={i} className="flex-1 text-center">
                      <div
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-semibold border transition-all ${
                          i + 1 === step || (step === 8 && label === "Finish")
                            ? "bg-indigo-500 border-indigo-400 text-white shadow-lg"
                            : "bg-white/3 border-white/6 text-indigo-300"
                        }`}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Animated step container */}
              <div className="px-8 pt-6 pb-6 overflow-auto flex-1">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="s1"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <label className="block mb-1 font-semibold text-indigo-300">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                      />
                      <div>
                        <label className="block mb-1 font-semibold text-indigo-300">
                          Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                        />
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div
                      key="s2"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block mb-1 font-semibold text-indigo-300">
                          Phone / WhatsApp Number{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 99999 99999"
                          className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                        />
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          id="whatsappSame"
                          type="checkbox"
                          checked={whatsappSameAsPhone}
                          onChange={() => setWhatsappSameAsPhone((v) => !v)}
                          className="accent-indigo-500"
                        />
                        <label
                          htmlFor="whatsappSame"
                          className="text-indigo-300 text-sm select-none cursor-pointer"
                        >
                          WhatsApp number is same as phone number
                        </label>
                      </div>

                      {!whatsappSameAsPhone && (
                        <div>
                          <label className="block mb-1 font-semibold text-indigo-300">
                            WhatsApp Number{" "}
                            <span className="text-rose-400">*</span>
                          </label>
                          <input
                            type="tel"
                            name="whatsappNumber"
                            value={formData.whatsappNumber || ""}
                            onChange={handleChange}
                            placeholder="+91 99999 99999"
                            className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                          />
                        </div>
                      )}
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div
                      key="s3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block mb-1 font-semibold text-indigo-300">
                          City / Location{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Mumbai, Delhi, etc."
                          className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-semibold text-indigo-300">
                          Business / Brand Name{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name="brandName"
                          value={formData.brandName}
                          onChange={handleChange}
                          placeholder="Capyngen, The MediClub"
                          className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-semibold text-indigo-300">
                          Website Name / URL{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder='If no website → Write "No Website"'
                          className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                        />
                      </div>
                    </motion.div>
                  )}
                  // Step 4 - Business Type (single choice radio boxes)
                  {step === 4 && (
                    <motion.div
                      key="s4"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <label className="block mb-1 font-semibold text-indigo-300">
                        What Type of Business Do You Have?{" "}
                        <span className="text-rose-400">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {businessTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData((p) => ({ ...p, businessType: type }))
                            }
                            className={`py-3 px-5 rounded-xl border transition font-medium text-sm shadow-inner focus:outline-none select-none ${
                              formData.businessType === type
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                                : "bg-white/10 border-white/20 text-indigo-200 hover:bg-indigo-700 hover:border-indigo-500"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  // Step 5 - Service Type (multi-choice box buttons)
                  {step === 5 && (
                    <motion.div
                      key="s5"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <label className="block mb-2 font-semibold text-indigo-300">
                        What Service Are You Looking For?{" "}
                        <span className="text-rose-400">*</span>
                      </label>
                      <div className="grid grid-cols-2 gap-3 pr-2">
                        {serviceTypes.map((service) => {
                          const selected =
                            formData.serviceType.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleCheckboxChange(service)}
                              className={`py-3 px-4 rounded-xl border font-medium text-sm shadow-inner select-none transition ${
                                selected
                                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                                  : "bg-white/10 border-white/20 text-indigo-200 hover:bg-indigo-700 hover:border-indigo-500"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                  // Step 6 - Budget (single choice radio boxes)
                  {step === 6 && (
                    <motion.div
                      key="s6"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <label className="block mb-1 font-semibold text-indigo-300">
                        Monthly Marketing Budget{" "}
                        <span className="text-rose-400">*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {budgetOptions.map((budget) => (
                          <button
                            key={budget}
                            type="button"
                            onClick={() =>
                              setFormData((p) => ({ ...p, budget }))
                            }
                            className={`py-3 px-5 rounded-xl border font-medium text-sm shadow-inner select-none transition ${
                              formData.budget === budget
                                ? "bg-indigo-600 border-indigo-600 text-white shadow-lg"
                                : "bg-white/10 border-white/20 text-indigo-200 hover:bg-indigo-700 hover:border-indigo-500"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step === 7 && (
                    <motion.div
                      key="s7"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block mb-1 font-semibold text-indigo-300">
                          Best Time To Call / Talk{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name="bestTime"
                          value={formData.bestTime}
                          onChange={handleChange}
                          placeholder="11 AM – 4 PM / After 7 PM"
                          className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-semibold text-indigo-300">
                          Additional Requirements / Notes (Optional)
                        </label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Additional details..."
                          className="w-full rounded-xl px-4 py-3 text-white font-medium shadow-inner focus:outline-none focus:ring-4 focus:ring-indigo-500 transition resize-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer / navigation */}
              <div className="px-8 py-4 border-t border-white/6 bg-linear-to-t from-transparent to-white/2">
                <div className="flex items-center justify-between">
                  <div>
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-4 py-2 rounded-xl bg-white/6 hover:bg-white/8 text-sm font-semibold"
                      >
                        Back
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {step < 7 && (
                      <button
                        type="button"
                        disabled={!validateStep()}
                        onClick={handleNext}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
                          validateStep()
                            ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow"
                            : "bg-indigo-300/60 text-white/80 cursor-not-allowed"
                        }`}
                      >
                        Next
                      </button>
                    )}

                    {step === 7 && (
                      <button
                        type="submit"
                        className="px-6 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold shadow-lg"
                      >
                        Finish & Submit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
