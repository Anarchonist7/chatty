import React, {Component} from 'react';
import Message from './Message.jsx';



class MessageList extends Component {


  render () {
    const messages = this.props.messages;
    const messagesToPrint = messages.map((messi) => {
     return <Message key={messi.id} stuff={messi}/>
    });

    if (this.props.currentUser.name !== 'Anonymous') {

    return (
      <main className="messages">

        {messagesToPrint}
        <div className="message system">
          {this.props.previousUser.name} change their name to {this.props.currentUser.name}
        </div>
      </main>
    )
    }
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