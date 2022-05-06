import React from 'react';

//
import './filterPanel.scss';
//

const FilterPanel = () => {
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
            />
          </div>
          <div className="filter__btn">
            <p className="filter__hint">Or filter</p>
            <span id="All">All</span>
            <span id="Brazil">Brazil</span>
            <span id="Kenya">Kenya</span>
            <span id="Columbia">Columbia</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
