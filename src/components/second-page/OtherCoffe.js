import React from 'react';
import About from '../About/About';
import EachCoffeHeader from '../About/EachCoffe';
import Footer from '../Footer';
import { otherCoffe } from '../OtherData';
import { useParams } from 'react-router-dom';
//
//
//
const OtherCoffe = () => {
  let params = useParams();

  return (
    <div className="wrapper">
      <EachCoffeHeader />
      <main className="eachCoffe">
        <div className="container__coffe">
          <div className="eachCoffe__box">
            <div className="eachCoffe__img">
              <img src={articles.imageLg} alt={articles.description} />
            </div>
            <div className="eachCoffe__info">
              <About>About it</About>
              <div className="eachCoffe__txt">
                <p className="eachCoffe__descriptionLg">
                  {articles.descriptionLg}
                </p>
                <p className="eachCoffe__about">{articles.description}</p>
                <p className="eachCoffe__price">{articles.priceLg}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OtherCoffe;
