import { Link } from 'react-router-dom'
import './profileUi.css'

import {BiUserCheck,BiListCheck} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {GrMapLocation} from 'react-icons/gr'
import {FaCriticalRole,FaTransgenderAlt} from 'react-icons/fa'
import {BsFillPhoneVibrateFill} from 'react-icons/bs'

import {FcNext} from 'react-icons/fc'
import { ProfileType } from '../type/type'

import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'
//fetch acc

const AccDetails = (acc:ProfileType) => {
return (
    <div className='acc_details_container'>
        <h4 className='color_1'>Profile Information</h4>
       <div className={`acc_info image ${acc.clsName}`}>
            <img src={acc.img} alt="" />
       </div>

       <Link className={`acc_info link ${acc.clsName}`} to={''}>
            <span><i><BiUserCheck/></i> Name </span>
            <span> {acc.name} <FcNext/></span>
       </Link>

       <Link className={`acc_info link ${acc.clsName}`} to={''}>
            <span><i><AiOutlineMail/></i> Email </span>
            <span> {acc.email} <FcNext/></span>
       </Link>

       <Link className={`acc_info link ${acc.clsName}`} to={''}>
            <span><i><GrMapLocation/></i> Address </span>
            <span> {acc.address} <FcNext/></span>
       </Link>
       <Link className={`acc_info link ${acc.clsName}`} to={''}>
            <span><i><FaCriticalRole/></i> Role </span>
            <span> {acc.role} <FcNext/></span>
       </Link>
       <Link className={`acc_info link ${acc.clsName}`} to={''}>
            <span><i><BiListCheck/></i> Plan </span>
            <span> {acc.plan} <FcNext/></span>
       </Link>
       <Link className={`acc_info link ${acc.clsName}`} to={''}>
            <span><i><BsFillPhoneVibrateFill/></i> Phone </span>
            <span> {acc.phone} <FcNext/></span>
       </Link>

       <Link className={`acc_info link ${acc.clsName}`} to={''}>
            <span><i><FaTransgenderAlt/></i> Gender </span>
            <span> {acc.gender} <FcNext/></span>
       </Link>
       <Link className={`acc_info link ${acc.clsName}`} to={`${acc.path}`} target="_blank">
          <span><i><FacebookIcon/></i></span>
          <span>Follow Our Page</span>
       </Link>

    </div>
  )
}

export default AccDetails
