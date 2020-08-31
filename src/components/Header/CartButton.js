import React, { Component } from 'react';
import CartIcon from "../../icons/CartIcon";
import './index.css';

class CartButton extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  handleClick() {
    const { active } = this.state;
    this.setState(() => {
      return { active: !active };
    });
  }

  render() {
    const { active } = this.state;
    return (
      <button className="header__cart-btn" onClick={() => this.handleClick()}>
        <CartIcon/>
      </button>
    );
  }
}

export default CartButton;