
import React from 'react'
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatMessage from '../../components/Chat/ChatMessage/ChatMessage';
import {Mic as MicIcon, InsertEmoticon as InsertEmotionIcon} from '@material-ui/icons';


import './Chat.css';

function Chat() {
    return (
        <div className="chat">

            <ChatHeader />
            <div className="chat__body">


                <ChatMessage />
                <ChatMessage receiver={true} />
                <ChatMessage />
                <ChatMessage receiver={true} />
                <ChatMessage />
                <ChatMessage receiver={true} />
                <ChatMessage />
                <ChatMessage receiver={true} />
                <ChatMessage />
                <ChatMessage receiver={true} />
                <ChatMessage />
                <ChatMessage receiver={true} />
                <ChatMessage />
                <ChatMessage receiver={true} />
                <ChatMessage />
                <ChatMessage receiver={true} />
            </div>

            <div className="chat__footer">
                <InsertEmotionIcon />
                <form action="">
                    <input type="text" placeholder="Type a message" />
                    <button type="submit">Send Message</button>
                </form>
                    <MicIcon />
            </div>
        </div>
    )
}

export default Chat
