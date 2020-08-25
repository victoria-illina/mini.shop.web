import React from 'react';
import NavLink from '../NavLink';
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
    <div className="header">
      <header>
        <nav>
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
      </header>
    </div>
  );
};

export default Header;
