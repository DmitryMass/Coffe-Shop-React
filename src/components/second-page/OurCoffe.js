import React from 'react';
import Footer from '../Footer';
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
    <div className="wrapper">
      <header className="header" style={ourCoffeBgc}>
        <div className="container__header">
          <HeaderMenu />
          <div className="header__title">
            <h1 className="h1">Our coffe</h1>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default OurCoffe;
