import React, {Component} from 'react';

class ChatBar extends Component {
  constructor() {
    super();

    this.state = {newName: 'Anonymous'}
  }
  render () {
    let yah;
    const onSecondKeyPress = evt => {
      if (evt.target.value.length > 0) {
        evt.preventDefault();
        yah = evt.target.value
        this.setState({ newName: yah})
        this.props.nameChanger(yah);
        evt.target.value = '';
      }
    }
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
        <input onBlur={onSecondKeyPress} maxLength="10" name="chatName" className="chatbar-username" placeholder={this.props.name} />
        <input onKeyPress={onKeyPress} className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;