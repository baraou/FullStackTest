import { useState } from 'react';
import './App.css';
import { ChatRoom } from './components/chatroom';
import { Login } from './components/login';

function App() {
  const [socket, setSocket] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
      { !socket ?
        <Login setSocket={setSocket}/> :
        <ChatRoom socket={socket}/>
      }
      </header>
    </div>
  );
}

export default App;
