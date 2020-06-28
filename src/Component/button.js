import React from 'react';
import FontAwesome from 'react-fontawesome'

// Social Share component
const TwitterShare = ({ quote, author }) => {
    return (
       <React.Fragment>
         <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} rel='noopener noreferrer' target="_blank" title="Post this quote on twitter!" id='tweet-quote'>
            <FontAwesome className='twitter'/>
         </a>
       </React.Fragment>
    )
 }
 

 export default TwitterShare;