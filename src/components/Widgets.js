import React from 'react'
import './Widgets.css';
import{
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import Search from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className='widgets'>
       <div className='widgets_input'>
         <Search className='widgets_searchIcon'/>
         <input type="text" placeholder="Search Twitter" />
       </div>
       <div className='widgets_widgetContainer'>
           <h2>What's happening</h2>
       </div>
       <TwitterTweetEmbed 
          tweetId={"732236667206041600"}
       />
       <TwitterTimelineEmbed 
          sourceType = "profile"
          screenName = "yadavshalini056"
          options={{height: 400}}
       />
       <TwitterShareButton 
          url={"https://facebook.com/ShaliniYadav "}
          options={{text: "Subscribe my channel"}}

       />
           
    </div>
  )
}

export default Widgets;
