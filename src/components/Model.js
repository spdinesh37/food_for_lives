<<<<<<< HEAD
// src/components/Model.js
import React from "react";
import { motion } from "framer-motion";

function Model() {
  const logisticsData = [
    {
      title: "Sourcing",
      icon: "🛒",
      items: [
        "Grocery Stores",
        "Public Donations",
        "Retailers",
        "Farmers",
        "Governmental Agencies",
      ],
    },
    {
      title: "Operation",
      icon: "👨‍🍳",
      items: [
        "In-House Cooking",
        "Quality & Hygiene",
        "Sustainability Focus",
        "Mindful Preparation",
        "Teamwork-Driven Process",
      ],
    },
    {
      title: "Distribution",
      icon: "📦",
      items: [
        "Packaging for Delivery",
        "Transportation Solutions",
        "On-Site Distribution",
        "Community Engagement",
        "Feedback Mechanism",
      ],
    },
  ];

  return (
    <section
      id="model"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-emerald-800 via-emerald-700 to-green-600 text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        OUR LOGISTICS MODEL
      </h2>
      <p className="text-base sm:text-lg mb-12 text-center opacity-90 max-w-2xl">
        A Cook-In-Serve-Out System — showcasing how we source, prepare, and distribute food in a sustainable, community-driven way.
      </p>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full">
        {logisticsData.map((section, index) => (
          <motion.div
            key={index}
            className="bg-green-900/80 border border-green-700 rounded-2xl shadow-lg p-6 w-full sm:w-[30%] text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
          >
            <div className="text-4xl mb-4">{section.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
            <ul className="text-sm text-green-100 list-disc list-inside space-y-1 text-left">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
=======
function Model() {
  return (
    <div>
      <h2>Our Model</h2>
      <p>Explain your organizational model, workflow, or approach.</p>
    </div>
>>>>>>> ed50a2b85e969a84fb08d4ccd2e00cc336e14016
  );
}

export default Model;
