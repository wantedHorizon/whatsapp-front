import React from 'react'
import './ChatMessage.css';
function ChatMessage({name='eliran',timestamp=new Date().toUTCString(), message="This is a message",received=false}) {
    return (
        <div className={`chat__message ${!received&&'chat__receiver'}`}>
            <p>
                <span className="chat__name">{name}</span>
                {message}
        <span className="chat__timestamp">
                    {timestamp}
                </span>
            </p>

        </div>
    )
}

export default ChatMessage
