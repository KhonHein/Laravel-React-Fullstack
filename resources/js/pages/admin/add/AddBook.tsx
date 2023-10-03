import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Button, FormControl, InputLabel, NativeSelect, Typography, styled } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { categories } from '../categories/data';
import AlertUi from '../../../UI/AlertUi';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useState } from 'react';
import React from 'react';
import { baseToken, baseUrl } from '../config/config';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from '../../../store/store';


const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

interface CategoryType {
  id:number,
  name:string,
}
const AddBook =()=>{
    const [alert,setAlert] = useState(false);
    const [message,setMessage] = useState('');
  const defaultImg = 'https://images.unsplash.com/photo-1558210834-473f430c09ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(defaultImg);

  const [selectedAudio, setAudio] = useState<any | null>(null);
  const [audioValid, setAudioValid] = useState(false);

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');
  const [bookCaption, setBookCaption] = useState('');
  const [bookDescription, setBookDescription] = useState('');


  //@ts-ignore
  const handleFileChange = (event : ChangeEvent<HTMLInputElement>) => {
    if(event.target.files){
        const file = event.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = (e) => {
            //@ts-ignore
            setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
    }
    //console.log('OK OK ',selectedFile)
  };


  const handleAddBook = async () => {
    try {
        const formData = new FormData();
        formData.append('categoryId', bookCategory);
        formData.append('name', bookTitle);
        formData.append('image', selectedFile || '');
        formData.append('author', bookAuthor);
        formData.append('outline', bookCaption);
        formData.append('description', bookDescription);
        formData.append('sound',selectedAudio);

        //console.log(formData)
        const response = await fetch(`${baseUrl}/api/book`,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
              },
              body: formData,
        });
            const data = await response.json();
            setAlert(await data.status);
            setMessage(await data.status?data.message:data.message[0]);
            console.log(data)

    } catch (error) {
        console.log(error)
    }
  }


  //@ts-ignore
  const handleAudio = (e : ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if(file){
        const ext = e.target.files[0].name.split('.').pop();
        setAudioValid(ext === 'mp3');
        setAudio(file)
    }
  }
  console.log(selectedAudio)
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .5, width: '25ch' },
        width:'75vw',
        my:8
      }}
      noValidate
      autoComplete="off"
    >
      <Typography className='color_1' variant='h6' sx={{display:'flex',justifyContent:'center'}}>Add New Book</Typography>
      <Box
      sx={{
        bgcolor:'GrayText',
        width:'auto',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        m:'.5rem auto',
        p:1,
        borderRadius:2
        }}>
        {alert ? <AlertUi message={`${message}`}/> : <Alert sx={{opacity:!alert?'0.5':''}} severity="error">{`${message}`}</Alert> }
        <Box>
          <Box
          sx={{width:'15rem',height:'15rem',borderRadius:2,m:'.5rem auto'}}>
            <img
            src={imagePreview}
            alt="" srcSet=""
            style={{width:'100%',height:'100%',borderRadius:'inherit'}}
          />
          </Box>
            <Button
            sx={{display:'flex',justifyContent:'center',m:2}}
            component="label"
            variant="contained"

            startIcon={<CloudUploadIcon />}>
                Upload file
                <VisuallyHiddenInput type="file" onChange={handleFileChange}/>
            </Button>
        </Box>
        <Box>
          <Button
            color={`${audioValid?'success':'warning'}`}
            component="label"
            variant="contained"
            startIcon={<HeadphonesIcon />}
            href="#file-upload"
          >
            Upload a audio
            <VisuallyHiddenInput
            type="file"
            accept=".mp3"
            onChange={handleAudio}
            />
          </Button>
        </Box>
        <TextField
          id="bookName"
          label="Book Title"
          placeholder="Book's Name ?"
          multiline
          color='secondary'
          onChange={(e)=>{setBookTitle(e.target.value)}}
        />
        <TextField
          id="authorName"
          label="Author Name"
          placeholder="Who wrote this book ?"
          multiline
          color='secondary'
          onChange={(e)=>{setBookAuthor(e.target.value)}}
        />
        <FormControl color='secondary' sx={{my:3}}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Category
          </InputLabel>
          <NativeSelect
            defaultValue={bookCategory}
            inputProps={{
              name: 'select',
              id: 'category',
            }}
            onChange={(e)=>{setBookCategory(e.target.value)}}
          >
            {
              categories.map((c:CategoryType,index)=>
              <option
              key={index}
              value={c.id}
              style={{color:'',}}
              >{c.name}</option>)
            }
          </NativeSelect>
        </FormControl>
        <TextField
          id="caption"
          label="Shhort Captions"
          placeholder="What is in this book ?"
          multiline
          color='secondary'
          onChange={(e)=>{setBookCaption(e.target.value)}}
        />
        <Box
        sx={{
          width:'100%',
          minHeight:'auto',
          borderRadius:2 ,
          border:'1px solid black',
          m:'0.5rem auto',
          }}
          >
        <textarea
        id='desc'
        style={{
          width:'100%',
          minHeight:'15rem',
          borderRadius:'inherit',
          background:'transparent',
          fontSize:'1.1rem'
          }}
          name=''
          onChange={(e)=>{setBookDescription(e.target.value)}}
          placeholder='describe about the book'
          >
          </textarea>
        </Box>
        <Button
        variant="contained"
        color='secondary'
        onClick={handleAddBook}
        >Add Book</Button>
      </Box>
    </Box>
  );
}
export default AddBook
