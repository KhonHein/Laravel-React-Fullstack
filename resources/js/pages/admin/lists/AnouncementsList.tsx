import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
//import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';
import { Box, Button, ImageListItemBar } from '@mui/material';

import { ImgSliderType } from '../../../type/type';
//import { itemData } from '../home/data';
import { anounceImgSliders } from '../../../data/images/data';
import DeleteConfirm from '../../../UI/DeleteConfirm';
import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { baseToken, baseUrl } from '../config/config';

const AnouncementsList = () => {
    const [id, setId] = useState(0);
    const [open, setOpen] = useState(false);
    const [isAgree, setIsAgree] =useState(false);


    //@ts-ignore
    const handleClickOpen = (bId) => {
        setId(bId)
        setOpen(true);
    };
useEffect(()=>{
        //@ts-ignore
        const handleDelete = async (id) => {
            if(baseToken){
                try {
                    const response = await fetch(`${baseUrl}/api/anouncemnet`,{
                        method:'DELETE',
                        headers: {
                            'Authorization': `Bearer ${baseToken}`,
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({'id':id}),
                    });
                    if(response.ok){
                         const res = await response.json();
                         console.log(res)
                    }
              } catch (error) {
                console.log(error)
              }
            setIsAgree(false);
        }

        }
        if(isAgree) handleDelete(id);

},[isAgree])

    return (
        <ImageList sx={{ width: '90%', height: '90vh', my: 9 ,}}>
            {
            anounceImgSliders.map((item:ImgSliderType,index) => (
                <ImageListItem key={index}>
                    <img
                        src={`${baseUrl}/storage/images/${item.image_url}`}
                        //srcSet={`${item.url}`}
                        alt={item.caption}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.caption}
                        //subtitle={``}
                        actionIcon={
                        <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.caption}`}
                        >
                            <InfoIcon />
                        </IconButton>
                        }
                        sx={{mb:4}}
                    />
                    <Box sx={{display:'flex',justifyContent:'space-around'}}>
                        <Link to={`/edit/anounce_slide/${item.id}`}
                            className='link'
                            style={{ fontSize: 'small', color:'yellow',boxShadow: '.1rem .1rem 1rem green', fontStyle: 'italic' }}
                        >
                            EDIT
                        </Link>

                        <Button
                            id={`${item.id}`}
                            style={{ fontSize: 'small', color: 'red' }}
                            onClick={()=>handleClickOpen(item.id)}
                        >
                            DELETE
                        </Button>
                    </Box>
                </ImageListItem>
            ))
            }
            <DeleteConfirm
                open={open}
                setOpen={setOpen}
                id={id}
                setAgree={setIsAgree}
                />
        </ImageList>
    );
}
export default AnouncementsList

