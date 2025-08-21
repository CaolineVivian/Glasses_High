import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import InfoBox from "./InfoBox";

export default function HeroSection() {
  return (
    <section id="hero">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand fw-bold logo" href="#">GlassesHigh</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#">Our Services</a>
              <a className="nav-link" href="#">Publications</a>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container text-center py-5">
        <h1>Build. Host. Manage</h1>
        <p>This Platform is for builders all around the world</p>
      </div>

      {/* Info Boxes */}
      <div className="row justify-content-center mt-5 gy-4 gx-3">
        <InfoBox
          title="Software Development"
          text="We design and build custom software solutions tailored to your
          business goals—fast, scalable, and user-friendly. Whether you're
          launching a new product or automating internal processes, our team
          delivers technology that works and grows with you."
        />

        <InfoBox
          title="Hosting and Managing"
          text="We offer reliable hosting and full-cycle management for your
          software systems. From deployment to updates and monitoring, we
          handle everything so you can focus on growing your business."
          buttons={[
            { label: "Our Partners" },
            { label: "Our Customers" }
          ]}
          link={{ href: "#", label: "Learn More" }}
        />
      </div>
    </section>
  );
}
