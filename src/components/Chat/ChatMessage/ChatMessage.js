import React from 'react'
import './ChatMessage.css';
function ChatMessage({name='eliran',time=new Date().toUTCString(), msg="This is a message",receiver=false}) {
    return (
        <div className={`chat__message ${receiver&&'chat__receiver'}`}>
            <p>
                <span className="chat__name">{name}</span>
                {msg}
        <span className="chat__timestamp">
                    {time}
                </span>
            </p>

        </div>
    )
}

export default ChatMessage
