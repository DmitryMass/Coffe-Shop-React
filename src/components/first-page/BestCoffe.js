import React from 'react';
import { bestCoffeData } from '../About/BestCoffeData';
import { Link } from 'react-router-dom';
//
//
//
//

const SectionBestCoffe = () => {
  return (
    <section className="section">
      <div className="container__content">
        <div className="section__title">
          <h2 className="h2">Our best</h2>
        </div>
        <div className="section__bestCoffe">
          {bestCoffeData.map((coffeItem) => {
            return (
              <Link
                to={coffeItem.link}
                key={coffeItem.description}
                className="section__bestCoffe-item"
              >
                <div className="coffe__img">
                  <img src={coffeItem.image} alt={coffeItem.description} />
                  <p className="coffe__description">{coffeItem.description}</p>
                  <p className="coffe__price">{coffeItem.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionBestCoffe;
