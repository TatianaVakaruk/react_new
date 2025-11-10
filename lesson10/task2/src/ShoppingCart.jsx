import React, { Component } from 'react';
import ProductList from './ProductList.jsx';
import CartTitle from './CartTitle.jsx';

class ShoppingCart extends Component {
  state = {
    cardItems: [
      {
        id: '1',
        name: 'iPhone 11',
        price: 999,
      },
      {
        id: '2',
        name: 'iPad Pro',
        price: 799,
      },
    ],
  };
  render() {
    const count = this.state.cardItems.length;
    return (
      <div className="column">
        <CartTitle userName={this.props.userData.firstName} count={count} />
        <ProductList cartItems={this.state.cardItems} />
      </div>
    );
  }
}
export default ShoppingCart;
