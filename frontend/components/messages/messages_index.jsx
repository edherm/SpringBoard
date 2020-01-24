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
    const { user, project, messages } = this.props;
    const { projectId, userId } = this.props.match.params;

    return (
      <div className="toolbox-container  messages-index">
        {!project ? null : (
          <div className="toolbox-nav">
            <i className="fas fa-th-large"></i>
            <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
          </div>
        )}
        <div className="toolbox-main messages-index">
          <div className="toolbox-header-bordered messages-index">
            <div className="toolbox-header-left messages-index">
              <div className="messages-new-container">
                <div>
                  <span className="message new-plus">+</span>
                  <label className="message new-label">New Message</label>
                </div>
              </div>
            </div>
            <div className="toolbox-header-center messages-index">
              <h1>To-dos</h1>
            </div>
            <div className="toolbox-header-right messages-index"></div>
          </div>
          <div className="toolbox-body messages-index">
            <ul className="messages-ul">
              {messages.map(message => {
                return (
                  <MessageIndexItem
                    key={message.id}
                    page="index"
                    message={message}
                    user={user}
                  />
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