import React from 'react';
import NavLink from './NavLink';
import BurgerMenu from "./BurgerMenu";
import CartButton from "./CartButton";
import './index.css';


const links = [
  {
    name: 'Home',
    src: '/',
    alt: 'home',
  },
  {
    name: 'Shop',
    src: '/shop',
    alt: 'shop',
  },
  {
    name: 'Magazine',
    src: '/magazine',
    alt: 'magazine',
  },

];
const Header = () => {
  return (
      <header className="header">
        <nav className="header__container">
          <BurgerMenu/>
          <menu className="header__menu">
            {links.map((item) => {
              return (
                <NavLink
                  name={item.name}
                  src={item.src}
                  alt={item.alt}
                />
              );
            })}
          </menu>
        </nav>
        <div className="header__container">
        <CartButton/>
          <p className="header__container-text">Login</p>
      </div>
      </header>
  );
};

export default Header;
