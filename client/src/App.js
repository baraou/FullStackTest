import { useState } from 'react';
import './App.css';
import { ChatRoom } from './components/ChatRoom';
import { Login } from './components/Login';

function App() {
  const [socket, setSocket] = useState(null);
  const [username, setUsername] = useState('');
  const [roomname, setRoomname] = useState('');

  return (
    <div className="App">
      <header className="App-header">
      { !socket ?
        <Login setSocket={setSocket} username={username} setUsername={setUsername} roomname={roomname} setRoomname={setRoomname}/> :
        <ChatRoom socket={socket} setSocket={setSocket} username={username} roomname={roomname} />
      }
      </header>
    </div>
  );
}

export default App;
