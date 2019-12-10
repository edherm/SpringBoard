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

  handleChange (field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }


  render () {
    const { formType, errors } = this.props;

    let nameField;
    if (formType === "Sign Up") {
      nameField = (
        <label>Name:
            <input type="text" onChange={this.handleChange("name")} value={this.state.name} />
        </label>
      )
    }

    const errorMessages = () => (
      errors.session.map((error) => {
        return <li>{error}</li>
      })
    )
   
   return (
      <div>
        <h2 className="formType-header">
          {formType} {`${formType === "Sign Up" ? "for" : "to"}`} SpringBoard
        </h2>
        <ul>
          {errorMessages()}
        </ul>
        <form onSubmit={this.handleSubmit}>
          {nameField}
          <label>Email: 
            <input type="text" onChange={this.handleChange("email")} value={this.state.email} />
          </label>
          <label>Password:
            <input type="password" onChange={this.handleChange("password")} value={this.state.password} />
          </label>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm;