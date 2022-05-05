import React from 'react';
import HeaderMenu from '../MenuHeader';
//
//
const ourCoffeBgc = {
  backgroundImage: 'url(../../assets/images/ourCoffeBgc.png',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const OurCoffe = () => {
  return (
    <header className="header" style={ourCoffeBgc}>
      <div className="container__header">
        <HeaderMenu />
        <div className="header__title">
          <h1 className="h1">Our coffe</h1>
        </div>
      </div>
    </header>
  );
};

export default OurCoffe;
