

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { baseToken, baseUrl } from '../pages/admin/config/config';
import { json } from 'react-router';

interface ConfirmType {
    id:number,
    open: boolean,
    setOpen: (value: boolean) => void,
    // handleClickOpen:(value:number)=>void,
    setAgree:(value:boolean)=>void
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteConfirm = ({id,open,setOpen,setAgree}:ConfirmType) => {

    const handleClose = () => {
        setAgree(false)
        setOpen(false);
    };

//@ts-ignore
const handleAgree = () => {
    console.log('ftecth::///wwasdf/',id)

    setAgree(true)
    setOpen(false)
}

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Confirmation ?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are You Sure You want To Delete this ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleAgree}>Agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DeleteConfirm
