import React, {Component} from 'react';

class Message extends Component {
  render () {
    return (
      <div className="message">
        <span className="message-username">{this.props.stuff.username}</span>
        <span className="message-content">{this.props.stuff.content}</span>
      </div>
    )
  }
}

export default Message;