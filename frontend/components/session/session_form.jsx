import React from "react";

class SessionForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/'));
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
            <input required type="text" onChange={this.handleChange("name")} value={this.state.name} />
        </label>
      )
    }

    const errorMessages = () => {
      let i = 0
      return errors.session.map((error) => {
        i++;
        return <li key={i}>{error}</li>
      })
    }
   
   return (
      <div>
        <h2 className="formType-header">
          {formType} {`${formType === "Sign Up" ? "for" : "to"}`} SpringBoard
        </h2>
        <form onSubmit={this.handleSubmit}>
          {nameField}
          <label>Email: 
            <input required type="text" onChange={this.handleChange("email")} value={this.state.email} />
          </label>
          <label>Password:
            <input required type="password" onChange={this.handleChange("password")} value={this.state.password} />
          </label>
        <ul>
          {errorMessages()}
        </ul>
          <input type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm;