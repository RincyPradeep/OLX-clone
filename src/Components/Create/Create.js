import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import {FirebaseContext, AuthContext} from '../../store/Context'
import {useHistory} from 'react-router-dom'

const Create = () => {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);
  const {user} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [place,setPlace] = useState('');
  const [image,setImage] = useState(null);

  const date = new Date();

  const handleSubmit = () =>{
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      ref.getDownloadURL().then((url)=>{
        console.log(url)
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          place,
          url,
          userId : user.uid,
          createdAt : date.toDateString()
        })
      })
    })
    history.push('/')
  }

  // ---------Rendering------------------
  return (
    <div className="createParentDiv">      
        <div className="centerDiv">    
        <h3>POST YOUR AD</h3>      
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              name="name"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              onChange={(e)=>setCategory(e.target.value)}
              required
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input className="input" type="text" id="price" name="price"
                  onChange={(e)=>setPrice(e.target.value)}
                  required />
            <br />
            <label htmlFor="place">Place</label>
            <br />
            <input className="input" type="text" id="place" name="place"
                  onChange={(e)=>setPlace(e.target.value)}
                  required />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : '' }></img>
          
            <br />
            <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} required/>
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
     
    </div>
  );
};

export default Create;
