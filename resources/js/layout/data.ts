

import HomeIcon from '@mui/icons-material/Home';
import WidgetsSharpIcon from '@mui/icons-material/WidgetsSharp';
import BookmarksSharpIcon from '@mui/icons-material/BookmarksSharp';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonPinIcon from '@mui/icons-material/PersonPin';


import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export const sidebars = [

    {
        id:0,
        label:'Home',
        value:'home',
        Icon:HomeIcon,
        route:'/'
    },
    {
        id:1,
        label:'Categories',
        value:'categories',
        Icon:WidgetsSharpIcon,
        route:'/categories'
    },
    {
        id:2,
        label:'Library',
        value:'librar',
        Icon:BookmarksSharpIcon,
        route:'/list/book_list/:id'
    },
    {
        id:3,
        label:'Add Category',
        value:'add category',
        Icon:AddBoxOutlinedIcon,
        route:'/add_category'
    },
    {
        id:4,
        label:'Add Book',
        value:'add book',
        Icon:AddPhotoAlternateOutlinedIcon,
        route:'/add_book'
    },
    {
        id:5,
        label:'List Page',
        value:'list',
        Icon:ChecklistOutlinedIcon,
        route:'/list'
    },
    {
        id:6,
        label:'Anounce',
        value:'anounce',
        Icon:CampaignOutlinedIcon,
        route:'/add_anouncement'
    },
    {
        id:7,
        label:'Feedback',
        value:'feedback',
        Icon:FeedbackOutlinedIcon,
        route:'/feedback'
    },
    {
        id:8,
        label:'Language',
        value:'language',
        Icon:TranslateOutlinedIcon,
        route:'/add_lang'
    },
    {
        id:9,
        label:'Add New',
        value:'add new',
        Icon:PersonAddAltOutlinedIcon,
        route:'/add_user'
    },
    {
        id:10,
        label:'Profile',
        value:'profile',
        Icon:PersonPinIcon,
        route:'/profile/:id'
    },

]

export const sidebars1 = [
    {
        id:0,
        label:'Download font',
        value:'download font',
        Icon:TextFieldsOutlinedIcon,
        route:'/download'
    },
    {
        id:1,
        label:'Register',
        value:'register',
        Icon:VpnKeyIcon,
        route:'/register'
    },
    {
        id:2,
        label:'Log Out',
        value:'Logout',
        Icon:LogoutOutlinedIcon,
        route:'/logout'
    },
]
