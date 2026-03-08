import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="bg-fixed-glow"></div>
      


      <main>
        <Hero />
        <Experience />
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
