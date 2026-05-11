import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: '68px' }}>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sri Utpal Nath. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
