// components/MenuItem.js
import React from 'react';

const Item = ({ item, convertPrice, currency }) => {
  return (
    <li className="tem">
      <span>{item.name}</span>
      <span className="price">
        {currency} {convertPrice(item.priceUSD)}
      </span>
    </li>
  );
};

export default Item;
