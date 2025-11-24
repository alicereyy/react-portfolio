// src/components/Projects/Project.js
import React from "react";
import "./Projects.css";

const Project = ({ title, location, dates, description, image, isReversed }) => {
  return (
    <article
      className={`project-card ${
        isReversed ? "project-card--reverse" : ""
      }`}
    >
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-meta">
          <span>{location}</span> • <span>{dates}</span>
        </p>
        <p className="project-description">{description}</p>
      </div>
    </article>
  );
};

export default Project;