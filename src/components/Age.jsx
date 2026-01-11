import React, { useState } from 'react'

const Age = () => {
    const [age,setAge]=useState(0);

    function increment(){
        setAge(age+1);
    }
  return (
    <div id='counter-container'>
        <h3>Your Age is: {age}</h3>     
        <button onClick={increment}>+1</button>
    </div>
  )
}

export default Age
