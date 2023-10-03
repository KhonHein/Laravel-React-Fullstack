
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import { useState } from 'react';
 import Draggable from 'react-draggable';
 import CheckIcon from '@mui/icons-material/Check';
 import CancelIcon from '@mui/icons-material/Cancel';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import React from 'react';
import { baseToken, baseUrl } from '../pages/admin/config/config';

 function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}


const Confirm = (setAlert) => {
  const params = useParams();
  const [open , setOpen] = useState(false)
  const [isConfirm , setConfirm] = useState(false)

  const deleteBook = async (id)=>{
    try {
        const response = await fetch(`${baseUrl}/api/book/${id}`,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${baseToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({'id':id}),
        });
        if(response.ok){
            const data = await response.json();
            setAlert(data.status)
            //console.log(data);
        }
    } catch (error) {
        console.log(error)
    }
    }
  const handleConfirm = () => {
    setOpen(false)
    setConfirm(true)
    if(isConfirm){
      const bookId = params.id;
        deleteBook(bookId);
    }
  }
  return (
    <Box sx={{height:'auto'}}>
      <Button
      color='warning'
      variant="outlined"
      onClick={()=>setOpen(true)}
      sx={{fontSize:'12px',color:'red'}}>
        DELETE THE BOOK
      </Button>
      <Dialog
        open={open}
        onClose={()=>setOpen(false)}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Confirmation
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are our Sure to Delete This book ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>setOpen(false)}>
           {<CancelIcon color='success'/>} Cancel
          </Button>
          <Button onClick={handleConfirm}>{<CheckIcon color='warning'/>} YES </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default Confirm
