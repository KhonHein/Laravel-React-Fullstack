import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, NativeSelect, Typography, styled } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { categories } from '../categories/data';
import AlertUi from '../../../UI/AlertUi';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useState } from 'react';

import { useParams } from 'react-router';
import { CategoryType } from '../../../type/type';
import Confirm from '../../../UI/Confirm';
import { booksList } from '../lists/data';
import { baseToken, baseUrl } from '../config/config';

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

const EditBook =()=>{
    const params =useParams();
    const id = Number(params.id);
    const book = booksList.find((obj)=>obj.id === id);

    let defaultImg =book ? `${baseUrl}/storage/images/${book.image}`
                        : 'https://images.unsplash.com/photo-1558210834-473f430c09ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' ;

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(defaultImg);

  const [selectedAudio,setAudio] = useState< any | null >();
  const [audioValid, setAudioValid] = useState(false);

  const [bookTitle, setBookTitle] = useState(book.name);
  const [bookAuthor, setBookAuthor] = useState(book.author);
  const [bookCategory, setBookCategory] = useState(book.category_id);
  const [bookCaption, setBookCaption] = useState(book.outline);
  const [bookDescription, setBookDescription] = useState(book.description);

  const [alert ,setAlert] = useState(false);
  const [message ,setMessage] = useState('');

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

        const response = await fetch(`${baseUrl}/api/book/${id}`,{
            method:'POST',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
              },
              body: formData,
        });
            const data = await response.json();
            setAlert(await response.ok);
            setMessage(await data.status?data.message:data.errors);

            console.log(data.errors)

    } catch (error) {
        console.log(error)
    }
  }
    //@ts-ignore
    const handleAudio = (e) => {
      const file = e.currentTarget.files[0];
      const ext = e.currentTarget.files[0].name.split('.').pop();

      //console.log(name.split('.').pop())
      setAudio(ext === 'mp3'? file : null)
      setAudioValid(ext === 'mp3');
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: .5, width: '25ch' },
        width:'75vw',
        mb:4,
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
        {alert && <AlertUi message={message}/>}
        <Box>
          <Box
          sx={{width:'15rem',height:'15rem',borderRadius:2,m:'.5rem auto'}}>
            <img
            src={imagePreview}
            alt="" srcSet=""
            style={{width:'100%',height:'100%',borderRadius:'inherit'}}
          />
          </Box>
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
            background:'black',color:'wheat'}}
          >
          {<AddToPhotosIcon sx={{m:.4}}/>}Add photo
          </label>
        </Box>
        <Box>
          <Button
            color={`${audioValid?'success':'warning'}`}
            component="label"
            variant="contained"
            startIcon={<HeadphonesIcon />}
            href="#file-upload"
            sx={{my:2}}
          >
            Upload a audio
            <VisuallyHiddenInput
            type="file"
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
          value={`${bookTitle}`}
          onChange={(e)=>{setBookTitle(e.target.value)}}
        />
        <TextField
          id="authorName"
          label="Author Name"
          placeholder="Who wrote this book ?"
          multiline
          color='secondary'
          value={`${bookAuthor}`}
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

            onChange={(e)=>{setBookCategory(Number(e.target.value)),console.log(bookCategory)}}
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
          value={`${bookCaption}`}
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
          value={`${bookDescription}`}
          >
          </textarea>
        </Box>
        <Button
        variant="contained"
        color='secondary'
        onClick={handleAddBook}
        >Save Update Book</Button>
      </Box>

      {/* DELETE CONFIRM */}
      <Box
        sx={{fontSize:'small',display:'flex',justifyContent:'center',m:'1rem auto'}}
      >
        <Confirm setAlert={setAlert}/>
      </Box>
    </Box>
  );
}
export default EditBook
