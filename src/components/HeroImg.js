import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>JE SUIS UN ETUDIANT</p>
            <h1>Passionné en informatique</h1>
            <div>
                <Link to="/project" className="btn">Projets</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg