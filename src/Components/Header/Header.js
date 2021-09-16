import React, { useContext, useState } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import LocationMenu from '../LocationMenu/LocationMenu';

function Header() {
  const {user} =useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const history=useHistory();
  let [toggle,setToggle] = useState(false)
  let [language,setLanguage] = useState('ENGLISH')
  let [languageToggle,setLanguageToggle] = useState(false)
  let [profileToggle,setProfileToggle] = useState(false)

  const checkToggle =() =>{
    if(toggle){
      setToggle(false)
    }else{
      setToggle(true)
      setLanguageToggle(false)
      setProfileToggle(false)
    }
  }

  const changeLanguage = ()=>{
    if(languageToggle){
      setLanguageToggle(false)
    }else{
      setLanguageToggle(true)
      setToggle(false)
      setProfileToggle(false)
    }
  }

  const showProfile =()=>{
    if(profileToggle){
      setProfileToggle(false)
    }else{
      setProfileToggle(true)
      setLanguageToggle(false)
      setToggle(false)
    }

  }

  return (
    <div className="header-parent-div">
      <div className="header-child-div">
        <div className="brand-name">
          <OlxLogo></OlxLogo>
        </div>
        <div className="place-search">
          <Search></Search>
          <span onClick={checkToggle}>
            <input type="text" placeholder="Search city, area or local" />
            {toggle ? <i className="fas fa-sort-up"></i> : <i className="fas fa-caret-down"></i>}
          </span>
        {toggle && <LocationMenu/> }
        </div>

        <div className="product-search">
            <input type="text" placeholder="Find cars,mobile phones and more..." />          
          <div className="search-action">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> {language} </span>
            <span onClick={changeLanguage}>
              {languageToggle ? <i className="fas fa-sort-up"></i> : <i className="fas fa-caret-down"></i>}
            </span>        
          {languageToggle &&
            <div className='language-drop-down'>
              <h6 className='current-language' onClick={()=>setLanguage('ENGLISH')}>ENGLISH {language === 'ENGLISH' ? <span><i className="fas fa-check"></i></span>:''}</h6>
              <h6 className='current-language' onClick={()=>setLanguage('HINDI')}>HINDI {language === 'HINDI' ? <span><i className="fas fa-check"></i></span> : ''}</h6>
            </div>
          }
        </div>
        <div className="login-page">
          <span>{user? `${user.displayName}`: <Link to="/login" className="login-link" >Login</Link>}</span>
          <span onClick={showProfile}>{user ? <i className="fas fa-caret-down"></i> : ''}</span>
        {profileToggle &&
        <div className="profile-menu">
          <Link to='#'>My Ads</Link>
          <Link to='#'>Buy Business Packages</Link>
          <Link to='#'>Bought Packages & Billing</Link>
          <Link to='#'>Help</Link>
          <Link to='#'>Setting</Link>
          <Link to='#'>Install OLX Light App</Link>
          <Link to='#'><span className="logout" onClick={()=>{
                          firebase.auth().signOut();
                          history.push('/login')
                        }}>Logout</span></Link>
        </div>
        }
        </div>

        <div className="sell-menu" onClick={()=>history.push('/create')}>
          <SellButton></SellButton>
          <div className="sell-menu-content">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
