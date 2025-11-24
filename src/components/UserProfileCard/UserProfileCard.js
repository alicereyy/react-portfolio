import React from 'react';
import './UserProfileCard.css'; // This is the magic line!

const UserProfileCard = () => {
  return (
    <div className="card">
      <img 
        className="card-avatar"
        src="https://via.placeholder.com/100" 
        alt="user avatar" 
      />
      <h2 className="card-title">Jane Doe</h2>
      <p className="card-bio">React Developer & Cat Enthusiast</p>
    </div>
  );
};

export default UserProfileCard;