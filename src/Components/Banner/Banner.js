import React ,{ useState } from 'react';
import './Banner.css';
import Categories from '../Categories/Categories';

function Banner() {
  let [toggleCategory,setToggleCategory] = useState(false)
  
  const showCategory =()=>{
    if(toggleCategory){
      setToggleCategory(false)
    }else{
      setToggleCategory(true)
    }
  }
  return (
    <div className="banner-parent-div">
      <div className="banner-child-div">
        <div className="menubar container">
          <div className="category-menu">
            <span>ALL CATEGORIES</span>
            {/* <Arrow onClick={showCategory}></Arrow>  */}
            <span><i className="fas fa-caret-down" onClick={showCategory}></i></span>
            {
              toggleCategory && <Categories />
            }
          </div>
          <div className="other-quick-options">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale:Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: Houses & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt="banner"
          />
        </div>
      </div>     
    </div>
  );
}

export default Banner;
