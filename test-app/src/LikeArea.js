import React, { useState } from 'react';

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0)
  
  function increaseLikeHandler() {
    setLikeCount(function(prev) {
      return prev + 1
    })
  }
  
  function decreaseLikeHandler() {
    setLikeCount(prev => {
      if (prev > 0) {
        return prev - 1
      }
      return 0
    })
  }
  
  return (
    <>
      <button onClick={increaseLikeHandler}>Increase likes</button>
      <button onClick={decreaseLikeHandler}>Decrease likes</button>
      <h2>This page has been liked {likeCount} times.</h2>
    </>
  )
}

export default LikeArea