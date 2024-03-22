import React from 'react'


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="A PROPOS DE MOI" text="Je suis un étudiant en première année de cycle préparatoire à l'ENSIBS à Lorient."/>
      <AboutContent />
      <Footer/>
    </div>
  );
};

export default About