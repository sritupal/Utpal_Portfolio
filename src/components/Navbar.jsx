import React, { useState, useEffect } from 'react';
import { Linkedin, Github } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">

        {/* Left — Name */}
        <a href="#home" className="navbar-brand">Sri Utpal Nath</a>

        {/* Center — Nav links */}
        <nav className="navbar-links" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </nav>

        {/* Right — Social icons */}
        <div className="navbar-socials">
          <a
            href="https://www.linkedin.com/in/utpal-nath-146797119/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/sritupal"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={20} />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
