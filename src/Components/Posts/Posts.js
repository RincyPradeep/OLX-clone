import React from "react";
import "./Post.css";
import Card from '../Card/Card';

function Posts() {
  
  return (
    <section className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <Card />
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
