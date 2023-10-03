
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlertUi from '../../../UI/AlertUi';
import { useState } from 'react';
import { Button } from '@mui/material';
import React from 'react';
import { baseToken, baseUrl } from "../config/config";

const AddCategory = () => {
  const [category , setCategory] = useState('');
  const [success , setCuccess] = useState(false);
  //@ts-ignore
  const handleAdd = async () =>{
    const url= `${baseUrl}/api/category`;
    const postData = {'name':category}

        try {
            const response = await fetch(url,{
                method:'POST',
                headers: {
                    'Authorization': `Bearer ${baseToken}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(postData),
            });
            if(response.ok){
                const data = await response.json();
                setCategory('');
                setCuccess(true);
            }else {
                const data = await response.json();
                console.log(data)
                console.log("auth nedd to login token")
            }
        } catch (error) {
            console.log(error)
        }
  }
  //console.log(category)
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '30ch',},
        height:'100vh',
        width:'75vw',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}
      noValidate
      autoComplete="off"
    >

      <Box
      sx={{
        bgcolor:'#0F1924',
        width:'atuo', py:1,
        borderRadius:2,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        m:'0 auto'}}
      >
        {
            success ?         <Box
            className='alert'
            sx={{m:'1rem auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <AlertUi
              message='Success — check it out!'
              color=''
              bgcolor=''
              />
            </Box> : <></>
        }

        <TextField
          id="standard-multiline-flexible"
          label="Add New Categoriy"
         // placeholder="Category Name"
          multiline
          value={category}
          color='secondary'
          variant='standard'
          sx={{
            width:'90%',
            bgcolor:'GrayText',
            borderRadius:1.5,
            input:{color:'wheat',px:2}
        }}
        onChange={(e)=>{setCategory(e.target.value)}}
        />
        <Box sx={{display:'flex',justifyContent:'center',}}>
          <Button
          variant="outlined"
          color='warning'
          onClick={handleAdd}
          >Submit</Button>
        </Box>
      </Box>

    </Box>
  );
}
export default AddCategory

