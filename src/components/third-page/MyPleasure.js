import React from 'react';
import HeaderMenu from '../MenuHeader';

const forPleasure = {
  backgroundImage: 'url(../../assets/images/forPleasureBgc.png',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const MyPleasure = () => {
  return (
    <header className="header" style={forPleasure}>
      <div className="container__header">
        <HeaderMenu />
        <div className="header__title">
          <h1 className="h1">For your pleasure</h1>
        </div>
      </div>
    </header>
  );
};

export default MyPleasure;
