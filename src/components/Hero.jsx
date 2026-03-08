import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello. My name is
          </motion.p>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Sri <span className="gradient-text">Utpal Nath</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Quality Engineering Analyst & Programmer
          </motion.h2>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Experienced Quality Engineering Analyst with a proven track record of delivering high-quality results in fast-paced environments. Skilled in Python, C, Splunk, and LoadRunner/JMeter. Demonstrated ability as a team player, fast learner, and leader. Excited to bring my expertise to a dynamic team and contribute to achieving organizational goals.
          </motion.p>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            <a href="#experience" className="btn btn-secondary glass-panel">View Experience</a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="https://www.linkedin.com/in/utpal-nath-146797119/" target="_blank" rel="noreferrer" className="social-icon">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/sritupal" target="_blank" rel="noreferrer" className="social-icon">
              <Github size={24} />
            </a>
            <a href="mailto:sriutpalnath270@gmail.com" className="social-icon">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
