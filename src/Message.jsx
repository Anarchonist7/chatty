import React, {Component} from 'react';

class Message extends Component {
  render () {
    console.log('this.props: ', this.props)

  if (this.props.stuff.type === 'incomingMessage') {
    return (
      <div>
        <div className="message">
          <span className="message-username">{this.props.stuff.username}</span>
          <span className="message-content">{this.props.stuff.content}</span>
        </div>
      </div>
    )
  }
    return (
      <div className="notification">
        <span className="notification-content">{this.props.name} changed their name to {this.props.stuff.newName} </span>
      </div>
    )
  }
}

export default Message;