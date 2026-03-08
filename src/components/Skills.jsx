import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'LoadRunner / JMeter' },
  { name: 'C' },
  { name: 'Python' },
  { name: 'HTML and CSS' },
  { name: 'Splunk Enterprise' },
  { name: 'GSheet / Excel' },
  { name: 'PowerBI' }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                className="skill-card glass-panel"
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05, borderColor: "var(--primary)", boxShadow: "0 10px 30px -10px var(--primary-glow)" }}
              >
                <div className="skill-content">
                  <h3>{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
