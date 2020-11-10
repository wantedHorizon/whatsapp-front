import { Avatar, IconButton } from '@material-ui/core';

import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react'
import ChatMessage from '../../components/Chat/ChatMessage/ChatMessage';
import './Chat.css';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">

                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
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
            <div className="chat__body">

                {/* <div className="chat__message">
                    <p>
                        <span className="chat__name">Eliran</span>
                    This is a message
                    <span className="chat__timestamp">
                            {new Date().toUTCString()}
                        </span>
                    </p>

                </div> */}

                <ChatMessage />
                <ChatMessage receiver={true}/>
                <ChatMessage />
                <ChatMessage receiver={true}/>
                <ChatMessage />
                <ChatMessage receiver={true}/>
                <ChatMessage />
                <ChatMessage receiver={true}/>
                <ChatMessage />
                <ChatMessage receiver={true}/>
                <ChatMessage />
                <ChatMessage receiver={true}/>
                <ChatMessage />
                <ChatMessage receiver={true}/>
                <ChatMessage />
                <ChatMessage receiver={true}/>


            </div>
        </div>
    )
}

export default Chat
