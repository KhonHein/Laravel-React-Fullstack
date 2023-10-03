import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import Confirm from '../../../UI/Confirm';
import {BookType} from '../../../type/type';
import { useState } from 'react';


import { useSelector,useDispatch } from "react-redux";
import { RootState } from '../../../store/store';
import { baseUrl } from '../config/config';


interface Props {
  open:boolean,
  setOpen:(value:boolean)=>void,
  setClose:(value:boolean)=>void,
  isConfirm:boolean,
}

const Book = (book:BookType,{open,setOpen , setClose,isConfirm}:Props) => {

    const dispatch = useDispatch();
    const handleDelete = ()=>{
    console.log('delete with fetch');
  //fetch to delet the book
 // console.log(categories)
}
  return (
    <Box sx={{mb:3}}>
          <Card sx={{
            width: 250,
            // maxWidth: 250,
            bgcolor:'#0F1924',
            border:'1px solid wheat',
            m:'1rem'
          }}
          //onClick={()=>dispatch(getCategory())}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={`${baseUrl}/storage/images/${book.image}`}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                gutterBottom
                variant="body1"
                component="div"
                sx={{color:'white'}}
                >
                  {book.name}
                </Typography>
                <Typography variant="body2" sx={{color:'white'}}>
                {book.outline}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
              <Link to={`/book/detail/${book.id}`}
                  className='link color_1'
                  style={{fontSize:'small',boxShadow:'.1rem .1rem 1rem green',fontStyle:'italic'}}
              >
                  More...
              </Link>

              <Link to={`/edit_book/${book.id}`}
                  className='link'
                  style={{fontSize:'small',color:'yellow'}}
              >
                GO EDIT
              </Link>
            </CardActions>
          </Card>
    </Box>
  );
}
export default Book
