import "./FooterStyles.css"
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4><FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }}/>3 Rue Nicolas Appert, 56100 Lorient</h4>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }}/>
                07 83 90 89 31</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "1rem" }}/>
                marceau.lcx@gmail.com</h4>
                </div>
                <div className="social">
                <h4><FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }}/>Marceau Lacroix 👨‍💻</h4>
                </div>
            </div>
            <div className="right">
                <h4>A propos de moi</h4>
                <p>Je m'appelle Marceau Lacrois. Je suis un étudiant en première année de cycle préparatoire à l'ENSIBS de Lorient, j'aspire à travailler dans la cybersécurité.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer