
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import CancelIcon from '@mui/icons-material/Cancel';
import { usersList } from './data';
import { userListTable } from '../../../type/type';
import { Button } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import UpdateRole from './UpdateRole';
import AlertUi from '../../../UI/AlertUi';
import React, { SyntheticEvent, useState } from 'react';
import DeleteUser from '../../../UI/DeleteUser';


function Row(props: { row:userListTable }) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [alert,setAlert] = useState(false);
  const [message,setMessage] = useState('');

  const [openDelete, setDelete] = React.useState(false);
  const handleClose = (event: SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(!openUpdate);
    }
  };
  const handleCloseDelete = ()=>{
    setDelete(false);
  }
  return (
    <React.Fragment>
        {/* <AlertUi message={message}/> */}
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right" sx={{width:100,height:100,borderRadius:2,}}>
            <img src={row.image} style={{width:'100%',height:'100%',borderRadius:'inherit'}} alt="" srcSet="" />
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Status
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.status.map((st,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">{st.st1}</TableCell>
                      <TableCell>{st.st2}</TableCell>
                      <TableCell align="right">{st.st3}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell>
                      <Button variant='outlined' color='error' onClick={()=>setDelete(true)}>
                        <CancelIcon
                        id={`${row.id}`} color='error'
                        sx={{fontWeight:'bolder',fontSize:'2rem',cursor:'pointer'}}

                        /> DELETE
                      </Button>
                      <DeleteUser isOpen={openDelete} handleClose={handleCloseDelete} userId={row.id}/>
                    </TableCell>
                    <TableCell>
                      <Button variant='outlined' onClick={()=>setOpenUpdate(true)}>
                   {/* neeed to rewrite the close and open */}
                      <UpdateRole userId={row.id} isOpen={openUpdate} handleClose={handleClose}/>

                      <KeyboardDoubleArrowUpIcon
                      id={`${row.id}`} color='secondary'
                      sx={{fontWeight:'bolder',fontSize:'2rem',cursor:'pointer'}}

                      /> UPDATE
                      </Button>
                    </TableCell>

                    <TableCell>
                      <Link
                      className='link'
                      to={`/profile/${row.id}`}
                      style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#323436',borderRadius:2.5}}
                      >
                      <RemoveRedEyeIcon
                      id={`${row.id}`} color='primary'
                      sx={{fontWeight:'bolder',fontSize:'2rem',cursor:'pointer'}}
                      />
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function UserList() {

  return (
    <TableContainer component={Paper} sx={{height:'100%',my:8}}>
      <Typography sx={{display:'flex',justifyContent:'center'}} variant='h6'>Users List</Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((row,index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
