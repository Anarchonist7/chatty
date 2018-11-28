import React, {Component} from 'react';

class ChatBar extends Component {

  render () {
    const onKeyPress = evt => {

      if (evt.key === 'Enter') {
        const chatMessageInput = evt.target;
        evt.preventDefault();

        if (chatMessageInput.value.length !== 0) {
          this.props.handler(chatMessageInput.value);
          chatMessageInput.value = '';
        }
      }
    };
    return (
      <footer className="chatbar">
        <input name="chatName" className="chatbar-username" placeholder={this.props.name} />
        <input onKeyPress={onKeyPress} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;