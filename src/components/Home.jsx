import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // იმპორტირება
import './About.css'; // CSS ფაილი

const Home = ({ setAnimationComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = `Welcome to My Portfolio! 🎉
  Hello and thank you for visiting! 🌟 I’m Luka, a passionate Web Designer and Developer. This portfolio is a reflection of my journey in the world of web development, where creativity meets technology. 💻✨
  Here, you’ll find a curated selection of my projects, each showcasing my skills in HTML, CSS, JavaScript, React, and Figma. My goal is to create visually stunning and user-friendly websites that engage and inspire. 🎨🌐
  I invite you to explore my work and see how I bring ideas to life in the digital realm. If you have any questions or would like to collaborate, feel free to reach out! 😊
  Enjoy your visit! 🚀`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
        setAnimationComplete(true); // ატვირთვის დასრულების სიგნალი
      }
    }, 0,1); // 30 milliseconds per character

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="home-section">
      <h1 className="home-title">Welcome to My Portfolio! 🎉</h1>
      <p className="home-paragraph">{displayedText}</p>
      <Link to="about" smooth={true} duration={500} className="down-arrow">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 17.5l-5-5h10l-5 5z" fill="#ffffff" /> {/* აქ შეცვალეთ ფერი */}
  </svg>
</Link>
    </section>
  );
};

export default Home;
