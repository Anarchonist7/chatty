import React, {Component} from 'react';
import Message from './Message.jsx';



class MessageList extends Component {


  render () {
    const messages = this.props.messages;
    const messagesToPrint = messages.map((messi) => {
     return <Message key={messi.id} stuff={messi}/>
    });
    return (
      <main className="messages">

        {messagesToPrint}
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
    )
  }
}

export default MessageList;