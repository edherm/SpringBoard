import React from "react";

class SessionForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }
  render () {
    return (
      <div>
        <h2 className="formType-header">{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>

        </form>
      </div>
    )
  }
}

export default SessionForm;