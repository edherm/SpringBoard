import React from 'react';
import { ToolboxNavBar } from '../toolboxes/toolbox_nav_bar';
import { Link } from 'react-router-dom';
import MessagesList from './messages_list';

class MessagesIndex extends React.Component {
  componentDidMount() {
    const { projectId } = this.props;
    this.props.fetchProject(projectId);
    window.scrollTo(0, 0);
  }

  render() {
    const { page, project, projectId, userId } = this.props;

    return (
      <div className={`toolbox-container  messages-${page}`}>
        {!project ? null : <ToolboxNavBar topic="message" />}
        <div className={`toolbox-main messages-${page}`}>
          <div className={`toolbox-header-bordered messages-${page}`}>
            <div className={`toolbox-header-left messages-${page}`}>
              <Link
                to={`/${userId}/projects/${projectId}/messages/new`}
                className="messages-new-container"
              >
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
            <MessagesList page={page} />
          </div>
        </div>
      </div>
    );
  }
}

export default MessagesIndex;
