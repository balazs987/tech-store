import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about us img"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quam deleniti, odit commodi assumenda quis sequi
              facere iste! Porro, atque?
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              nisi esse officiis itaque voluptatem quae delectus eveniet
              quisquam quod laborum!
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
