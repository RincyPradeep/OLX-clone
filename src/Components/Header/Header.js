import React, { useContext, useState } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import Location from '../../assets/Location';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
function Header() {
  const {user} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history=useHistory();
  let [toggle,setToggle] = useState(false)

  const checkToggle =() =>{
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
    }
  }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <span onClick={checkToggle}>
            <input type="text" placeholder="Search city, area or local" />
            {toggle ? <i class="fas fa-sort-up"></i> : <i class="fas fa-caret-down"></i>}
            {/* <Arrow></Arrow> */}
          </span>
        {/* ------------ */}
        {toggle &&
        <div className="drop-down">
          <div className="current-location">
            <a href="#">
              <Location />
              <span>
                <h6>Use Current Location</h6>
                <p>Location blocked. Check browser/phone settings</p>
              </span>
            </a>
          </div>
          <hr/>
          <div className="recent-location">
            <h6>Recent Locations</h6>
            <a href="#">
              <Location />
              <span><p>India</p></span>
            </a>
          </div>
          <hr />
          <div className="popular-location">
            <h6>Popular Locations</h6>
            <a href="#">
              <Location />
              <span><p>Mumbai Central</p></span>
            </a>
            <a href="#">
            <Location />
            <span><p>Andheri East</p></span>
            </a>
            <a href="#">
            <Location />
            <span><p>Andheri West</p></span>
            </a>
            <a href="#">
            <Location />
            <span><p>Govandi</p></span>
            </a>
          </div>
        </div>
        }
        </div>

        <div className="productSearch">
            <input
              type="text"
              placeholder="Find cars,mobile phones and more..."
            />
          
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {/* <span>{user? `Welcome ${user.displayName}` : 'Login'}</span> */}
          <span>{user? `Welcome ${user.displayName}` : <Link to="/login" className="login-link" >Login</Link>}</span>
          <hr />
        </div>
        {user && <span className="logout" onClick={()=>{
                          firebase.auth().signOut();
                          history.push('/login')
                        }}>Logout</span>}

        <div className="sellMenu" onClick={()=>history.push('/create')}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
