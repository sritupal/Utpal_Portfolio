import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Send } from 'lucide-react';
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
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span>Touch</span></h2>
          
          <div className="contact-grid">
            <motion.div 
              className="contact-info glass-panel"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>Contact Information</h3>
              <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello.</p>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>House No. 6A, Dr. Zakir Hussain Road, Hengrabari, Sananya Path, By Lane 11, Guwahati, Assam - 781036</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>sriutpalnath270@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-wrapper glass-panel"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
                
                {status && <p className="form-status">{status}</p>}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
