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
import Login from './pages/admin/auth/Login'
import Register from './pages/admin/auth/Register'
import AnouncementsList from './pages/admin/lists/AnouncementsList'
import EditAnnouncement from './pages/admin/edit/EditAnnouncement'

export const routes = [
    {
        id:0,
        path:'/',
        Compo:Home
    },
    {
        id:1,
        path:'/categories',
        Compo:Categories
    },
    {
        id:2,
        path:'/list/book_list/:id',
        Compo:BookList
    },
    {
        id:3,
        path:'/book/detail/:id',
        Compo:BookDetails
    },
    {
        id:4,
        path:'/add_category',
        Compo:AddCategory
    },
    {
        id:5,
        path:'/add_book',
        Compo:AddBook
    },
    {
     id:6,
     path:'/edit_book/:id',
     Compo:EditBook,
    },
    {
        id:7,
        path:'/edit_category/:id',
        Compo:EditCategory
    },
    {
        id:8,
        path:'/list',
        Compo:UserList
    },
    {
        id:9,
        path:'/add_anouncement',
        Compo:Announcement
    },
    {
        id:10,
        path:'/profile/:id',
        Compo:Profile
    },
    {
        id:11,
        path:'/add_user',
        Compo:AddNew
    },
    {
        id:12,
        path:'/login',
        Compo:Login
    },
    {
        id:13,
        path:'/register',
        Compo:Register
    },
    {
        id:14,
        path:'/anouncement_list',
        Compo:AnouncementsList
    },
    {
        id:15,
        path:'/edit/anounce_slide/:id',
        Compo:EditAnnouncement
    }
]
