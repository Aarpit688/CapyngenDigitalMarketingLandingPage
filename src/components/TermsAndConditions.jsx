import React from "react";

const LockIcon = ({ className }) => (
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
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const TermsAndConditions = () => {
  return (
    <section className="bg-slate-900 text-white w-full shadow-slate-900/50 overflow-hidden">
      <div className="relative p-8 md:p-12 h-full flex flex-col justify-center">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-slate-900 via-slate-900 to-cyan-900/10 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <LockIcon className="h-8 w-8 text-cyan-400" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Terms & Conditions
            </h2>
          </div>

          <div className="space-y-4 text-slate-300 text-base md:text-lg">
            <p>Offer is only available for the first 30 clients.</p>
            <p className="p-4 bg-slate-800/60 border border-cyan-500/30 rounded-lg">
              This means you get{" "}
              <span className="font-bold text-cyan-400">1 month of SMM</span>{" "}
              (Facebook, Instagram, Twitter/X, YouTube){" "}
              <span className="font-bold text-cyan-400">for free</span>.
            </p>
            <ul className="list-disc list-inside space-y-3 pl-2">
              <li>The ad spend is to be paid separately.</li>
              <li>
                The offer is only available for startups, SMEs, and new
                businesses.
              </li>
              <li>
                Once the first month is over, clients can decide to continue
                with a paid plan.
              </li>
              <li>
                Capyngen may change or remove the offer at its sole discretion
                and at any time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
