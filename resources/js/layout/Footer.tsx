import { Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Typography sx={{
      position:'fixed',
      bottom:0,
      m:'0 auto'
    }} variant='h6' className='color_1'>
      Sunday Notes
    </Typography>
  )
}

export default Footer