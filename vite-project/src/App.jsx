import React, { useEffect, useState } from 'react'

const App = () => {
  const [state,setuser]=useState("")
  useEffect(()=>{
    alert("Use effect hook is called")
})
    alert("Outside Function")
return (
  <button onClick={()=>{setState(state+1)}}>Click me {state}</button>
)
export default App