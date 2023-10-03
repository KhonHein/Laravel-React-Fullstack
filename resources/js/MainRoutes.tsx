import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route ,Routes, useHref } from 'react-router-dom';

import Layout from './layout/Layout';
import { routes } from './data';
import {RouteType} from './type/type'
import Home from './pages/admin/home/Home'
import Categories from './pages/admin/categories/Categories'
import BookList from './pages/admin/lists/BookList'
import BookDetails from './pages/admin/lists/BookDetails'
import AddCategory from './pages/admin/add/AddCategory'
import AddBook from './pages/admin/add/AddBook'
import EditBook from './pages/admin/edit/EditBook'
import EditCategory from './pages/admin/edit/EditCategory'
import UserList from './pages/admin/lists/UserList'
import Announcement from './pages/admin/add/Announcement'
import Profile from './pages/admin/account/Profile'
import AddNew from './pages/admin/add/AddNewUser'
import ChildLayout from './layout/ChildLayout';
import Login from './pages/admin/auth/Login';
import { store } from './store/store';


import {Provider} from 'react-redux'

const MainRoutes = () => {

    // const token = localStorage.getItem('accessToken');
    // useEffect(()=>{
    //    if(!token) window.location.href = '/login';
    //    else console.log(' register fialed');
    // },[token]);

    return (
        <Provider store={store}>
        <Layout>
            {
            <BrowserRouter>
                <Routes>
                {
                routes.map(({id,path,Compo}:RouteType,index)=>
                    <Route key={index} path={path} Component={Compo} />
                )
                }
                </Routes>
            </BrowserRouter>
            }
            {/* <ChildLayout/> */}
        </Layout>
        </Provider>
    );
}

export default MainRoutes
