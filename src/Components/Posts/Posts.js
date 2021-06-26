import React from "react";
import "./Post.css";
import Card from '../Card/Card';

function Posts({favorite,setFavorite}) {
  
  return (
    <section className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <Card favorite={favorite} setFavorite={setFavorite} />
      </div>
      
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <Card />
      </div>
      <div className="load-button">
        <button>Load More</button>
      </div>
    </section>
  );
}

export default Posts;
