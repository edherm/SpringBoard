import React from 'react';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import { ToolboxNavBar } from '../../toolboxes/toolbox_nav_bar';

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
      this.props.fetchMessage(messageId)
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
    const { userId, projectId, messageId, deleteMessage, history } = this.props;

    deleteMessage(messageId).then(
      history.push(`/${userId}/projects/${projectId}/messages`)
    )
  }

  render() {
    const { project, message, formType, match} = this.props;
  
    return (
      <div className="toolbox-container  messages-new">
        {!project || !message ? null : (
          <ToolboxNavBar topic="message" />
        )}
        {!message ? null : (
          <div className="toolbox-main messages-form">
            <div className="toolbox-body messages-new">
              <form onSubmit={this.handleSubmit}>
                <section className="message-form-section-1">
                  <div className="message-form-category-select">
                    <select value={this.state.category} onChange={this.handleChange("category")}>
                      <option value="">Pick a Category (optional)</option>
                      <option value="Announcement">Announcement</option>
                      <option value="FYI">FYI</option>
                      <option value="Heartbeat">Heartbeat</option>
                      <option value="Pitch">Pitch</option>
                      <option value="Question">Question</option>
                    </select>
                  </div>
                  <input 
                    className="message-form-title-input"
                    type="text"
                    placeholder="Type a title..."
                    value={this.state.title}
                    onChange={this.handleChange("title")}
                  />
                </section>
                <ReactQuill
                  defaultValue={this.state.body} 
                  placeholder="Write away..."
                  onChange={this.handleQuill}
                />
                <div className="message-form-section-3">
                  <input type="submit" value={formType === "messageCreate" ? (
                      "Post this Note" 
                    ) :(
                      "Save changes"
                    )} 
                  />
                  <button>
                    <Link to="./">Cancel</Link>
                  </button>
                  {formType !== "messageEdit" ? null :(
                    <button onClick={this.handleDelete}>Delete Note</button>
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