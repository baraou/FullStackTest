import { init } from "../service/sockets";

export const Login = (props) => {
  const {
    setSocket,
    username,
    roomname,
    setRoomname,
    setUsername
  } = props;

  return (
    <div>
      <p>Hello please enter a username</p>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
      <input type="text" placeholder="Chatroom" value={roomname} onChange={(e) => setRoomname(e.target.value)}></input>
      <button onClick={() => setSocket(init(username, roomname))}>Enter chatroom</button>
    </div>
  );
}
