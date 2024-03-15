import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [employee,setEmployee]=useState([])
  useEffect(()=>{
    axios.get(`https://hub.dummyapis.com/employee?noofRecords=&idStarts=1001`).
    then(employee=>setEmployee(employee.data)).catch(err=>console.log(err)) 
    },[])     
   
return (
  <div>
  {
    employee.map((e)=>{
      return(
        <div>
        <h1>{e.firstName}</h1>
        <h2>{e.age}</h2>
        <h3>{e.dob}</h3>
        </div>
      )
    })
  }
  </div>
)
}
export default App