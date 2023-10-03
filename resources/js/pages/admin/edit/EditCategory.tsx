
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AlertUi from '../../../UI/AlertUi';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useParams } from 'react-router';

import { categories } from '../categories/data';
import React from 'react';
import { baseToken, baseUrl } from '../config/config';

const EditCategory = () => {
  const params =useParams();
  const id = Number(params.id);
  const catego =  categories.find(c=> c.id === id);

  const [category , setCategory] = useState(catego && catego.name || '');
  const [alert ,setAlert] = useState(false)
  const [message,setMessage] = useState('');
  //console.log(params.id)

  //@ts-ignore
  const handleUpdate = async (e) =>{
    if(window.confirm('Confirm to Update')){
        try {
          const response = await fetch(`${baseUrl}/api/category/${id}/${category}`,{
              method:'PUT',
              headers:{
                  'Authorization': `Bearer ${baseToken}`,
              }
          });
          if(response.ok){
              const data = await response.json();
              setAlert(data.status);
              setMessage(data.message);
          }
        } catch (error) {
          console.log(error)
        }
      } else console.log('cancled ')
  }
  //console.log(category)
  //@ts-ignore
  const handleDelete = async ()=> {

    if(window.confirm('are you sure to delete ')){
      try {
        const response = await fetch(`${baseUrl}/api/category/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization': `Bearer ${baseToken}`,
            }
        });
        if(response.ok){
            const data = await response.json();
              setAlert(data.status);
              setMessage(data.message);
        }
      } catch (error) {
        console.log(error)
      }
    } else console.log('cancled ')
  }
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
        <Box className='alert' sx={{m:'1rem auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
          {alert && <AlertUi message={`${message}`} color='' bgcolor='' />}
        </Box>

        <TextField
          id="outlined-textarea"
          label="Add New Categoriy"
          placeholder="Category Name"
          multiline
          color='success'
          value={category}
          sx={{
            width:'90%',
            bgcolor:'GrayText',
            borderRadius:1.5,
            input:{color:'wheat'}
        }}
        onChange={(e)=>setCategory(e.target.value)}
        />
        <Box sx={{display:'flex',justifyContent:'center',}}>
          <Button
          variant="outlined"
          onClick={handleUpdate}
          >Save and Update</Button>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center',m:'1rem auto'}}>
          <Button
          variant="outlined"
          color='warning'
          onClick={handleDelete}
          >DELETE</Button>
        </Box>
      </Box>

    </Box>
  );
}
export default EditCategory

