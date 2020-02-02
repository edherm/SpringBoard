import React from "react";
import ReactQuill from 'react-quill';
import { Link } from "react-router-dom";
import { lastUpdated } from "../../util/messages_api_util";
import { ToolboxNavBar } from "../toolboxes/toolbox_nav_bar";

class MessageShow extends React.Component {
  componentDidMount () {
    window.scrollTo(0,0);
    
    this.props.fetchProject(this.props.projectId);
    this.props.fetchMessage(this.props.projectId, this.props.messageId)
  }


  render () {
    const { project, message, user, messageId, projectId, userId, page, match } 
      = this.props

    if (!message) return null;

    return (
      <div className={`toolbox-container  messages-${page}`}>
        {!project ? null : (
          <ToolboxNavBar topic="message" userId={userId} project={project} match={match} />
        )}
        <div className={`toolbox-main messages-${page}`}>
          <div className={`toolbox-header-bordered messages-${page}`}>
            <div className={`toolbox-header-left messages-${page}`}>
              <h1>{message.title}</h1>
            </div>
            <div className={`toolbox-header-center messages-${page}`}>
              
            </div>
            <div className={`toolbox-header-right messages-${page}`}>
              <div className="toolbox-edit-link-container">
                <Link
                  className="message toolbox-edit-link" 
                  to={`/${userId}/projects/${projectId}/messages/${messageId}/edit`}
                >
                  ...
                </Link>
              </div>
            </div>
          </div>
          <div className={`toolbox-body messages-${page}`}>
            <div className="message-info-wrapper">
              <div className={`${page} message-author-initials`}>
                {user.name
                  .split(" ")
                  .map(str => str[0])
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <span>{user.name}</span>
                <span>{lastUpdated(message.updated_at)}</span>
              </div>
            </div>
            <div className="message-body-wrapper" >
              <ReactQuill
                value={message.body}
                readOnly={true}
                theme={"bubble"}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageShow;


{/* <div className="toolbox-nav">
  <>
    {!projectId ? null : (
      <>
        <i className="fas fa-th-large"></i>
        <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
      </>
    )}
    {!match.params[`${topic}Id`] ? null : (
      <>
        <p>></p>
        <Link to={`/${userId}/projects/${projectId}/${topic}s`}>
          Message Board
                  </Link>
      </>
    )}
  </>
</div> */}