<<<<<<< HEAD
// src/components/Departments.js
import React, { useState } from "react";
import { motion } from "framer-motion";

const Departments = () => {
  // ✅ Department data
  const departments = [
    {
      title: "Accounting & Finance",
      items: ["Budgeting", "Donations", "Expense Tracking", "Sponsorships"],
    },
    {
      title: "Operations & Logistics",
      items: ["Food Redistribution", "Transportation", "Volunteer Management"],
    },
    {
      title: "Community Outreach",
      items: ["Workshops", "Campus Events", "Local Partnerships"],
    },
    {
      title: "Sustainability & Composting",
      items: ["Soil Regeneration", "Compost Development", "Education"],
    },
    {
      title: "Marketing & Media",
      items: ["Social Media", "Graphic Design", "Photography", "Branding"],
    },
  ];

  // ✅ Flip state
  const [flippedIndex, setFlippedIndex] = useState(null);
  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section
      id="departments"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-green-900 via-green-800 to-emerald-700 text-white"
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">
        OUR DEPARTMENTS
      </h1>
      <p className="text-base sm:text-lg mb-12 text-center opacity-90 max-w-2xl">
        Click on each department to learn more about their initiatives and roles.
      </p>

      {/* ⚄ layout (1-2-1-2) */}
      <div className="flex flex-col items-center gap-8 w-full max-w-6xl">

        {/* Top row (1,2) */}
        <div className="flex justify-between w-full gap-6 flex-wrap sm:flex-nowrap">
          {departments.slice(0, 2).map((dept, index) => {
            const isFlipped = flippedIndex === index;
            return (
              <motion.div
                key={index}
                className="relative w-full sm:w-[48%] h-64 cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => toggleFlip(index)}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {/* Front */}
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-lg bg-green-900/80 border border-green-700 text-center flex flex-col items-center justify-center p-6"
                  style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-semibold">{dept.title}</h2>
                  <p className="text-sm opacity-80 mt-2">
                    Click to view department details
                  </p>
                </motion.div>

                {/* Back */}
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-lg bg-green-800/90 border border-green-700 text-left p-6"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: isFlipped ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {dept.title}
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-green-100">
                    {dept.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Middle row (3) */}
        <div className="flex justify-center w-full">
          {departments.slice(2, 3).map((dept, index) => {
            const actualIndex = index + 2;
            const isFlipped = flippedIndex === actualIndex;
            return (
              <motion.div
                key={index}
                className="relative w-full sm:w-[60%] h-64 cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => toggleFlip(actualIndex)}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {/* Front */}
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-lg bg-green-900/80 border border-green-700 text-center flex flex-col items-center justify-center p-6"
                  style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-semibold">{dept.title}</h2>
                  <p className="text-sm opacity-80 mt-2">
                    Click to view department details
                  </p>
                </motion.div>

                {/* Back */}
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-lg bg-green-800/90 border border-green-700 text-left p-6"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: isFlipped ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {dept.title}
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-green-100">
                    {dept.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom row (4,5) */}
        <div className="flex justify-between w-full gap-6 flex-wrap sm:flex-nowrap">
          {departments.slice(3, 5).map((dept, index) => {
            const actualIndex = index + 3;
            const isFlipped = flippedIndex === actualIndex;
            return (
              <motion.div
                key={index}
                className="relative w-full sm:w-[48%] h-64 cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => toggleFlip(actualIndex)}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {/* Front */}
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-lg bg-green-900/80 border border-green-700 text-center flex flex-col items-center justify-center p-6"
                  style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-semibold">{dept.title}</h2>
                  <p className="text-sm opacity-80 mt-2">
                    Click to view department details
                  </p>
                </motion.div>

                {/* Back */}
                <motion.div
                  className="absolute inset-0 rounded-2xl shadow-lg bg-green-800/90 border border-green-700 text-left p-6"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ rotateY: isFlipped ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {dept.title}
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-1 text-green-100">
                    {dept.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
=======
function Departments() {
  return (
    <div>
      <h2>Departments</h2>
      <p>Details about the departments in your organization.</p>
    </div>
  );
}
>>>>>>> ed50a2b85e969a84fb08d4ccd2e00cc336e14016

export default Departments;
