import React from "react";
import MessageIndexItem from "./message_index_item";
import { ToolboxNavBar } from "../toolboxes/toolbox_nav_bar";
import { Link } from "react-router-dom";

class MessagesIndex extends React.Component {

  componentDidMount () {
    const { projectId } = this.props.match.params
    
    this.props.fetchMessages(projectId)
    this.props.fetchProject(projectId)
    window.scrollTo(0, 0);
  }

  render () {
    const { page, user, project, messages, match } = this.props;
    const { projectId, userId } = this.props.match.params;
    console.log(messages)

    return (
      <div className={`toolbox-container  messages-${page}`}>
        {!project ? null : (
          <ToolboxNavBar topic="message" userId={userId} project={project} match={match} />
        )}
        <div className={`toolbox-main messages-${page}`}>
          <div className={`toolbox-header-bordered messages-${page}`}>
            <div className={`toolbox-header-left messages-${page}`}>
              <Link to={`/${userId}/projects/${projectId}/messages/new`} className="messages-new-container">
                <div>
                  <span className="message new-plus">+</span>
                  <label className="message new-label">New Note</label>
                </div>
              </Link>
            </div>
            <div className={`toolbox-header-center messages-${page}`}>
              <h1>NoteBook</h1>
            </div>
            <div className={`toolbox-header-right messages-${page}`}></div>
          </div>
          <div className={`toolbox-body messages-${page}`}>
            <ul className={`${page} message-ul`}>
              {messages.map(message => {
                return (
                  <Link key={message.id} to={`/${userId}/projects/${projectId}/messages/${message.id}`}>
                    <MessageIndexItem
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