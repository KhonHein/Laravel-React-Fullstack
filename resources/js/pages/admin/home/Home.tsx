import React from 'react'
import ImageSlider from '../../../UI/ImageSlider'
import { Box, Typography } from '@mui/material'
import WhatIs from './WhatIs'
import { whatIs } from './data'


const Home = () => {
  return (
    <Box className='container admin_home ' sx={{ my:8}}>
      <Typography 
      className='color_1'
      variant='h6'
      sx={{display:'flex',justifyContent:'center'}}
      > Sunday Notes
      </Typography>
        <Box 
        className="section img_slide_show anounce"
        sx={{display:'flex',justifyContent:'center'}}
        >
          <ImageSlider/>
        </Box>
        {
          whatIs.map((w,index)=>
          <Box 
          key={index} 
          className="section" 
          sx={{display:'flex',
          justifyContent:'center',
          m:'1rem auto'}}
          >
                <WhatIs
                id={w.id} 
                logoText={w.logoText}
                question={w.question}
                published={w.published}
                image={w.image}
                outLines={w.outLines}
                header={w.header}
                description={w.description}
                />
        </Box>)
        }
    </Box>
  )
}

export default Home