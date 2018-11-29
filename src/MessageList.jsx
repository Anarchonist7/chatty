import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render () {
    const messages = this.props.messages;
    const messagesToPrint = messages.map((messi) => {
      console.log('its the color yo: ', messi.color)
      return <Message color={messi.color} key={messi.id} name={this.props.oldName} stuff={messi}/>
    });
      return (
      <main className="messages">
        {messagesToPrint}
        <div className="message system">
        </div>
      </main>
    )
  }
}

export default MessageList;