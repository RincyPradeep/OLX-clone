import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-parent-div">
       <div className="content">
        <div className="column1">
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li><Link to="#">kolkata</Link></li>
              <li><Link to="#">Mumbai</Link></li>
              <li><Link to="#">Chennai</Link></li>
              <li><Link to="#">Pune</Link></li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li><Link to="#">Bhubaneshwar</Link></li>
              <li><Link to="#">Hyderabad</Link></li>
              <li><Link to="#">Chandigarh</Link></li>
              <li><Link to="#">Nashik</Link></li>
            </ul>
          </div>
        </div>
        <div className="column3">
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li><Link to="#">About OLX Group</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Contact Us</Link></li>
              <li><Link to="#">OLXPeople</Link></li>
              <li><Link to="#">Waah Jobs</Link></li>
            </ul>
          </div>
        </div>
        <div className="column4">
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li><Link to="#">Help</Link></li>
              <li><Link to="#">Sitemap</Link></li>
              <li><Link to="#">Legal & Privacy information</Link></li>
            </ul>
          </div>
        </div>
        <div className="column5">
          <div className="heading">
            <p>FOLLOW US</p>
          </div>
          <div className="social-media-icons">           
            <div className="icon"> <Link to="#"><i className="fab fa-facebook-f"></i></Link></div>
            <div className="icon"> <Link to="#"><i className="fab fa-instagram"></i></Link></div>
            <div className="icon"> <Link to="#"><i className="fab fa-twitter"></i></Link></div>
            <div className="icon"> <Link to="#"><i className="fab fa-youtube"></i></Link></div>
          </div>
          <div className="store-icons">
            <Link to="#"><img src="./Images/appstore-icon.png" alt= "appstore" /></Link>
            <Link to="#"><img src="./Images/playstore-icon.png" alt= "playstore" /></Link>
          </div>
        </div>
      </div> 
      <div className="footer">
        <div className="item">
          <p>Other Countries Pakistan - South Africa - Indonesia</p>
          <p>RP © 2006-2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
