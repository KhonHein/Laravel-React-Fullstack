import { Box, Button, TextField, Typography } from '@mui/material'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useState } from 'react';
import { Form, Link, useParams } from 'react-router-dom';
import React from 'react';
import { baseToken, baseUrl } from '../config/config';
import { anounceImgSliders } from '../../../data/images/data';
import AlertUi from '../../../UI/AlertUi';

const EditAnnouncement = () => {
    const param = useParams();
    const id = Number(param.id);
    const item = anounceImgSliders.find((obj) => obj.id === id);
    let defaultImg = item? `${baseUrl}/storage/images/${item.image_url}`
                            :'https://images.unsplash.com/photo-1558210834-473f430c09ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwYm9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';

    const [imagePreview, setImagePreview] = useState(defaultImg);
    const [selectedFile, setSelectedFile] = useState<File>();
    const [caption, setCaption] = useState(item?item.caption:'');
    const [alert,setAlert] = useState(false);

    //@ts-ignore
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0]
        if (file) {
                setSelectedFile(file);
                //console.log(file)
                const reader = new FileReader();
                reader.onload = (e) => {
                    //@ts-ignore
                    setImagePreview(e.target.result);
                };
                reader.readAsDataURL(file);
            }
    };

    const handleSlide = async (e) => {
        e.preventDefault();
       const formData = {
        'id' : id,
        'caption':caption,
        'image':selectedFile,
       }
       console.log(formData)
        try {
            const response = await fetch(`${baseUrl}/api/anouncement`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${baseToken}`,
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                const data = await response.json();
                setAlert(data.status);
                console.log(data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                maxWidth: '100%',
                my: 8,
            }}
        >
            <Typography variant='h6' className='color_1'>Add Anouncement Slide</Typography>
            <form onSubmit={handleSlide} encType="multipart/form-data">
                <Box sx={{
                    height: '85%',
                    bgcolor: 'GrayText',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 2.5,
                    py: 5,
                }}
                >
                    {alert && <AlertUi message={'Edited and Updated,check it'}/> }
                    <Box sx={{ m: 2, py: 1 }}>
                        <Box
                            sx={{ width: '15rem', height: '15rem', borderRadius: 2, m: '.5rem auto', py: .5 }}>
                            <img
                                src={imagePreview}
                                alt="" srcSet=""
                                style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
                            />
                        </Box>
                        <input
                            type="file"
                            name='image'
                            hidden
                            id="bookImg"
                            required
                            onChange={handleFileChange}
                        />
                        <label
                            htmlFor="bookImg"
                            id="bookImg"
                            style={{
                                cursor: 'pointer',
                                border: 'solid 1px black',
                                margin: '0.2rem .3rem',
                                borderRadius: 3, padding: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontStyle: 'italic',
                                fontSize: 'small',
                                fontWeight: 'bolder',
                                background: 'black',
                                color: `${selectedFile !== null ? 'green' : 'wheat'}`
                            }}
                        >
                            {<AddToPhotosIcon sx={{ m: .4 }} />}Add photo
                        </label>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            m: 2
                        }}
                    >
                        <TextField
                            label="write caption"
                            variant="standard"
                            color="secondary"
                            name='caption'
                            value={caption}
                            focused
                            required
                            onChange={(e) =>setCaption(e.target.value)}
                            sx={{ color: 'red', width: '100%', }}
                        />
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            type='submit'
                             onClick={handleSlide}
                        >Edit and Save
                        </Button>
                    </Box>

                    <Box sx={{ my: 3 }}>
                        <Link to='/anouncement_list'
                        >View More
                        </Link>
                    </Box>
                </Box>
            </form>
        </Box>
    )
}

export default EditAnnouncement
