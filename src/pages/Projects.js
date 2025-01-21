import React, { useState } from 'react';
import Banana from "../assets/images/Banana.png";
import Tilapia from "../assets/images/Tilapia.png";
import Skuma from "../assets/images/skuma.jpg";
import Community from "../assets/images/community.jpg";
import Poultry from "../assets/images/Poultrypic.jpg";
import Fertilizer from "../assets/images/Fertlizer.png";
import "../styles/Projects.css";

const projectData = [
  { id: 1, src: Banana, title: "Sustainable Farming", description: "Promoting eco-friendly farming practices for a greener future. Our sustainable farming initiatives focus on reducing environmental impact while increasing crop yields through innovative and responsible techniques." },
  { id: 2, src: Community, title: "Community Outreach", description: "Engaging the local community to foster growth and collaboration. This project involves educating and empowering community members to improve livelihoods and contribute to sustainable agricultural practices." },
  { id: 3, src: Skuma, title: "Modern Irrigation", description: "Implementing advanced irrigation systems for optimal productivity. This project ensures efficient water use for agriculture, boosting crop production while conserving vital resources for long-term sustainability." },
  { id: 4, src: Poultry, title: "Poultry Farming", description: "Revolutionizing poultry farming with innovative techniques. Our project aims to increase poultry productivity while maintaining animal welfare and improving food security in the region." },
  { id: 5, src: Fertilizer, title: "Organic Fertilizer", description: "Encouraging the use of organic fertilizers for better yields. This initiative focuses on providing environmentally friendly alternatives to chemical fertilizers, ensuring healthier soil and sustainable agricultural practices." },
  { id: 6, src: Tilapia, title: "Aquatic Farming", description: "Leveraging technology to enhance agricultural efficiency. Through the integration of technology, we are optimizing farming practices, from automated irrigation to data-driven crop management, ensuring higher productivity and reduced labor costs." },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDescription = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <div className="projects-page">
      <h2 className="section-title text-center" style={{marginTop:"90px"}}>Our Projects</h2>
      <p className="section-subtitle text-center">A showcase of impactful initiatives by Rusinga Agriculture Network.</p>
      <div className="projects-container">
        {projectData.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${activeProject === project.id ? "active" : ""}`} 
            onClick={() => toggleDescription(project.id)}
          >
            <img src={project.src} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h4 className="project-title">{project.title}</h4>
              {activeProject === project.id ? (
                <p className="project-description">{project.description}</p>
              ) : (
                <button onClick={() => toggleDescription(project.id)}>Learn More</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
