import React from 'react';
import About from '../About/About';
//
// import '../styles/main.scss';
//

const MainOurCoffe = ({ children, img, cupCoffe, aboutBeans, aboutGoods }) => {
  return (
    <>
      <main className="main main__second">
        <div className="container__content">
          <div className="main__beans">
            <div className="main__img">
              <img
                src={img ? img : cupCoffe}
                alt="Girl drink coffe (About our beans)"
              />
            </div>
            <div className="main__information">
              <About>{aboutBeans ? aboutBeans : aboutGoods}</About>
              <div className="main__description">
                <p className="main__txt">{children}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainOurCoffe;
