import React from 'react';
import { motion } from 'framer-motion';
import './Work.css';

const workEntries = [
  {
    id: 1,
    date: 'Jan 2026',
    company: 'DAMAC Living',
    role: 'Senior Performance Tester',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    description: 'Leading performance testing for real estate platforms using JMeter and Appium.'
  },
  {
    id: 2,
    date: 'Aug 2025',
    company: 'Volkswagen',
    role: 'QEA Associate',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop',
    description: 'Automated stability testing for Risk Management Systems with JMeter and Selenium.'
  },
  {
    id: 3,
    date: 'Jan 2025',
    company: 'Lineage',
    role: 'QEA Associate',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    description: 'Ensuring environment upgrade stability through rigorous performance validation.'
  },
  {
    id: 4,
    date: 'Dec 2024',
    company: 'American Tire Distributor',
    role: 'QEA Associate',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop',
    description: 'Database management and performance testing with LoadRunner and MySQL.'
  },
  {
    id: 5,
    date: 'Nov 2024',
    company: 'Academy - Sports+Outdoors',
    role: 'QEA Associate',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1000&auto=format&fit=crop',
    description: 'Optimized data storage and performance testing with LoadRunner/JMeter.'
  },
  {
    id: 6,
    date: 'Feb 2021',
    company: 'Woolworths',
    role: 'QEA Programming Analyst Trainee',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop',
    description: 'Developed automated test scripts and improved operational efficiency via root cause analysis.'
  },
  {
    id: 7,
    date: 'July 2020',
    company: 'GRIP - Sparks Foundation',
    role: 'Data Entry & Analysis Intern',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=1000&auto=format&fit=crop',
    description: 'Internship focused on Python3 for data entry and analysis tasks.'
  }
];

const Work = () => {
  return (
    <section id="work" className="work-section">
      <div className="container">
        
        <motion.h2 
          className="section-heading-italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          work.
        </motion.h2>

        <motion.p 
          className="work-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A selection of companies where I've implemented Quality Engineering and Performance Testing strategies.
        </motion.p>
      </div>

      <div className="work-snake-container">
        <div className="work-snake-path"></div>
        {workEntries.map((work, index) => (
          <motion.div 
            key={work.id}
            className={`work-card-wrapper ${index % 2 !== 0 ? 'card-offset' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="work-card">
              <div className="work-card-image">
                <img src={work.image} alt={work.company} />
                <div className="work-card-date">{work.date}</div>
              </div>
              <div className="work-card-content">
                <h3 className="work-card-title">{work.company}</h3>
                <h4 className="work-card-role">{work.role}</h4>
                <p className="work-card-desc">{work.description}</p>
              </div>
            </div>
            <div className="snake-dot"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
