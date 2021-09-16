import React from 'react'
import Location from '../../assets/Location';
import { Link } from 'react-router-dom';

const LocationMenu = () => {
    return (
        <div className="drop-down">
          <div className="current-location">
            <Link to="#">
              <Location />
              <span>
                <h6>Use Current Location</h6>
                <p>Location blocked. Check browser/phone settings</p>
              </span>
            </Link>
          </div>
          <hr/>
          <div className="recent-location">
            <h6>Recent Locations</h6>
            <Link to="#">
              <Location />
              <span><p>India</p></span>
            </Link>
          </div>
          <hr />
          <div className="popular-location">
            <h6>Popular Locations</h6>
            <Link to="#">
              <Location />
              <span><p>Mumbai Central</p></span>
            </Link>
            <Link to="#">
            <Location />
            <span><p>Andheri East</p></span>
            </Link>
            <Link to="#">
            <Location />
            <span><p>Andheri West</p></span>
            </Link>
            <Link to="#">
            <Location />
            <span><p>Govandi</p></span>
            </Link>
          </div>
        </div>
    )
}

export default LocationMenu
