
import React, { useState } from 'react'
import ChatHeader from '../../components/Chat/ChatHeader/ChatHeader';
import ChatMessage from '../../components/Chat/ChatMessage/ChatMessage';
import { Mic as MicIcon, InsertEmoticon as InsertEmotionIcon } from '@material-ui/icons';
import whatsappAPI from '../../api/whatsappAPI';
import './Chat.css';


function Chat({ messages }) {
    const [newMessage, setNewMessage] = useState('');
    const sendMessage = async(e) => {
        e.preventDefault();

        try {
            const data =await whatsappAPI.post('messages/new',{
                message: newMessage,
                name:'eliran',
                timestamp: new Date(),
                received: false    
            });
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {

            setNewMessage('');
        }
    }

    console.log(newMessage);
    return (
        <div className="chat">

            <ChatHeader />
            <div className="chat__body">

                {messages.map((msg, i) => {
                    return <ChatMessage key={msg._id} {...msg} />
                })}
          

            </div>

            <div className="chat__footer">
                <InsertEmotionIcon />
                <form action="" onSubmit={sendMessage}>
                    <input type="text" placeholder="Type a message"   value={newMessage} onChange={(e) => {setNewMessage(e.target.value)}}/>
                    <button type="submit">Send Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
