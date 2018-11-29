import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './Nav.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);
    this.nameChanger = this.nameChanger.bind(this);
    this.state = {
      currentUser: {name: 'Anonymous'},
      previousUser: {name: 'Anonymous'},
      oldName: 'Anonymous',
      newName: 'Anonymous',
      messages: [],
      id: null,
      population: 0
    }
  }

  nameChanger(newName) {
    console.log('check it: ', newName, this.state.currentUser.name);
    if (newName !== this.state.currentUser.name) {
    this.socket.send(JSON.stringify({type: 'postNotification', newName: newName, previousName: this.state.currentUser.name}));
    this.setState({oldName: this.state.currentUser.name})
    this.setState({ currentUser: {name: newName}});
    }
  }

  handler(newMsg) {
    const newMessage = {type: 'postMessage', username: this.state.currentUser.name, content: newMsg};
    console.log('this is what we send ', newMessage)
    this.socket.send(JSON.stringify(newMessage));
  }

  componentDidMount() {

    this.socket = new WebSocket("ws://localhost:3001");
    this.socket.onopen = function (event) {
      console.log('connected to server');
    };

    this.socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    switch (msg.type) {
      case 'incomingMessage':
        const messages = this.state.messages.concat(JSON.parse(event.data));
        this.setState({ messages: messages });
        break;
      case 'incomingNotification':
        const notifications = this.state.messages.concat(msg);
        this.setState({ messages: notifications });
        break;
      case 'pop':
        this.setState({population: msg.population})
        break;
      }
    }
  }

  render() {
    return (
      <body>
        <NavBar population={this.state.population}/>
        <MessageList {...this.state}/>
        <ChatBar nameChanger={this.nameChanger} nameChange={this.nameChange} handler={this.handler} {...this.state.currentUser}/>
      </body>
    );
  }
}

export default App;
