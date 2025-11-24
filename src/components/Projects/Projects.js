// src/components/Projects/Projects.js
import React from "react";
import "./Projects.css";
import Project from "./Project";

// Tu remplaceras ces imports par tes vraies images
import project1Img from "../../assets/images/electromyography.png";
import project2Img from "../../assets/images/cloud.png";
import project3Img from "../../assets/images/me.jpg";

const projectsData = [
  {
    title: "Electromyographic Signal Classification",
    location: "Aalborg University",
    dates: "2024",
    description: (
    <>
      <p>
        During an exchange semester at <strong>Aalborg University</strong>, I contributed to a
        research-driven project aiming to classify finger movements from surface EMG (sEMG)
        signals. The work was carried out entirely in English with an international team.
      </p>

      <h4>Main Contributions</h4>
      <ul>
        <li>Conducted a detailed state-of-the-art review on sEMG-based movement classification.</li>
        <li>Designed a full machine learning pipeline (Python, ROS2, LDA, SVM).</li>
        <li>Implemented preprocessing, feature extraction and classification modules.</li>
        <li>Collaborated closely with a supervising professor and a research student.</li>
      </ul>

      <h4>Research Context</h4>
      <ul>
        <li>Used a research-grade EMG acquisition device under confidentiality constraints.</li>
        <li>Worked with sensitive biological data requiring controlled handling.</li>
        <li>
          Demonstrated how AI transforms biological activity into control signals for prosthetics.
        </li>
        <li>Contributed to a research publication.</li>
      </ul>
    </>
  ),
    image: project1Img,
  },
  {
    title: "Cloud-Native Voting Application",
    location: "IMT Atlantique",
    dates: "2025",
    description: (
      <>
        <p>
          In a two-person team using <strong>pair programming</strong>, we deployed a full
          microservices voting application using Docker, Kubernetes, and Terraform. The goal
          was to containerize, orchestrate, and provision the stack locally and on Google Cloud.
        </p>

        <h4>1. Docker – Containerization</h4>
        <ul>
          <li>Created one Dockerfile per service (Python, Node.js, .NET, Redis, PostgreSQL, Nginx).</li>
          <li>Built a complete <strong>docker-compose</strong> stack with front/back networks.</li>
          <li>Applied best practices: slim images, multistage .NET worker, healthchecks, persistent DB volume.</li>
          <li>Configured Nginx as a load balancer.</li>
        </ul>

        <h4>2. Kubernetes – Minikube &amp; GKE</h4>
        <ul>
          <li>Pushed custom images to <strong>GCP Artifact Registry</strong> and Minikube’s Docker runtime.</li>
          <li>Deployed services via Deployments, Services, PV/PVC, and Jobs.</li>
          <li>Implemented liveness probes, init containers for healthchecks, and persistent storage.</li>
          <li>Ran the load generator as a <strong>Kubernetes Job</strong>.</li>
          <li>Explored ConfigMaps and HorizontalPodAutoscaling.</li>
        </ul>

        <h4>3. Terraform – Infrastructure as Code</h4>
        <ul>
          <li>Automated the local Docker stack using the Terraform Docker provider.</li>
          <li>Provisioned a <strong>GKE cluster</strong> and deployed Kubernetes manifests through Terraform.</li>
        </ul>
      </>
    ),
    image: project2Img,
  },
  /* {
    title: "Application de gestion de tâches",
    location: "Freelance",
    dates: "2023",
    description:
      "Application de to-do list avec filtres, persistance des données et design épuré, développée pour un client indépendant.",
    image: project3Img,
  }, */
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>
      <p className="projects-intro">
        Here is a selection of projects I have worked on recently.
      </p>

      <div className="projects-track">
        {projectsData.map((project, index) => (
          <Project
            key={project.title}
            {...project}
            isReversed={index % 2 === 1} // alterne gauche/droite sur desktop
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;