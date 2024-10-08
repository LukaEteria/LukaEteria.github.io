import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [skills, setSkills] = useState([
    { name: 'Web', value: 97, color: '#DD1E2F', current: 0 },
    { name: 'Design', value: 92, color: '#EBB035', current: 0 },
    { name: 'Photoshop', value: 82, color: '#218559', current: 0 },
    { name: 'Rails', value: 45, color: '#6840D4', current: 0 },
    { name: 'jQuery', value: 30, color: '#06A2CB', current: 0 },
    { name: 'PHP', value: 20, color: '#AB4DD2', current: 0 },
  ]);

  const fullText = `Hello! I'm Luka, a passionate Web Designer and Developer. 🌟 
  I specialize in creating visually stunning and user-friendly websites using 
  HTML, CSS, JavaScript, React, and Figma. 💻✨
  My journey in web development began with a fascination for design aesthetics and a drive to bring ideas to life. 🎨 
  I love every aspect of crafting engaging user experiences and solving creative challenges. 
  If you're interested in collaborating, feel free to reach out! 😊`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
        startSkillsAnimation();
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const startSkillsAnimation = () => {
    skills.forEach((skill, idx) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        if (currentValue < skill.value) {
          currentValue += 1;
          setSkills(prevSkills => {
            const updatedSkills = [...prevSkills];
            updatedSkills[idx].current = currentValue;
            return updatedSkills;
          });
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
  };

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me 👋</h2>
      <p className="about-paragraph">{displayedText}</p>

      <div className="container-skillbar">
        {skills.map(skill => (
          <div className="skillbar clearfix" key={skill.name}>
            <div className="skillbar-title" style={{ background: skill.color }}>
              <span>{skill.name}</span>
            </div>
            <div className="skillbar-bar" style={{ background: skill.color, width: `${skill.current}%` }}></div>
            <div className="skill-bar-percent">{skill.current}%</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
