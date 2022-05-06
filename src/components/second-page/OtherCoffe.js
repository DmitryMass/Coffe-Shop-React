import React from 'react';
import About from '../About/About';
import EachCoffeHeader from '../About/EachCoffe';
import Footer from '../Footer';
import { otherCoffe } from '../OtherData';
import { useParams } from 'react-router-dom';
//
//
//// Переиспользовать Для больших Иконок 2 страницы
//
const OtherCoffe = () => {
  let parametr = useParams();
  const newArticles = otherCoffe.filter(
    (each) => each.link === parametr.allCoffe
  )[0];

  if (!newArticles) return <div>404 Not Found</div>;

  return (
    <div className="wrapper">
      <EachCoffeHeader />
      <main className="eachCoffe">
        <div className="container__coffe">
          <div className="eachCoffe__box">
            <div className="eachCoffe__img">
              <img src={newArticles.imageLg} alt={newArticles.description} />
            </div>
            <div className="eachCoffe__info">
              <About>About it</About>
              <div className="eachCoffe__txt">
                <p className="eachCoffe__descriptionLg">
                  {newArticles.country}
                </p>
                <p className="eachCoffe__about">{newArticles.descriptionLg}</p>
                <p className="eachCoffe__price">{newArticles.priceLg}</p>
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
