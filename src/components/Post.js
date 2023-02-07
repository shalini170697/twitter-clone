import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons';
import React from 'react';
import './Post.css';

function Post({
   displayName,
   userName,
   verified,
   text,
   image,
   avatar
}) 
{
  return (
    <div className='post'>
       <div className='post_avtar'>
          <Avatar src='./profile/pic2.jpg'/>
       </div>
       <div className='post_body'>
          <div className='post_header'>
            <div className='post_headerText'>
                <h3>{displayName}
                <span className='post_headerSpecial'>
                   {verified && <VerifiedUser className='post_badge'/> } 
                    @{userName}
                </span>
                </h3>
            </div>
            <div className='post_headerDescription'>
                <p>{text}</p>
            </div>
          </div>
          <img src={image} alt='pic'/>
          <div className='post_footer'>
             <ChatBubbleOutline />
             <Repeat />
             <FavoriteBorder />
             <Publish />
          </div>
       </div>     
    </div>
  )
}

export default Post;
