import { Link, json } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import CheckIcon from '@mui/icons-material/Check';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactMailIcon from '@mui/icons-material/ContactMail';
//import './login.css'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { baseUrl } from '../config/config';
import AlertUi from '../../../UI/AlertUi';


const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address,setAddress] = useState('');
    const [password,setPassword] = useState('');
    const [confirm,setConfirm] = useState('');
    const [alert,setAlert] = useState(false);

    const handleRegister = async () => {
        const postData = {
            'name':name,
            'email':email,
            'address':address,
            'password':password,
            'confirm_password':confirm
        }
        try {
            const resp = await fetch(`${baseUrl}/api/register`,{
            method:'POST',
            headers: {
                'content-type' :'application/json',
            },
            body: JSON.stringify(postData),
            });
            if(resp.ok) {
                const data = await resp.json();
                //console.log(data.access_token)
                localStorage.setItem('accessToken',data.access_token);
                localStorage.setItem('user',data.user);
                setAlert(data.status);
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
                bgcolor: 'inherit',
                height: '100vh',
                my: 8,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box sx={{
                    height: 'auto',
                    bgcolor: '#323436',
                    p: 5,
                    borderRadius: 2
                }}
                >
                    <Typography className='color_1' sx={{ display: 'flex', justifyContent: 'center' }}>REGISTER</Typography>
                    {alert && <AlertUi message={'Register Success'}/>}
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            id="input-with-sx"
                            label="User Name"
                            color='warning'
                            variant="standard" required
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                        <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            id="input-with-sx"
                            label="User Email"
                            type='email'
                            color='warning'
                            variant="standard" required
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                        <ContactMailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            id="input-with-sx"
                            label="User Address"
                            color='warning'
                            variant="standard" required
                            onChange={(e)=>setAddress(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                        <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            id="input-with-sx"
                            label="User Password"
                            color='warning'
                            variant="standard"
                            type='password' required
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                        <CheckIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        <TextField
                            id="input-with-sx"
                            label="Confirm Password"
                            color='warning'
                            variant="standard"
                            type='password' required
                            onChange={(e)=>setConfirm(e.target.value)}
                        />
                    </Box>

                    <Button
                        variant="outlined"
                        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: '0.5rem auto' }}
                       onClick={handleRegister}
                    >Submit
                    </Button>

                    <Link to='/login'
                        className='link'
                        style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', fontSize: 'small' }}
                    >Already have Account ?
                    </Link>
                </Box>
            </Box>
        </div>
    )
}

export default Register
