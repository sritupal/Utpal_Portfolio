import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    date: 'Aug 2025 - Dec 2025',
    company: 'Volkswagen',
    role: 'QEA Associate',
    description: 'Utilized Apache JMeter for Performance Testing to ensure stability in Risk Management Systems. Automated tests with Selenium, Playwright, and Artillery to boost efficiency. Collaborated with cross-functional teams and applied Quality Engineering practices to maintain high standards. Created detailed test plans to ensure thorough validation.'
  },
  {
    id: 2,
    date: 'Jan 2025 - July 2025',
    company: 'Lineage',
    role: 'QEA Associate',
    description: 'Using JMeter for performance testing and achieving system stability and reliability for the environment upgrade. Worked well with teams to ensure software quality and developed test plans to guide testing efforts.'
  },
  {
    id: 3,
    date: 'Dec 2024 - Jan 2025',
    company: 'American Tire Distributor',
    role: 'QEA Associate',
    description: 'Leveraged LoadRunner and JMeter for performance testing, achieving system stability and reliability. Enhanced data storage and retrieval through proficient MySQL database management. Exhibited strong collaborative skills by working effectively with cross-functional teams.'
  },
  {
    id: 4,
    date: 'Nov 2024 - Dec 2024',
    company: 'Academy - Sports+Outdoors',
    role: 'QEA Associate',
    description: 'Successfully utilized LoadRunner/JMeter for performance testing, ensuring system stability and reliability. Optimized data storage and retrieval through MySQL database management. Demonstrated strong teamwork skills through effective collaboration with cross-functional teams.'
  },
  {
    id: 4,
    date: 'Feb 2021 - Nov 2024',
    company: 'Woolworths',
    role: 'QEA Programming Analyst Trainee',
    description: 'Resolved system issues via root cause analysis. Enhanced operational efficiency and drove process improvements. Ensured application reliability and performance by developing and executing automated test scripts with LoadRunner and JMeter. Automated UI workflows, API tests (Postman), backend database tests, and Azure triggers using Splunk and C.'
  },
  {
    id: 5,
    date: 'July 2020 - Sept 2020',
    company: 'GRIP-The Sparks Foundation',
    role: 'Data Entry & Analysis Intern',
    description: 'Worked for GRIP-The Sparks Foundation as an intern for a month on Python3 as a data entry and analysis intern and got a completion certificate.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional <span>Experience</span></h2>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div 
                className="timeline-item glass-panel"
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(74, 222, 128, 0.2)" }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div className="company-badge">
                      <Briefcase size={18} />
                      <h3>{exp.company}</h3>
                    </div>
                    <div className="date-badge">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  <h4 className="role">{exp.role}</h4>
                  <p className="description">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
