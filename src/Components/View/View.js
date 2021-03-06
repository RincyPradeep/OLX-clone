import React, {useState, useEffect, useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {

  const [userDetails,setUserDetails] = useState();
  const {postDetails} = useContext (PostContext);
  const {firebase} = useContext(FirebaseContext);

  useEffect(()=>{
    const {userId} = postDetails;
    firebase.firestore().collection('users').where("id", "==", userId).get().then((res)=>{
      res.forEach(doc =>{
        setUserDetails(doc.data())
      })
    })
  })

  return (
    <div className="view-parent-div container">
      <div className="image-show-div">
        <img
          src={postDetails.url}
          alt="product"
        />
      </div>
      <div className="right-section">
        <div className="product-details">
          <p>&#x20B9; {postDetails.price} </p>
          <p>{postDetails.name}</p>
          <p>{postDetails.category}</p>
            <p>{postDetails.place}</p>
            <p className="date">{postDetails.createdAt}</p>
        </div>
        { userDetails &&
              <div className="contact-details">
                <h3>Seller details</h3>
                <p>Name:   {userDetails.username}</p>
                <p>Phone:   {userDetails.phone}</p>
              </div>
        }
      </div>
    </div>
  );
}
export default View;
