import React from "react";
import { ProductConsumer } from "../context";

function HomePage() {
  return (
    <React.Fragment>
      <ProductConsumer>
        {(value) => {
          return <h1>Hello from home page</h1>;
        }}
      </ProductConsumer>
    </React.Fragment>
  );
}

export default HomePage;
