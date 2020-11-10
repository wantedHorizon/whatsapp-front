import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import './ChatHeader.css';
function ChatHeader({RoomName='Room Name',LastSeen='Last seen at...',src}) {
    return (
        <div className="chat__header">

            <Avatar />
            <div className="chat__headerInfo">
                <h3>{RoomName}</h3>
                <p>{LastSeen}</p>
            </div>

            <div className="chat__headerRight">
                    <IconButton >
                        <SearchOutlined />
                    </IconButton>

                    <IconButton >
                        <AttachFile />
                    </IconButton>
                    <IconButton >
                        <MoreVert />
                    </IconButton>
                </div>
        </div>
    )
}

export default ChatHeader
