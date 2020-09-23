import React from 'react';
import './index.css';
const NavLink = (props) => {
  const { name, src, alt } = props;
  return (
    <li className="header__nav">
      <a className="header__nav-link" href={src} alt={alt}>
        {name}
      </a>
    </li>
  );
};

export default NavLink;
