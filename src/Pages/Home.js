import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';

function Home({favorite,setFavorite}) {

  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts favorite={favorite} setFavorite={setFavorite} />
      <Footer />
    </div>
  );
}

export default Home;
 