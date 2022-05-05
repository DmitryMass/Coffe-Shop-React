import React from 'react';
import List from './first-page/NavList';
import { dataLinks } from './first-page/DataLinks';
import { Link } from 'react-router-dom';
//
import logoBlack from '../assets/images/coffeLogoBlack.png';
import coffeBeansImg from '../assets/images/coffeBeansBlack.png';
//
import './styles/footer.scss';
//
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container__content">
        <div className="footer__items">
          <div className="footer__logo">
            <Link to="/">
              <img src={logoBlack} alt="Coffe Black Logo" />
            </Link>
          </div>
          <List itemTypeColor="footer__item" links={dataLinks} />
        </div>
        <div className="footer__img">
          <img src={coffeBeansImg} alt="Coffe beans black" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
