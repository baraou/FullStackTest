import React from 'react';

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connected: props.socket.connected, id: props.socket.id };
  }

  componentDidMount() {
    const { socket } = this.props;
    socket.on('connect', () => {
      this.setState({ connected: true, id: socket.id});
      console.log('connected', socket.id);
    });
    socket.on('connect_error', () => {
      this.setState({ connected: false });
      console.log('connect error');
    });
    socket.on('disconnect', () => this.setState({ connected: false }));
    }

  render() {
    return (
      <div>
        <p>{this.state.connected ? 'Connected to' : 'Disconnected from'} socket {this.state.id}</p>
      </div>
    )
  }
}
