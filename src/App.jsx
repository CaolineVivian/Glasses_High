import React from "react";
import HeroSection from "./components/HeroSection";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <HeroSection />
      <section className="another">
        <div className="container py-5">
          <h2 className="text-center">Another Section</h2>
          <p className="text-muted text-center">
            This is just a placeholder section styled with Bootstrap.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
