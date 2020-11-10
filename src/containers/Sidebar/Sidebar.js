import React from 'react';
import './Sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from '../../components/SIdebar/SidebarChat/SidebarChat';
const Sidebar = props => {
    return (
        <div className='sidebar'>

            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutIcon />
                    </IconButton>

                    <IconButton >
                        <ChatIcon />
                    </IconButton>

                    <IconButton >
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start new Chat" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />

            </div>
        </div>
    )
}
export default Sidebar;