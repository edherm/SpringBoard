import React from "react";
import MessageIndexItem from "./message_index_item";
import { Link } from "react-router-dom";

class MessagesIndex extends React.Component {

  componentDidMount () {
    const { projectId } = this.props.match.params
    
    this.props.fetchMessages(projectId)
    this.props.fetchProject(projectId)
    window.scrollTo(0, 0);
  }

  render () {
    const { page, user, project, messages } = this.props;
    const { projectId, userId } = this.props.match.params;

    return (
      <div className={`toolbox-container  messages-${page}`}>
        {!project ? null : (
          <div className="toolbox-nav">
            <i className="fas fa-th-large"></i>
            <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
          </div>
        )}
        <div className={`toolbox-main messages-${page}`}>
          <div className={`toolbox-header-bordered messages-${page}`}>
            <div className={`toolbox-header-left messages-${page}`}>
              <Link to={`/${userId}/projects/${projectId}/messages/new`} className="messages-new-container">
                <div>
                  <span className="message new-plus">+</span>
                  <label className="message new-label">New Message</label>
                </div>
              </Link>
            </div>
            <div className={`toolbox-header-center messages-${page}`}>
              <h1>Message Board</h1>
            </div>
            <div className={`toolbox-header-right messages-${page}`}></div>
          </div>
          <div className={`toolbox-body messages-${page}`}>
            <ul className={`${page} message-ul`}>
              {messages.map(message => {
                return (
                  <Link to={`/${userId}/projects/${projectId}/messages/${message.id}`}>
                    <MessageIndexItem
                      key={message.id}
                      page={page}
                      message={message}
                      user={user}
                    />
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesIndex;