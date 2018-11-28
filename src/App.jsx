import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './Nav.jsx';
let inci = 1;

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
    const idee = inci++;
    const newMessage = {id: idee, username: this.state.currentUser.name, content: newMsg};
    const messages = this.state.messages.concat(newMessage);
    console.log(newMessage);
    this.socket.send('User ' + this.state.currentUser.name + ' said ' + newMessage.content);

    this.setState({ messages: messages });
  }

  componentDidMount() {
  var exampleSocket = new WebSocket("ws://localhost:3001");
  this.socket = exampleSocket;
  exampleSocket.onopen = function (event) {
  console.log('connected to server');
  exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
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
