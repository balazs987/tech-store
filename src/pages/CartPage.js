import React from 'react';
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import StoreBcg from '../images/storeBcg.jpeg';

function CartPage() {
  return (
    <React.Fragment>
      <Hero img={StoreBcg} />
      <CartSection />
    </React.Fragment>
  );
}

export default CartPage;
