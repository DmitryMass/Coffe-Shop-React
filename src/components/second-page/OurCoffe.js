import React from 'react';
import EachCoffeHeader from '../About/EachCoffe';
import Footer from '../Footer';
import MainOurCoffe from './MainOurCoffe';
//
//
import girldWithCoffe from '../../assets/images/aboutBeansGirl.jpg';
import FilterPanel from './FilterPanel';
import AllCoffe from '../AllCoffe';
//
import { useState } from 'react';
import { otherCoffe } from '../OtherData';

const OurCoffe = () => {
  const [type, setType] = useState(otherCoffe);
  const filterCoffe = (status) => {
    if (status === 'all') {
      setType(otherCoffe);
    } else {
      let newCoffe = [...otherCoffe].filter((item) => item.country === status);
      setType(newCoffe);
    }
  };

  return (
    <div className="wrapper">
      <EachCoffeHeader />
      <MainOurCoffe img={girldWithCoffe} aboutBeans="About our beans">
        Extremity sweetness difficult behaviour he of. On disposal of as
        landlord horrible. <br /> <br />
        Afraid at highly months do things on at. Situation recommend objection
        do intention so questions. As greatly removed calling pleased improve
        an. Last ask him cold feel met spot shy want. Children me laughing we
        prospect answered followed. At it went is song that held help face.
      </MainOurCoffe>
      <FilterPanel type={type} filterCoffe={filterCoffe} />
      <AllCoffe type={type} />
      <Footer />
    </div>
  );
};

export default OurCoffe;
