import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import "./App.css"
const App = () => {
  return (
    <Stack id='container'spacing={2} direction="row">
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <Button variant="contained">{<AddIcon/>}</Button>
      </Stack> 
  )
}

export default App