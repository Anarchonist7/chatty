import React, {Component} from 'react';

class ChatBar extends Component {

  render () {
    const onKeyPress = evt => {

      if (evt.key === 'Enter') {
        evt.preventDefault();
        const chatMessageInput = evt.target;

      // Here, we call the function we were sent
        this.props.handler(chatMessageInput.value);

        chatMessageInput.value = '';
      }

//makes another function to change chatname
    };
    return (
      <footer className="chatbar">
        <input name="chatName" className="chatbar-username" placeholder={this.props.currentUser.name} />
        <input onKeyPress={onKeyPress} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;