import React from 'react';
import { ChatInput } from './ChatInput';
import './ChatRoom.css';
import { Message } from './Message';

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: props.socket.connected,
      id: props.socket.id,
      messages: [],
    };
  }

  messagesEndRef = React.createRef();

  componentDidMount() {
    const { socket, setSocket } = this.props;
    socket.on('connect', () => {
      this.setState({ connected: true, id: socket.id});
    });
    socket.on('connect_error', (error) => {
      if (error.message === 'Authentication error') {
        socket.disconnect();
        setSocket(null);
      }
    });
    socket.on('disconnect', () => this.setState({ connected: false }));
    socket.on('message', (data) => {
      this.setState({ messages: [...this.state.messages, data]})
    });
  }

  componentDidUpdate() {
    const scroll =  this.messagesEndRef.current.scrollHeight -  this.messagesEndRef.current.clientHeight;
    this.messagesEndRef.current.scrollTo(0, scroll);
  }

  submitMessage(message) {
    this.props.socket.emit('message', { message })
    this.setState({ messages: [...this.state.messages, { username: this.props.username, message }]});
  }

  render() {
    return (
      <div className='chat-container'>
        <div ref={this.messagesEndRef} className='messages-list'>
          <p className='socket-status'>{this.state.connected ? 'Connected to' : 'Disconnected from'} {this.props.roomname}</p>
          { this.state.messages.map((message, key) => <Message key={key} username={message.username} message={message.message}/>) }
        </div>
        <ChatInput submitMessage={(message) => this.submitMessage(message)}/>
      </div>
    )
  }
}
