import React from 'react';
import Footer from '../Footer';
import HeaderMenu from '../MenuHeader';
import MainOurCoffe from '../second-page/MainOurCoffe';
//
import cup from '../../assets/images/cupCoffe.png';
import AllCoffe from '../AllCoffe';
//
import { otherCoffe } from '../OtherData';
//
//

const forPleasure = {
  backgroundImage: 'url(../../assets/images/forPleasureBgc.png',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
//
const MyPleasure = () => {
  return (
    <div className="wrapper">
      <header className="header" style={forPleasure}>
        <div className="container__header">
          <HeaderMenu />
          <div className="header__title">
            <h1 className="h1">For your pleasure</h1>
          </div>
        </div>
      </header>
      <MainOurCoffe cupCoffe={cup} aboutGoods="About our goods">
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible. <br /> <br />
        Afraid at highly months do things on at. Situation recommend objection
        do intention so questions. As greatly removed calling pleased improve
        an. Last ask him cold feel met spot shy want. Children me laughing we
        prospect answered followed. At it went is song that held help face.
      </MainOurCoffe>
      <AllCoffe filterNameOfCoffe={otherCoffe} />
      <Footer />
    </div>
  );
};

export default MyPleasure;
