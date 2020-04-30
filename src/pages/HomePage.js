import React from "react";
import Hero from "../components/Hero";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <React.Fragment>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products" className="main-link" style={{ margin: "2rem" }}>
          our products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </React.Fragment>
  );
}

export default HomePage;
