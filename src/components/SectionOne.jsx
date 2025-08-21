import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import InfoBox from "./InfoBox";

export default function SectionOne() {
  return (
    <section id="section-one">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-center align-items-stretch gap-3 mt-5">
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
          />

          <InfoBox
            title="Expert Driven Innovation"
            text="Our team provides expert technical support and innovative
            solutions to help you overcome challenges and stay ahead in your industry."
          />
        </div>
      </div>
    </section>

  );
}
