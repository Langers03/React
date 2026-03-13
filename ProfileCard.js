import React from "react";
import "./ProfileCard.css";

function ProfileCard({ image, name, jobTitle, bio }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />

      <div className="profile-content">
        <h2>{name}</h2>
        <h4 className="job-title">{jobTitle}</h4>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;