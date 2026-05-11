import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">

        {/* ── Left: Text Content ── */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I'm Sri Utpal,
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            Quality<br />Engineering<br />Analyst
          </motion.h1>

          <motion.p
            className="hero-location"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            based in Guwahati, India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <a
              href={`${import.meta.env.BASE_URL}UtpalNath_CV_2026.pdf`}
              download="UtpalNath_CV_2026.pdf"
              className="btn-resume"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Image + Decorative ── */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Decorative ++ top-right */}
          <div className="deco-plus" aria-hidden="true">
            <span className="plus-a">+</span>
            <span className="plus-b">+</span>
          </div>

          {/* Circular profile photo */}
          <div className="hero-image-ring">
            <img
              src={`${import.meta.env.BASE_URL}images/Profile.jpeg`}
              alt="Sri Utpal Nath"
              className="hero-profile-img"
            />
          </div>

          {/* Decorative //// bottom-left */}
          <div className="deco-slashes" aria-hidden="true">
            <span>/</span>
            <span>/</span>
            <span>/</span>
            <span>/</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
