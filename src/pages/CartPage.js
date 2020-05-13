import React from 'react';
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import StoreBcg from '../images/storeBcg.jpeg';

function CartPage(props) {
  console.log(props);

  return (
    <React.Fragment>
      <Hero img={StoreBcg} />
      <CartSection history={props.history} />
    </React.Fragment>
  );
}

export default CartPage;
