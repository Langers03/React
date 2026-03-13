import React from "react";
import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {

  const profiles = [
    {
      image: "https://ssb.wiki.gallery/images/9/9e/Cloud_Strife.png",
      name: "Cloud Strife",
      jobTitle: "Mercenary",
      bio: "A soldier with a kind heart and a strong passion for saving the planet"
    },
    {
      image: "https://i.redd.it/p6l40d7c4ap41.jpg",
      name: "Zack Fair",
      jobTitle: "Mercenary",
      bio: "Zack's core motivation is to become a hero and protect his honor"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/en/c/c4/Sephiroth.png",
      name: "Sephiroth",
      jobTitle: "Soldier First Class",
      bio: "He proclaimes himself to be the chosen one destined to lead the planet and was driven by a desire for godhood."
    }
  ];

  return (
    <div className="app">
      <h1>Party Members</h1>

      <div className="card-container">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile.name}
            jobTitle={profile.jobTitle}
            bio={profile.bio}
          />
        ))}
      </div>

    </div>
  );
}

export default App;