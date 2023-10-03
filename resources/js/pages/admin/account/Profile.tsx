import { Box } from '@mui/material'
import ProfileUi from '../../../UI/ProfileUi'
import React from 'react'
import { useParams } from 'react-router'
import { usersList } from '../lists/data'
import { ProfileType } from '../../../type/type'
import { baseUrl } from '../config/config'

//fetcht the acc detail
let profile = {
    id: 1,
    name: "User Client",
    email: 'client@gmail.com',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    address: 'Pinlebu',
    role: 'user',
    plan: 'free',
    phone: '0912345678',
    gender: 'female',
    path: 'https://www.facebook.com/profile.php?id=100063950760274',
}

const Profile = () => {
    const param = useParams();
    const userId = Number(param.id);
    const user = usersList.find((obj)=> userId === obj.id);
if(user){
    profile = {
        id: user.id,
        name: user.name,
        email: user.status[0].st2,
        img: user.image,
        address: user.address,
        role: user.role,
        plan: user.plan,
        phone: user.phone,
        gender: user.gender,
        path: 'https://www.facebook.com/profile.php?id=100063950760274',
    }
}
    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 8
            }}>
            <ProfileUi
                id={profile.id}
                name={profile.name}
                address={profile.address}
                phone={profile.phone}
                gender={profile.gender}
                img={profile.img}
                clsName='iformation color_1'
                email={profile.email}
                role={profile.role}
                plan={profile.plan}
                path={profile.path}
            />
        </Box>
    )
}

export default Profile
