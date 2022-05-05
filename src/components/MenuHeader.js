import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/images/coffeLogoWhite.png';
import { dataLinks } from './first-page/DataLinks';
import List from './first-page/NavList';

const HeaderMenu = () => {
  return (
    <div className="header__top">
      <div className="header__logo">
        <Link to="/" className="logo">
          <img src={logoWhite} alt="White coffe beans logo" />
        </Link>
      </div>
      <List itemTypeColor="header__list-item" links={dataLinks} />
    </div>
  );
};

export default HeaderMenu;
