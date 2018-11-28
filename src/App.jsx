import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './Nav.jsx';
var inci = 3;

class App extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      currentUser: {name: 'anonymous'},
      messages: [
        {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  handler(newMsg) {
    var idee = inci++;
    const newMessage = {id: idee, username: 'Bob', content: newMsg};
    const messages = this.state.messages.concat(newMessage);
    this.setState({
      messages: messages
    });
  }

  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     // Add a new message to the list of messages in the data store
  //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //     const messages = this.state.messages.concat(newMessage)
  //     // Update the state of the app component.
  //     // Calling setState will trigger a call to render() in App and all child components.
  //     this.setState({messages: messages})
  //   }, 3000);
  // }

  render() {
    return (
      <body>
        <NavBar/>
        <MessageList {...this.state}/>
        <ChatBar handler={this.handler} {...this.state}/>
      </body>
    );
  }
}

export default App;
