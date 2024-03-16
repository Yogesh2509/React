import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Employee from './Employee';

const App = () => {
  const [state,setState]=useState(0);
  const [employee,setEmployee]=useState([])
  useEffect(()=>{
    async function getData(){
      const data = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const dataJson=await data.json();
      setEmployee(dataJson)
    }
   // axios.get(`https://hub.dummyapis.com/employee?noofRecords=&idStarts=1001`).
  //then(employee=>setEmployee(employee.data)).catch(err=>console.log(err)) 
    getData();
  },[state])     
   
return (
  <div>
    <button onClick={()=>{setState(state+5)}}>Load More{state}</button>
    <table>
      <tr>
        <th>First Name</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </table>
  {
    employee.map((e)=>{
      return(
     <div>
      <Employee
      Name={e.firstName}
      age={e.age}
      email={e.email}
      />
     </div>
      )
    })
  }
  </div>
)
}
export default App