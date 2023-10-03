import { Box, Button, FormControl, InputLabel, NativeSelect, TextField, Typography } from '@mui/material'
import BackupSharpIcon from '@mui/icons-material/BackupSharp';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useState } from 'react';
import PreviewImage from '../../../UI/PreviewImage';
import React from 'react';

const AddNewUser = () => {
    const defaultImg = 'https://images.unsplash.com/photo-1558210834-473f430c09ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(defaultImg);

  //@ts-ignore
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        //@ts-ignore
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{
        width:'100vw',
        maxHeight:'100vh',
        height:'auto',
        overflow:'auto',
        my:8,
        bgcolor:'#323436',
        py:4,
        borderRadius:3}}
    >
        <Typography variant='h6' className='color_1' sx={{display:'flex',justifyContent:'center'}}>Add new user</Typography>
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',}}
        >
        <Box>
            {
                selectedFile ?             <Box
                sx={{width:'15rem',height:'15rem',borderRadius:2,m:'.5rem auto'}}>
                    <img
                    src={imagePreview}
                    alt="" srcSet=""
                    style={{width:'100%',height:'100%',borderRadius:'inherit'}}
                />
                </Box> : <></>
            }
            <input
                type="file"
                hidden name=""
                id="bookImg"
                onChange={handleFileChange}
            />
            <label
            htmlFor="bookImg"
            id="bookImg"
            style={{
                cursor:'pointer',
                border:'solid 1px black',
                margin:'0.2rem .3rem',
                borderRadius:3,padding:2,
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontStyle:'italic',
                fontSize:'small',
                fontWeight:'bolder',
                background:'black',
                color:`${selectedFile? 'green':'wheat'}`
            }}
            >
            {<AddToPhotosIcon sx={{m:.4}}/>}Add photo
            </label>
            </Box>
            <TextField color='primary' id="standard-basic" label="Name" variant="standard" sx={{my:.5}}/>
            <TextField color='primary' id="standard-basic" label="email" variant="standard" sx={{my:.5}}/>
            <TextField color='primary' id="standard-basic" label="address" variant="standard" sx={{my:.5}}/>
            <TextField color='primary' id="standard-basic" label="password" variant="standard" sx={{my:.5}}/>
            <TextField color='primary' id="standard-basic" label="phone" variant="standard" sx={{my:.5}}/>
            <FormControl sx={{my:.5}}>
                <InputLabel variant="standard" sx={{color:'wheat'}} htmlFor="uncontrolled-native">
                    Gender
                </InputLabel>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                    }}
                    color='secondary'
                >
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                </NativeSelect>
            </FormControl>
            <FormControl sx={{my:.5}}>
                <InputLabel variant="standard" sx={{color:'wheat'}} htmlFor="uncontrolled-native">
                    Role Level
                </InputLabel>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',

                    }}
                    color='secondary'
                >
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                    <option value={3}>Free</option>
                </NativeSelect>
            </FormControl>
            <Button
            variant="contained"
            endIcon={<BackupSharpIcon />}
            sx={{mt:1}}
            >
            Submit
            </Button>
        </Box>
    </Box>
    )
}
export default AddNewUser
