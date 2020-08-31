import React, { Component } from 'react';
import MenuIcon from "../../icons/BurgerIcon";
import CloseIcon from "../../icons/CloseIcon";
import './index.css';

class BurgerMenu extends Component {
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
      <div className="header__burger-menu" onClick={() => this.handleClick()}>
        {active?  < CloseIcon/> : <MenuIcon/>}
      </div>
    );
  }
}

export default BurgerMenu;