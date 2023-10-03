import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import KeyIcon from '@mui/icons-material/Key';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

//import './login.css'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { baseUrl } from '../config/config';
import AlertUi from '../../../UI/AlertUi';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [alert,setAlert] = useState(false);

    const handleLogin = async () => {
        const postData = {
            'email':email,
            'password':password,
        }
        try {
            const resp = await fetch(`${baseUrl}/api/login`,{
            method:'POST',
            headers: {
                'content-type' :'application/json',
            },
            body: JSON.stringify(postData),
            });
            if(resp.ok) {
                const data = await resp.json();
                console.log(data.access_token)
                localStorage.setItem('accessToken',data.access_token)
                setAlert(resp.ok);
            } else {
                const data = await resp.json();
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <Box className="" sx={{
            bgcolor:'inherit',
            height:'100vh',
            my:8,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'}}>
            <Box sx={{
                height:'auto',
                bgcolor:'#323436',
                p:5,
                borderRadius:2
            }}
            >
                <Typography className='color_1' sx={{display:'flex',justifyContent:'center'}}>LOGIN</Typography>
                {alert && <AlertUi message={'Login Success'}/>}
                <Box sx={{ display: 'flex', alignItems: 'flex-end',my:3 }}>
                    <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                    id="input-with-sx"
                    label="User Email"
                    color='warning'
                    variant="standard"
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-end',my:3 }}>
                    <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                    <TextField
                    id="input-with-sx"
                    label="User Password"
                    color='warning'
                    variant="standard"
                    type='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </Box>

                <Button
                variant="outlined"
                sx={{display:'flex',justifyContent:'center',alignItems:'center',m:'0.5rem auto'}}
                onClick={handleLogin}
                >Submit</Button>
                <Link to='/register'
                className='link'
                style={{display:'flex',justifyContent:'center',marginTop:'2rem',fontSize:'small'}}
                >Register New Account ?</Link>
            </Box>
        </Box>
    </div>
  )
}

export default Login
