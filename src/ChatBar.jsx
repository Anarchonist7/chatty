import React, {Component} from 'react';

class ChatBar extends Component {
  constructor() {
    super();

    this.state = {newName: 'Anonymous'}
  }
  render () {
    const onSecondKeyPress = evt => {
      //changes a users name
      if (evt.target.value.length > 0) {
        evt.preventDefault();
        this.setState({ newName: evt.target.value})
        this.props.nameChanger(evt.target.value);
        evt.target.value = '';
      }
    }
    const onKeyPress = evt => {
      //sends a message 
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
        <input onBlur={onSecondKeyPress} maxLength="10" name="chatName" className="chatbar-username" placeholder={this.props.name} />
        <input onKeyPress={onKeyPress} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;
