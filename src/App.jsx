import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import NavBar from './Nav.jsx';
class App extends Component {
  constructor(props) {
    super(props);

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

  render() {
    return (
      <body>
        <NavBar/>
        <MessageList {...this.state}/>
        <ChatBar {...this.state}/>
      </body>
    );
  }
}

export default App;
