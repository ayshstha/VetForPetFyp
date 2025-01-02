import React from "react";
import AdoptionComponent from "../../components/Adoption/Adoption";
import Hero from "../../components/Hero/Hero";
import "./Adoption.css";

const Adoption = () => {
  const availableDogs = [
    { name: "Bruno", image: "/dogavailable1.jpeg" },
    { name: "Khaire", image: "/dogavailable2.jpeg" },
    { name: "Tiger", image: "/dogavailable3.jpeg" },
    { name: "Golveda", image: "/dogavailable4.jpeg" },
    { name: "Sheru", image: "/dogavailable5.jpeg" },
    { name: "Prabesh", image: "/dogavailable6.jpeg" },
    { name: "Prabesh", image: "/dogavailable6.jpeg" },
  ];

  return (
    <div style={{ marginTop: "80px", textAlign: "center" }}>
      <AdoptionComponent showButton={false} />

      <section className="available-dogs">
        <h2>Dogs Available for Adoption</h2>
        <div className="dogs-grid">
          {availableDogs.map((dog, index) => (
            <div key={index} className="dog-card">
              <div className="dog-image">
                <img src={dog.image} alt={dog.name} />
              </div>
              <h3>{dog.name}</h3>
              <button className="meet-btn">Meet</button>
            </div>
          ))}
        </div>
      </section>

      <section className="mission">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            At Vet for Your Pet, we're committed to giving every stray dog a
            chance at a better life. Our team works tirelessly to rescue, heal,
            and care for dogs in need, ensuring they're ready to find loving,
            forever homes. Every dog deserves safety, love, and a family to call
            their own.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Adoption;
