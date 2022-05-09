import React from 'react';
import { Link } from 'react-router-dom';
import { otherCoffe } from './OtherData';

//
import './second-page/OtherCoffe.scss';
//
//

const AllCoffe = ({ type }) => {
  return (
    <section className="section__allCoffe">
      <div className="container__content flex__allCoffe">
        {type.map((eachCoffe) => {
          return (
            <Link
              to={eachCoffe.link}
              key={eachCoffe.link}
              className="section__allCoffe-item"
              type={eachCoffe.country}
            >
              <div className="allCoffe__img">
                <img src={eachCoffe.image} alt={eachCoffe.description} />
              </div>
              <div className="allCoffe__descrip">
                <p className="allCoffe__description">{eachCoffe.description}</p>
                <p className="allCoffe__country">{eachCoffe.country}</p>
                <p className="allCoffe__price">{eachCoffe.price}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AllCoffe;
