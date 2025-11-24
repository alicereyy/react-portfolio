import React, { useState } from "react";
import "./Profile.css";
import photo from "../../assets/images/me.jpg";
import ClickableIcon from "../ClickableIcon/ClickableIcon";

const GitHubIcon = (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 .5C5.73.5.5 5.72.5 12a11.5 11.5 0 0 0 7.85 10.94c.57.1.78-.25.78-.55v-2.1c-3.19.7-3.86-1.54-3.86-1.54A3.04 3.04 0 0 0 3.4 16c-1.04-.7.08-.69.08-.69a2.4 2.4 0 0 1 1.75 1.18 2.46 2.46 0 0 0 3.36.96 2.46 2.46 0 0 1 .73-1.54c-2.55-.29-5.23-1.27-5.23-5.69A4.41 4.41 0 0 1 5.1 7.5a4.1 4.1 0 0 1 .11-3.04s.96-.31 3.13 1.18a10.7 10.7 0 0 1 5.7 0c2.16-1.49 3.12-1.18 3.12-1.18.8 1.94.28 3.04.14 3.35a4.41 4.41 0 0 1 1.17 3.06c0 4.44-2.69 5.4-5.25 5.68a2.7 2.7 0 0 1 .77 2.06v3.05c0 .31.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.72 18.27.5 12 .5Z" />
  </svg>
);

const LinkedInIcon = (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.05a4.17 4.17 0 0 1 3.75-2c4 0 4.75 2.63 4.75 6v6H17v-5.3c0-1.26-.02-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78V21H10z"/>
  </svg>
);

const MailIcon = (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.2-8 5-8-5V6l8 5 8-5Z" />
  </svg>
);

const Profile = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="profile-container">
      
      {/* Ligne principale : photo + texte */}
      <div className="profile-row">
        
        <div className="profile-left">
            <img className="profile-photo" src={photo} alt="Profil"/>
            
            <div className="profile-icons">
                <ClickableIcon
                  icon={GitHubIcon}
                  url="https://github.com/alicereyy"
                  color="#000000"
                  label="GitHub"
                />
                <ClickableIcon
                  icon={LinkedInIcon}
                  url="https://www.linkedin.com/in/alice-rey44/"
                  color="#0A66C2"
                  label="LinkedIn"
                />
                <ClickableIcon
                  icon={MailIcon}
                  url="mailto:alicerey@orange.fr"
                  color="#D44638"
                  label="Email"
                />
            </div>
        </div>

        <div className="profile-text">
          <h2>About me</h2>

          <p>
            I'm a generalist engineer specialized in software development, data science, cloud and AI, passionate about bridging computer science and healthcare to create impactful solutions.
          </p>
          <p>
            I’m motivated to apply technology to make a tangible, positive impact on society. Healthcare represents, to me, the most meaningful field to do so, where data and AI can directly contribute to improving lives and advancing science.
          </p>

          {/*
          {showMore && (
            <p className="hidden-text">
              test
            </p>
          )} 
          */}

          {/* Bouton pour étendre le texte
          <button
            className="toggle-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Less" : "More"}
          </button>
          */}
        </div>
      </div>

      {/* Texte en dessous */}
      <div className="profile-bottom">
        <p>
          Currently looking for a job opportunity in software engineering, data science, or AI, ideally within the healthcare sector (or in any sector with a positive impact on the world). Feel free to reach out if you have an exciting role or project in mind!
        </p>
      </div>

    </div>
  );
};

export default Profile;