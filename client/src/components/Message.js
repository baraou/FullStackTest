import './Message.css'


export const Message = ({ username, message }) => {
  const colors = [
    '#FFCCCC',
    '#CCFFCC',
    '#CCCCFF',
    '#CFCFCF',
    '#DD33DD',
    '#33DDDD',
    '#DDDD33',
    '#3333DD',
    '#33DD33',
    '#DD3333',
  ]
  const getColor = () => {
    const r = username.charCodeAt(0) % 10;
    return colors[r];
  };

  return <p className="message"><span style={{ color: getColor(username) }}>{username}</span> : { message }</p>
}
