import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const timelineEntries = [
  {
    id: 1,
    period: 'Jan 2026 – Present',
    company: 'DAMAC Living',
    role: 'Senior Performance Tester',
    description: 'Driving end-to-end performance testing for a leading real estate platform using Apache JMeter and Appium for mobile performance validation.'
  },
  {
    id: 2,
    period: 'Aug 2025 – Dec 2025',
    company: 'Volkswagen',
    role: 'QEA Associate',
    description: 'Performance testing with JMeter for Risk Management Systems. Automated tests with Selenium, Playwright, and Artillery.'
  },
  {
    id: 3,
    period: 'Jan 2025 – Jul 2025',
    company: 'Lineage',
    role: 'QEA Associate',
    description: 'JMeter-based performance testing for environment upgrade, ensuring system stability and reliability.'
  },
  {
    id: 4,
    period: 'Dec 2024 – Jan 2025',
    company: 'American Tire Distributor',
    role: 'QEA Associate',
    description: 'Database management and performance testing with LoadRunner and MySQL.'
  },
  {
    id: 5,
    period: 'Nov 2024 – Dec 2024',
    company: 'Academy - Sports+Outdoors',
    role: 'QEA Associate',
    description: 'Optimized data storage and performance testing with LoadRunner/JMeter.'
  },
  {
    id: 6,
    period: 'Feb 2021 – Nov 2024',
    company: 'Woolworths',
    role: 'QEA Programming Analyst Trainee',
    description: 'Automated test scripts with LoadRunner and JMeter. Improved operational efficiency via root cause analysis.'
  },
  {
    id: 7,
    period: 'Jul 2020 – Sep 2020',
    company: 'GRIP – The Sparks Foundation',
    role: 'Data Entry & Analysis Intern',
    description: 'Data entry and analysis using Python3; received a completion certificate.'
  }
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">

        {/* Section heading */}
        <motion.h2
          className="section-heading-italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          about.
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="about-bio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm a Quality Engineering Analyst with 4+ years of experience at MNC, specialising in performance
          testing and test automation for enterprise applications. I work extensively with{' '}
          <strong>JMeter</strong>, <strong>LoadRunner</strong>, and <strong>Selenium</strong> to build scalable
          testing frameworks and identify system bottlenecks before they hit production. Beyond testing, I bring
          a strong data-driven mindset — applying <strong>Generative AI</strong> to testing workflows and
          leveraging <strong>Python</strong> and <strong>Machine Learning</strong> to extract insights from
          complex datasets.
        </motion.p>

        {/* Timeline */}
        <div className="about-timeline">
          {timelineEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              className="timeline-entry"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="timeline-bullet" aria-hidden="true" />
              <div className="timeline-body">
                <span className="timeline-period">{entry.period}</span>
                <h4 className="timeline-role">
                  {entry.role} — <span className="timeline-company">{entry.company}</span>
                </h4>
                <p className="timeline-desc">{entry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
