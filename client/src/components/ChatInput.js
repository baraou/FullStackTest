import { useState } from "react";

export const ChatInput = ({ socket, submitMessage }) => {
  const [message, setMessage] = useState('')
  return (
    <div className='chat-input'>
      <input onChange={(e) => setMessage(e.target.value)} placeholder='type your message here'/>
      <button onClick={() => submitMessage(message) && setMessage('')}>Send</button>
    </div>
  );
}
