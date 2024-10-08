import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/projects");
        setProjectsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error); // შეცდომის მართვა
      }
    };

    fetchData();
  }, []);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Here are some of my projects.</p>
      <div className="grid">
        {projectsData.map((project, index) => (
          <div key={index} className="rectangle">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={`Project ${index + 1}`} />
              <p className="description">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
