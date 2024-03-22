import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
  <div>
    <Navbar/>
    <HeroImg2 heading="CONTACT." text="contactez moi si vous voulez en apprendre plus."/>
    <Footer/>
  </div>
  );
};

export default Contact