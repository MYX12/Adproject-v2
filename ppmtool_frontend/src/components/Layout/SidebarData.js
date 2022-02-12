import React from "react";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData=[
    {
        title:'Project Manage Tool',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Dashboard',
        path:'/dashboard',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'podcast',
        path:'/recommendation',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Profile',
        path:'/profile',
        icon:<IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title:'Message',
        path:'/message',
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:'nav-text'
    },
    {
        title:'sign up',
        path:'/register',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
]