import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
       <div className="content">
        <div className="column1">
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li><a href="#">kolkata</a></li>
              <li><a href="#">Mumbai</a></li>
              <li><a href="#">Chennai</a></li>
              <li><a href="#">Pune</a></li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li><a href="#">Bhubaneshwar</a></li>
              <li><a href="#">Hyderabad</a></li>
              <li><a href="#">Chandigarh</a></li>
              <li><a href="#">Nashik</a></li>
            </ul>
          </div>
        </div>
        <div className="column3">
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li><a href="#">About OLX Group</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">OLXPeople</a></li>
              <li><a href="#">Waah Jobs</a></li>
            </ul>
          </div>
        </div>
        <div className="column4">
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Legal & Privacy information</a></li>
            </ul>
          </div>
        </div>
        <div className="column5">
          <div className="heading">
            <p>FOLLOW US</p>
          </div>
          <div className="social-media-icons">           
            <div className="icon"> <a href="#"><i class="fab fa-facebook-f"></i></a></div>
            <div className="icon"> <a href="#"><i class="fab fa-instagram"></i></a></div>
            <div className="icon"> <a href="#"><i class="fab fa-twitter"></i></a></div>
            <div className="icon"> <a href="#"><i class="fab fa-youtube"></i></a></div>
          </div>
          <div className="store-icons">
            <a href="#"><img src="./Images/appstore-icon.png" alt= "appstore" /></a>
            <a href="#"><img src="./Images/playstore-icon.png" alt= "playstore" /></a>
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
