
import React, {useEffect, useState} from 'react'
import './Feed.css';
import db from './firebase';
import Post from './Post';
import TweetBox from './TweetBox';

function Feed() {
   const [posts, setPosts] = useState([]);

   useEffect(() =>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => doc.data()))
  })
   }, [])
  return (
    <div className='feed'>
      <div className='feed_header'>
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map(post =>(
        <Post 
          key={post.key}
          displayName = {post.displayName}
          userName = {post.userName}
          verified = {post.verified}
          text = {post.text}
          image = {post.avatar}
        />
      ))}
      
    
    {/* Home */}
    {/* Tweetbox */}
    {/* post */}
      
    </div>
  )
}

export default Feed;
