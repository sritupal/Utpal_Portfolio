import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formPayload = new FormData();
    formPayload.append('access_key', '71344b4d-afe7-44ab-a812-54af10bb1bd5');
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('subject', formData.subject);
    formPayload.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong.');
    }
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <motion.h2 
          className="section-heading-italic"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          contact.
        </motion.h2>

        <div className="contact-layout">
          {/* Left: Decorative Image */}
          <motion.div 
            className="contact-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}images/Profile.jpeg`} // Using profile as per common portfolio pattern or generic deco
              alt="Sri Utpal Nath" 
              className="contact-image"
            />
          </motion.div>

          {/* Right: Socials + Form */}
          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="contact-links">
              <p className="contact-text">
                Have a project in mind or just want to say hi? Feel free to reach out.
              </p>
              <div className="social-links-list">
                <a href="mailto:sriutpalnath270@gmail.com" className="social-link-item">sriutpalnath270@gmail.com</a>
                <a href="https://www.linkedin.com/in/utpal-nath-146797119/" target="_blank" rel="noreferrer" className="social-link-item">linkedin.com/in/utpal-nath</a>
                <a href="https://github.com/sritupal" target="_blank" rel="noreferrer" className="social-link-item">github.com/sritupal</a>
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="minimal-contact-form">
                <div className="form-row">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
                <button type="submit" className="btn-resume" style={{ padding: '0.8rem 2rem', marginTop: '1rem' }}>
                  Send Message
                </button>
                {status && <p className="form-status">{status}</p>}
              </form>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
