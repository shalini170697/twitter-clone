import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react'
import './TweetBox.css';
import db from './firebase'
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) =>{
     e.preventDefault();

     db.collection('posts').add({
      displayName: "ShaliniYadav",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      userName:  "shaili",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "./profile/pic2.jpg"
     })

     setTweetMessage("")
     setTweetImage("")
  }
  return (
    <div className='tweetBox'>
      <form>
         <div className='tweetBox_input'>
            <Avatar src='./profile/pic2.jpg' />
            <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value = {tweetMessage}
                type="text"
                placeholder="What's happening"
            />
         </div>
         <input 
            onChange={(e) => setTweetImage(e.target.value)}
            value = {tweetImage}
            className='tweetBox_imageInput'
            placeholder='optional: Enter image URL'
         />
         <Button onClick={sendTweet} className='tweetBox_tweetButton'>Tweet</Button>
      </form>
      
    </div>
  )
}

export default TweetBox;
