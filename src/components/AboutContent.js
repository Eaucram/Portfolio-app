import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import React from 'react'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.jpg"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Qui suis-je ?</h1>
            <p> Je suis un étudiant en première année de cyle préparatoie à l'ENSIBS Lorient. Je suis passionné d'informatique et connais de nombreux langages de programmations telles que : le python, le HTML/CSS, le JavaScript, le C.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React2} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React1} className="img" alt="true"/>
                </div>
            </div>
        </div>
    
    
    </div>
    
  )
}

export default AboutContent