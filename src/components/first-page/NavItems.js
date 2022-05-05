import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = ({ children, link, itemTypeColor }) => {
  let className = '';
  if (itemTypeColor === 'header__list-item') {
    className = `${className} header__list-item`;
  } else if (itemTypeColor === 'footer__item') {
    className = `${className} footer__item`;
  }

  return (
    <li className={className}>
      {/* <a href={link}>{children}</a> */}
      <Link to={link}>{children}</Link>
    </li>
  );
};

export default NavItems;
