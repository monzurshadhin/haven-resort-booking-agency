import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
             <footer id="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div className="d-flex footer-location-div">
              <img
                className="card-icon"
                src="logos/map-marker-alt-solid 1.png"
                alt=""
              />
              <p className="footer-location">
               
              <i className="fas fa-map-marker-alt me-2"></i>  Rajarbag, Motijheel, Dhaka, Bangladesh <br />
              <i className="fas fa-phone me-2"></i>  Phone: 0172839382 <br />
              <i className="fas fa-envelope me-2"></i>  E-mail: epicresort@gmail.com
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="company">
                  <h5>Company</h5>
                  <li>About</li>
                  <li>Site Map</li>
                  <li>Support Center</li>
                  <li>Terms Condition</li>
                  <li>Submit Listing</li>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="quick-links">
                  <h5>Quick Links</h5>
                  <li>Extra services</li>
                  <li>Contact</li>
                  <li>Terms Conditions</li>
                  <li>Our blog</li>
                  <li>Gallery</li>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="about-us">
                  <h5>About us</h5>
                  <p>
                    We are the top resort booking agency <br />
                    in Bangladesh, with agents <br />
                    available to answer any <br />
                    question 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;