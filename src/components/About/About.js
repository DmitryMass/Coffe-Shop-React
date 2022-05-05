import React from 'react';
//
import coffeBeansBlackImg from '../../assets/images/coffeBeansBlack.png';
const About = ({ children }) => {
  return (
    <div className="main__title">
      <h2 className="h2">{children}</h2>
      <img src={coffeBeansBlackImg} alt="Coffe beans black" />
    </div>
  );
};

export default About;
