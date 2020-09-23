import React from 'react';
const CartIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 25 26"
    >
      <g
        fill="none"
        fill-rule="evenodd"
        stroke="#131313"
        stroke-width="2"
        transform="translate(1 1)"
      >
        <path d="M0 0L2.727 3.29 2.727 13.161 1.091 17 24 17" />
        <path d="M3 3L22 3 18.743 13 3 13" />
        <circle cx="3" cy="22" r="2" stroke-linecap="square" />
        <circle cx="21" cy="22" r="2" stroke-linecap="square" />
      </g>
    </svg>
  );
};
export default CartIcon;
