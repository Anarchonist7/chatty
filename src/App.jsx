import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './Nav.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
    this.state = {
      currentUser: {name: 'hob'},
      messages: []
    }
  }

  handler(newMsg) {
    const newMessage = {username: this.state.currentUser.name, content: newMsg};
    this.socket.send(JSON.stringify(newMessage));
    // const messages = this.state.messages.concat(newMessage);
    // this.setState({ messages: messages });
    // this.socket.send('User ' + this.state.currentUser.name + ' said ' + newMessage.content);
  }

  componentDidMount() {

    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function (event) {
      console.log('connected to server');
    };

    this.socket.onmessage = (event) => {
      console.log('this is the event data ', event.data);
      const messages = this.state.messages.concat(JSON.parse(event.data));
      this.setState({ messages: messages });
    }
  }

  render() {
    return (
      <body>
        <NavBar/>
        <MessageList {...this.state}/>
        <ChatBar nameChanger={this.nameChanger} handler={this.handler} {...this.state.currentUser}/>
      </body>
    );
  }
}

export default App;
