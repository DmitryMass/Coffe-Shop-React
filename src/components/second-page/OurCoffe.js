import React from 'react';
import EachCoffeHeader from '../About/EachCoffe';
import Footer from '../Footer';
import MainOurCoffe from './MainOurCoffe';
//
//
import girldWithCoffe from '../../assets/images/aboutBeansGirl.jpg';

const OurCoffe = () => {
  return (
    <div className="wrapper">
      <EachCoffeHeader />
      <MainOurCoffe img={girldWithCoffe}>
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible. <br /> <br />
        Afraid at highly months do things on at. Situation recommend objection
        do intention so questions. As greatly removed calling pleased improve
        an. Last ask him cold feel met spot shy want. Children me laughing we
        prospect answered followed. At it went is song that held help face.
      </MainOurCoffe>
      <Footer />
    </div>
  );
};

export default OurCoffe;
