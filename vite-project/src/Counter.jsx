import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount]=useState(0)
function increment(){
  if(count<20){

    setCount(20)
}
  else{
    setCount(count+1)
  }
}
function decrement(){
  if(count<=0){
    setCount(0)
  } 
    else{
      setCount(count-1)
  }
}
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter