import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { AlertType } from '../type/type';

const  AlertUi = (props:AlertType) =>{
const [isAlert , setAlert] = useState(false)
  return (
    <Stack
    className='alert-sms'
    sx={{
      width: '100%',
      display:`${isAlert ? 'none':''}`,
      }} spacing={2}>
      <Alert
      onClose={() => {setAlert(!isAlert)}}
      sx={{
        color:`${props.color}`,
        bgcolor:`${props.bgcolor}`}}
      >
        {props.message}
      </Alert>
    </Stack>
  );
}
export default AlertUi;
