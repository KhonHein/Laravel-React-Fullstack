
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import React from 'react';

const Search = () => {
  const [search ,setSearch] = useState('');
  //@ts-ignore
  const handle =()=>{
    console.log(search)
  }
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 3px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height:40 ,
        bgcolor:'inherit',
        border:'solid 1px white',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 ,color:'white'}}
        placeholder="Search on Sunday"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <IconButton onClick={handle} type="button" color='primary' sx={{ p: '5px',cursor:'pointer'}} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
export default Search;
