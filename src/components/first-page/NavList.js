import React from 'react';
import NavItems from './NavItems';
//

const List = ({ links, itemTypeColor }) => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {links.map((item) => {
          return (
            <NavItems
              itemTypeColor={itemTypeColor}
              link={item.link}
              key={item.title}
            >
              {item.title}
            </NavItems>
          );
        })}
      </ul>
    </nav>
  );
};

export default List;
