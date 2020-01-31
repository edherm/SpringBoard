import React from "react";
import MessageIndexItem from "../../../messages/message_index_item";

class MessagesPreview extends React.Component {
  
  componentDidMount() {
    this.props.fetchMessages(this.props.projectId)
  }

  render () {
    const { messages, user } = this.props;

    // if (messages.length === 0) return null;

    return (
      <li className="toolbox-item-li">
        <h1 className="toolbox-item-header">Message Board</h1>
        <div className="toolbox-item-body">
          {messages.length === 0 ? (
            <div className="empty-preview-wrapper">
              <i class="fas fa-envelope-square"></i>
              <p>Post announcements, pitch ideas, progress updates, etc.</p>
            </div>
          ) : (
            <ul className="preview message-ul">
              {messages.map(message => {
                return (
                  <MessageIndexItem 
                    key={message.id} 
                    page="preview" 
                    message={message}
                    user={user}
                  />
                )
              })}
            </ul>
          )}
        </div>
      </li>
    );
  }
}

export default MessagesPreview;