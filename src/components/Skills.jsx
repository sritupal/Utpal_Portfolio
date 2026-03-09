import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

import { 
  BarChart3, 
  Terminal, 
  Code2, 
  BrainCircuit, 
  Layers, 
  Zap 
} from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Performance Testing',
    icon: <BarChart3 className="category-icon" />,
    skills: [
      { name: 'Apache JMeter', level: 'Expert' },
      { name: 'HP LoadRunner', level: 'Advanced' },
      { name: 'Load Testing' },
      { name: 'Stress Testing' },
      { name: 'Scalability Testing' },
      { name: 'Bottleneck Analysis' },
      { name: 'Capacity Planning' },
      { name: 'Performance Metrics & Reporting' }
    ]
  },
  {
    title: 'Test Automation',
    icon: <Zap className="category-icon" />,
    skills: [
      { name: 'Selenium WebDriver', level: 'Expert' },
      { name: 'TestNG' },
      { name: 'API Testing' },
      { name: 'Postman' },
      { name: 'REST APIs' },
      { name: 'Regression Testing' },
      { name: 'CI/CD Integration' },
      { name: 'Jenkins', level: 'Advanced' },
      { name: 'BDD' },
      { name: 'TDD' }
    ]
  },
  {
    title: 'Programming Languages',
    icon: <Code2 className="category-icon" />,
    skills: [
      { name: 'Python', level: 'Expert' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'JavaScript' },
      { name: 'Bash' }
    ]
  },
  {
    title: 'AI & Data',
    icon: <BrainCircuit className="category-icon" />,
    skills: [
      { name: 'Generative AI', level: 'Advanced' },
      { name: 'Machine Learning', level: 'Familiar' },
      { name: 'Data Analysis' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Matplotlib' },
      { name: 'Seaborn' },
      { name: 'Random Forest' },
      { name: 'Logistic Regression' },
      { name: 'SVM' },
      { name: 'Data Visualization' }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: <Layers className="category-icon" />,
    skills: [
      { name: 'Git' },
      { name: 'Jenkins', level: 'Advanced' },
      { name: 'Docker', level: 'Familiar' },
      { name: 'JIRA' },
      { name: 'Maven' },
      { name: 'Agile' },
      { name: 'Scrum' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          
          <div className="categories-grid">
            {skillCategories.map((category, catIndex) => (
              <motion.div 
                key={category.title}
                className="skill-category-card glass-panel"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="category-header">
                  {category.icon}
                  <h3>{category.title}</h3>
                </div>
                
                <div className="skills-pill-container">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skill.name}
                      className={`skill-pill ${skill.level ? 'has-level' : ''}`}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    >
                      <span className="skill-name">{skill.name}</span>
                      {skill.level && (
                        <span className={`level-badge ${skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  ))}
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
