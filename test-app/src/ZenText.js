import React, {useState, useEffect } from 'react'
import axios from 'axios'

function ZenText() {
  const [zen, setZen] = useState('')

  const fetchResource = async () => {
    const response = await axios.get(
      'https://api.github.com/zen'
    )
    console.log(response.data)
    setZen(response.data)
  }

  useEffect( () => {
    fetchResource()
  }, [])

  return (
    <div>
      {zen && 
        <>
        <h3>今日の禅</h3>
        <p data-testid="Zen">{zen}</p>
        </>
      }
    </div>
    
    
    
  )
}

export default ZenText