import React, {Component} from 'react';

class Message extends Component {
  render () {
  if (this.props.stuff.type === 'incomingMessage') {
    return (
      <div>
        <div className="message">
          <span className={this.props.color}>{this.props.stuff.username}</span>
          <span className="message-content">{this.props.stuff.content}</span>
        </div>
      </div>
    )
  } else if (this.props.stuff.type === 'incomingNotification') {
    return (
      <div className="notification">
        <span className="notification-content">{this.props.name} changed their name to {this.props.stuff.newName} </span>
      </div>
    )
    } else if (this.props.stuff.type === 'incomingSlash') {
      const act = this.props.stuff.content.split(' ');
      act.shift();
      act.join('');
      return (
       <div>
        <div className="message">
          <span className={this.props.color}>{this.props.stuff.username}</span>
          <span className="message-content italics">{act}</span>
        </div>
      </div>
      )
    } else if (this.props.stuff.type === 'incomingImage') {
      return (
      <div>
        <div className="message">
          <span className={this.props.color}>{this.props.stuff.username}</span>
          <span className="message-content"><img className="imageMessage" src={this.props.stuff.content}/></span>
        </div>
      </div>
      )
    }
  }
}

export default Message;