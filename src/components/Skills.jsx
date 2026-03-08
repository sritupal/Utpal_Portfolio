import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'LoadRunner / JMeter', percentage: 85 },
  { name: 'C', percentage: 80 },
  { name: 'Python', percentage: 80 },
  { name: 'HTML and CSS', percentage: 80 },
  { name: 'Splunk Enterprise', percentage: 80 },
  { name: 'GSheet / Excel', percentage: 80 },
  { name: 'PowerBI', percentage: 65 }
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
                whileHover={{ y: -5, borderColor: "var(--primary)" }}
              >
                <div className="skill-header">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                
                <div className="skill-bar-bg">
                  <motion.div 
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                  />
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
