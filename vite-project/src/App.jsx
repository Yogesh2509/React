import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "./App.css"
import RecordsProject from './RecordsProject';
const App = () => {
  const [name, setName]=useState("")
  const  [email,setEmail] = useState("");
  const [data, setData] = useState([]);
  function addData(){
    setData({
      name:name,email:email
    })
  }
  return (
    <div id='app'>
      <RecordsProject/>
      <div id='heading'>
      <Stack id='container' spacing={20} direction="row">
      <TextField value={name}
      onChange={(event)=>setName(event.target.value)}
      id="outlined-basic" 
      label="Name" 
      variant="outlined" />
      <TextField value={email}
      onChange={(event)=>setEmail(event.target.value)}
      id="outlined-basic" 
      label="Email" 
      variant="outlined" />
      <Button onClick={addData} variant="contained">{<AddIcon/>}</Button>
      </Stack> 
      </div>
      <div className='data'>
        <div className='data_value'>
      <h1>Name</h1>
      <h1>Email</h1>
      <h1>Remove</h1>
      </div>
      </div>
      </div>
  )
}

export default App