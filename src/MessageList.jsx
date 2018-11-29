import React, {Component} from 'react';
import Message from './Message.jsx';
//this goes in message system, might change to component for reasons
// {this.props.previousUser.name} changed their name to {this.props.currentUser.name}


class MessageList extends Component {


  render () {

    // const some = `${this.props.oldName} changed their name to ${this.props.newName}`;
    const messages = this.props.messages;
    console.log('messagesarray: ', messages)
    const messagesToPrint = messages.map((messi) => {

        return <Message key={messi.id} name={this.props.oldName} stuff={messi}/>
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