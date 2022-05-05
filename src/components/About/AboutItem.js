import React from 'react';
import { Link, useParams } from 'react-router-dom';
//

const CoffeItem = () => {
  let params = useParams();
  console.log(params);
  return (
    <div className="section__best">
      <Link to="/">Back</Link>
    </div>
  );
};

export default CoffeItem;
