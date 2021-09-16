import React, { useState, useContext, useEffect } from "react";
import './Card.css'
import Heart from "../../assets/Heart";
import { FirebaseContext } from "../../store/Context";
import { PostContext } from "../../store/PostContext";
import {useHistory} from 'react-router-dom';

function Card() {
  const { firebase } = useContext(FirebaseContext);
  const [products, setProducts] = useState([]);
  const {setPostDetails} = useContext(PostContext);
  const history = useHistory();

  useEffect(() => {
    firebase
      .firestore()
      .collection("products")
      .get()
      .then((snapshot) => {
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setProducts(allPost);
      });
  });
  
  return (
        <div className="cards">       
          {products.map((product) => {             
            return <div className="card" key={product.id}>
              <div className="fav-btn" >
                <Heart/>
              </div>
            <div
                onClick={()=>{
                  setPostDetails(product)
                  history.push('/view')}}>
              <div className="image">
                <img src={product.url} alt="product" />
              </div>
              <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                    <span className="category">{product.category}</span>
                  <p className="name"> {product.name}</p>
                <div className="place-date">
                  <span>{product.place}</span>
                  <span>{product.createdAt}</span>
                </div>
              </div>              
            </div>     
            </div>      
          })}         
        </div>
  );
}

export default Card;
