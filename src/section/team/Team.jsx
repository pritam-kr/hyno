import React from "react";
import "./style.css";

const Team = () => {
  const team = [
    {
      name: "Peregrin Sandheaver",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui",
      url: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg",
    },
    {
      name: "Selina Brandagamba",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8C0eZ51cUVq9NO5x1H7Avc0eOMZrACwC_gIYztkQCcjMX_Ma5qf1fNWkSAoyU00YASkQ&usqp=CAU",
    },
    {
      name: "Valeriano Hernandes",
      bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J3yhlj3UJ9cB6nSDfTcfnqHv4lelnksbKSuctrKHKdkWHlsXIFm7t900yN0x4KwUnHg&usqp=CAU",
    },
     
  ];

  
  return (
    <section className="section feature-section">
      <header className="section-header">
        <h1 className="section-heading">Our Team</h1>
        <div className="section-wrapper team-wrapper">
          {team.map((each, i) => {
            return (
              <div className="team-info" key={i}>
                <img src={each.url} alt="" className="team-avatar" />
                <h2 className="team-member-name">{each.name}</h2>
                <p className="team-member-name text-md">{each.bio}</p>
              </div>
            );
          })}
        </div>
      </header>
    </section>
  );
};

export { Team };
