import React from 'react';
import MessagesList from '../../../messages/messages_list';

class MessagesPreview extends React.Component {
  componentDidMount() {
    this.props.fetchMessages(this.props.projectId);
  }

  render() {
    const { messages } = this.props;

    return (
      <li className="toolbox-item-li">
        <h1 className="toolbox-item-header">NoteBook</h1>
        <div className="toolbox-item-body">
          {messages.length === 0 ? (
            <div className="empty-preview-wrapper">
              <i className="fas fa-envelope-square"></i>
              <p>Post announcements, pitch ideas, progress updates, etc.</p>
            </div>
          ) : (
            <MessagesList page="preview" />
          )}
        </div>
      </li>
    );
  }
}

export default MessagesPreview;
