import React, { useEffect, useState } from 'react'
import { Route, Routes, useHref } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { routes } from '../data';
import { RouteType } from '../type/type';
import Login from '../pages/admin/auth/Login';

const ChildLayout = () => {
    const loginHref = useHref('/login');
    const [isToken, setIsToken] = useState(false);
    const token = localStorage.getItem('accessToken');
    useEffect(()=>{
        if(!token) {
            // window.location.href = loginHref;
           setIsToken(true);
        }
    },[isToken]);


  return (
    <BrowserRouter>
    {
        <Routes>
            {
            isToken ?
            routes.map(({id,path,Compo}:RouteType,index)=>
                <Route key={index} path={path} Component={Compo} />
            ) : <Route path='/login' Component={Login}/>
            }
        </Routes>

    }

</BrowserRouter>
  )
}

export default ChildLayout
