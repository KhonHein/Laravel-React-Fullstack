import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { categories } from './data';
import { CardActions, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { CategoryType } from '../../../type/type';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const Categories = () => {
  return (
    <Grid container sx={{minHeight:'100vh',my:7}}>
        <Grid >
          <Typography
          variant='h4'
          className='color_1'
          sx={{display:'flex',justifyContent:'center'}}
          >Categories</Typography>
            <Box
              sx={{
                p: 2,
                bgcolor: 'inherit',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr'},
                gap: 2,
              }}
            >
              {categories.map((c:CategoryType,index) => (
                //click do function search by categories with Id

                <Box key={index} >
                  <Link className='link' to={`/list/book_list/${c.id}`}>
                    <Item
                    className='item'
                    sx={{color:'wheat',
                    bgcolor:'inherit',
                    border:'solid 1px wheat',
                    width:200,
                    borderTopLeftRadius:20,
                    borderBottomRightRadius:20,
                    cursor:'pointer'
                    }}
                    >
                      {c.name}
                    </Item>
                  </Link>
                  <CardActions sx={{display:'flex',justifyContent:'space-between'}}>
                      <Link to={`/list/book_list/${c.id}`}
                        className='link color_1'
                        style={{fontSize:'small',boxShadow:'.1rem .1rem 1rem green',fontStyle:'italic'}}
                      >
                      More...
                      </Link>

                      <Link to={`/edit_category/${c.id}`}
                        className='link'
                        style={{fontSize:'small',color:'yellow'}}
                      >
                      GO EDIT
                      </Link>
                    </CardActions>
                </Box>
              ))}
            </Box>

        </Grid>

    </Grid>
  );
}

export default Categories


