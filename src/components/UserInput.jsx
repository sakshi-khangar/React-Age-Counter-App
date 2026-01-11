import React, { useState } from 'react'

const UserInput = () => {
    const [text,setText]=useState("hello");

    function handleChanges(e){
        setText(e.target.value);
    }


  return (
    <div id='counter-container'>
        <input value={text} onChange={handleChanges} />
        <p>You Typed: {text}</p>
        <button onClick={()=>{setText('hello')}}>Reset</button>     
    </div>
  )
}

export default UserInput
