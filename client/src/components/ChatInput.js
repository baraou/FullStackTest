import { useState } from "react";
import './ChatInput.css';
import SendIcon from './send.svg';

export const ChatInput = ({ submitMessage }) => {
  const [message, setMessage] = useState('')

  const send = () => {
    submitMessage(message);
    setMessage('');
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      send();
    }
  }

  return (
    <div className='chat-input'>
      <textarea onKeyUp={handleKeyPress} onChange={(e) => setMessage(e.target.value)} value={message} placeholder='type your message here'/>
      <img src={SendIcon} alt="sendButton" onClick={() => send()}/>
    </div>
  );
}
