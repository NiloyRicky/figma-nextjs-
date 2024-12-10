import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div><img src="./images/Group.png"/></div>
        <div className="footer-section">
          <h4>INFOS PRATIQUES</h4>
          <ul>
            <li>À propos</li>
            <li>Livraisons & Reprises</li>
            <li>Mode d'emploi</li>
            <li>F.A.Q</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>LÉGAL</h4>
          <ul>
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>MON COMPTE</h4>
          <ul>
            <li>Accéder à mon compte</li>
            <li>Ma liste d'envie</li>
            <li>Créer un compte</li>
            <li>Mot de passe oublié</li>
          </ul>
        </div>
        <div>
        <div className="footer-social">
          <h4>NOUS SUIVRE</h4>
          <div className="social-icons">
            <a href="#" className="social-icon twitter">
                <img src="./images/twitter.png"/>
            </a>
            <a href="#" className="social-icon instagram">
            <img src="./images/insta.png"/>
            </a>
            <a href="#" className="social-icon linkedin">
            <img src="./images/linkedin.png"/>
            </a>
          </div>
        </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;