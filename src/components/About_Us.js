import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="about-section">

      <motion.div
        className="about-banner mission-bg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="overlay">
          <h2>OUR MISSION</h2>
          <p>
            To combat food insecurity and promote environmental stewardship by
            redistributing surplus food, preparing plant-based meals, and
            educating communities on sustainable food systems, including soil
            regeneration and compost development. Through hands-on volunteer
            opportunities, mindful cooking, and workshops on the food chain—from
            sourcing to serving—we empower students and community members to
            serve one another, foster connections, and develop as compassionate,
            sustainability-focused leaders.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="about-banner vision-bg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="overlay">
          <h2>OUR VISION</h2>
          <p>
            To create a world where food insecurity is eradicated, and vibrant,
            Equitable communities thrive through regenerative food systems that
            nourish people and the planet. We envision a future where everyone
            has access to wholesome, plant-based meals and sustainable practices
            like soil regeneration and composting—fostering a culture of
            mindfulness, connection, and environmental care for generations to
            come.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="about-banner values-bg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="overlay">
          <h2>OUR VALUES</h2>
          <p>
            Compassion | Community | Inclusivity | Safety | Sustainability | Integrity | Service
          </p>
        </div>
      </motion.div>

    </section>
  );
};

export default AboutUs;
