import React from 'react';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { deleteMessage } from '../../../util/messages_api_util';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = this.props.message;
    this.handleQuill = this.handleQuill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount () {
    window.scrollTo(0,0);

    const { projectId, messageId } = this.props;
    this.props.fetchProject(projectId)
    if (this.props.formType === "messageEdit") {
      this.props.fetchMessage(projectId, messageId)
    }
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleQuill(value) {
    this.setState({ body: value })
  }

  handleSubmit (e) {
    e.preventDefault();
    const { userId, projectId } = this.props
    
    this.props.messageAction(projectId, this.state).then(
      
        // Once show page is implemented, we will push show page url
        this.props.history.push(`/${userId}/projects/${projectId}/messages`)
    )
  }

  handleDelete (e) {
    e.preventDefault();

    const { userId, projectId, messageId } = this.props

    this.props.deleteMessage(projectId, messageId).then(
      this.props.history.push(`/${userId}/projects/${projectId}/messages`)
    )
  }

  render() {
    const { project, projectId, userId, message, messageId, errors, formType} = this.props;
    
    return (
      <div className="toolbox-container  messages-new">
        {!project || !message ? null : (
          <div className="toolbox-nav">
            <i className="fas fa-th-large"></i>
            <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
            <p>></p>
            <Link to={`/${userId}/projects/${projectId}/messages`}>
              Message Board
            </Link>
          </div>
        )}
        {!message ? null : (
          <div className="toolbox-main messages-index">
            <div className="toolbox-body messages-new">
              <form onSubmit={this.handleSubmit}>
                <select value={this.state.category} onChange={this.handleChange("category")}>
                  <option value="">Pick a Category</option>
                  <option value="None">None</option>
                  <option value="Announcement">Announcement</option>
                  <option value="FYI">FYI</option>
                  <option value="Heartbeat">Heartbeat</option>
                  <option value="Pitch">Pitch</option>
                  <option value="Question">Question</option>
                </select>
                <input
                  type="text"
                  placeholder="Type a title..."
                  value={this.state.title}
                  onChange={this.handleChange("title")}
                />
                <ReactQuill
                  defaultValue={this.state.body}
                  onChange={this.handleQuill}
                />
                <div className="submit-message-container">
                  <input type="submit" value="Post this Message" />
                  <button>
                    <Link to="./">Cancel</Link>
                  </button>
                  {formType !== "messageEdit" ? null :(
                    <button onClick={this.handleDelete}>Delete Message</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        )} 
      </div>
    );
  }
}

export default MessageForm;