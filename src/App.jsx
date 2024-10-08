import React, { useEffect, useState } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loading from './components/Loading';
import './App.css';
import './Responsive.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('Home');
  const [loading, setLoading] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'contact'];
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, clientHeight } = element;
        if (scrollY >= offsetTop && scrollY < offsetTop + clientHeight) {
          setCurrentSection(section.charAt(0).toUpperCase() + section.slice(1));
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    const loadData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    loadData();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Menu currentSection={currentSection} />
      <div className="content">
        <div id="home"><Home setAnimationComplete={setAnimationComplete} /></div>
        <div id="about"><About animationComplete={animationComplete} /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
