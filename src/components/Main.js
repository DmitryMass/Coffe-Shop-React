import React from 'react';
import About from './About/About';
import SectionBestCoffe from './first-page/BestCoffe';
//
import { mainAboutData } from './OtherData';
//
import './styles/main.scss';
//

const Main = () => {
  return (
    <main className="main">
      <div className="container__about">
        <div className="main__about">
          <About>About Us</About>
          <div className="main__info">
            <p className="main__txt">{mainAboutData.paragpraphOne}</p> <br />
            <p className="main__txt">{mainAboutData.paragpraphTwo}</p>
          </div>
        </div>
        <SectionBestCoffe />
      </div>
    </main>
  );
};

export default Main;
