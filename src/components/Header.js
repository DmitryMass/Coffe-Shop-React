import React from 'react';
//
import './first-page/header.scss';
//
import coffeBeansWhite from '../assets/images/coffeBeansWhite.png';
//
import { Link } from 'react-router-dom';
import HeaderMenu from './MenuHeader';

//
// svg
// import test from '../assets/icons/test.svg';
// Need loader for this
// Так Же заходя в Любой сцсс\цсс файл, нельзя сделать
// background-img: url(....) не находит файл или просит тоже загрузчик
//

const headerBgc = {
  backgroundImage: 'url(../assets/images/mainBg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Header = () => {
  return (
    <header className="header" style={headerBgc}>
      <div className="container__header">
        <HeaderMenu />
        {/* Need Loader for SVG */}
        {/* <object data={test} type=""></object> */}
        <div className="header__main">
          <h1 className="h1">Everything You Love About Coffee</h1>
          <img src={coffeBeansWhite} alt="Coffe beans white" />
          <p className="header__subtitle">
            We makes every day full of energy and taste <br /> Want to try our
            beans?
          </p>
          <Link to="/ourcoffe" className="header__more">
            More
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
