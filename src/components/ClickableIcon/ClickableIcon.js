import React from "react";
import "./ClickableIcon.css";

const ClickableIcon = ({ icon, url, label, color }) => {
  return (
    <a
      className="clickable-icon"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      style={{ backgroundColor: color }}
    >
      {icon}
    </a>
  );
};

export default ClickableIcon;
