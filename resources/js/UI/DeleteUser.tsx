
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import { Alert, AlertTitle, Collapse, IconButton, Typography } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { baseToken, baseUrl } from '../pages/admin/config/config';
interface PropsFun {
    userId:number;
    isOpen: boolean;
    handleClose: () => void;
  }

 const UpdateRole=({userId,isOpen,handleClose}) =>{

  const [selectedArchive, setArchive] = useState<number | string>(0);
  const [alert , setAlert] = useState(false);
  const [message , setMessage] = useState('');

  const handleChange = (event: SelectChangeEvent<typeof selectedArchive>) => {
    setArchive(event.target.value || 0);
  };

  const handleChangeUpdate = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/usersLists/${userId}/${selectedArchive}`,{
            method:'PUT',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
                'Content-Type': 'application/json',
              },
        });
        if( response.ok){
            const data = await response.json();
            setAlert(data.status);
            setMessage(data.message);
        }
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
      {/* <Button onClick={handleClickOpen}>Open select dialog</Button> */}
      <Dialog disableEscapeKeyDown open={isOpen} onClose={handleClose}>
        <DialogTitle sx={{display:'flex',justifyContent:'center'}}>Upgrade User's Role</DialogTitle>

        <Collapse in={alert}>
            <Alert
            action={
                <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                    setAlert(false);
                }}
                >
                <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2 }}
            >
            {message}
            </Alert>
      </Collapse>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Roles</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={selectedArchive}
                onChange={handleChange}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value={0}>
                  <em>None</em>
                </MenuItem>
                <MenuItem sx={{color:'black'}} value={1}>Deleted(archive-true)</MenuItem>
                <MenuItem sx={{color:'black'}} value={0}>Import (archive-false)</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChangeUpdate} variant={alert?'text':'contained'}>Save Change</Button>
          <Button onClick={handleClose} variant={alert?'contained':'text'} >Ok (close)</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default UpdateRole
