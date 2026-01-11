import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount]=useState(0);                        //count is variable and setcount is function
  return (
    <div id='counter-container'>
        <h4>You have click {count} times</h4>
        <button onClick={()=>{setCount(count+1)}}>Click me!</button>
    </div>
  )
}

export default Counter
