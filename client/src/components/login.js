import { init } from "../api/sockets";

const { useState } = require("react");

export const Login = (props) => {
  console.log(props);
  const { setSocket } = props;
  const [username, setUsername] = useState('');
  const [roomname, setRoomname] = useState('');

  return (
    <div>
      <p>Hello please enter a username</p>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input type="text" placeholder="Chatroom" value={roomname} onChange={(e) => setRoomname(e.target.value)}></input>
      <button onClick={() => setSocket(init(username, roomname))}>Enter chatroom</button>
    </div>
  );
}
