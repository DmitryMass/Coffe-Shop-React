import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import About from './About';
import { bestCoffeData } from './BestCoffeData';
import EachCoffeHeader from './EachCoffe';
//
import './aboutEach.scss';
//
const CoffeItem = () => {
  let params = useParams();
  const articles = bestCoffeData.filter(
    (coffeItem) => coffeItem.link === params.bestCoffe
  )[0];

  if (!articles) return <div>404 Not Found</div>;

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

export default CoffeItem;
