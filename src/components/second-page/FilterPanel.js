import React from 'react';
// import { useState } from 'react/cjs/react.production.min';
//
import './filterPanel.scss';
//

const FilterPanel = ({ filterCoffe }) => {
  // const [value, setValue] = useState('');

  // const filterNameOfCoffe = type.filter((item) =>
  //   item.description.toLowerCase().includes(value.toLowerCase())
  // );

  return (
    <div className="filter">
      <div className="container__content">
        <div className="filter__panel">
          <div className="filter__search">
            <p className="filter__for">Looking for</p>
            <input
              className="filter__input"
              type="text"
              placeholder="start typing here..."
              // onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div className="filter__btn">
            <p className="filter__hint">Or filter</p>
            <span
              onClick={() => filterCoffe('all')}
              id="all"
              className="filter__btns"
            >
              All
            </span>
            <span
              onClick={() => filterCoffe('Brazil')}
              id="Brazil"
              className="filter__btns"
            >
              Brazil
            </span>
            <span
              onClick={() => filterCoffe('Kenya')}
              id="Kenya"
              className="filter__btns"
            >
              Kenya
            </span>
            <span
              onClick={() => filterCoffe('Columbia')}
              id="Columbia"
              className="filter__btns"
            >
              Columbia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
