import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {
  return (
    <div className="container-fluid py-4 p-4">
      <div className="row">
        <div className="col-md-4">
          <li className='titlee mb-2'>InstaMort</li>
          <p className='size'>Instamort is a family of companies serving all your homeownership needs.</p>
          <h5 className='text-secondary'>
            <li className='title d-inline text-dark'>InstaMort</li> Mortgage
          </h5>
          <p className='size'>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
        </div>

        <div className="col-md-3">
          <h6>Resources</h6>
          <p className='size'>Home affordability calculator</p>
          <p className='size'>Mortgage calculator</p>
          <p className='size'>Rent vs buy calculator</p>
        </div>

        <div className="col-md-3">
          <h6>Company</h6>
          <p className='size'>About us</p>
          <p className='size'>Careers</p>
          <p className='size'>FAQs</p>
        </div>

        <div className="col-md-2">
          <h6>Contact us</h6>
          <p className='size'>hello@mort.com</p>
          <p className='size'>Glossary</p>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
