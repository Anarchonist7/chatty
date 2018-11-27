import React, {Component} from 'react';
import Message from './Message.jsx';



class MessageList extends Component {


  render () {
    let some = this.props.messages;
    let list = some.map((messi) => {
     return <Message key={messi.id} stuff={messi}/>
    });
    return (
      <main className="messages">

        {list}
        <div className="message system">
          Anonymous1 changed their name to nomnom.
        </div>
      </main>
    )
  }
}

export default MessageList;