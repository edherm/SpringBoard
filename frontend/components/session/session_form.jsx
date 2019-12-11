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
        <>
          <label for="name">Your name</label>
          <input required type="text" id="name" onChange={this.handleChange("name")} value={this.state.name} />
        </>
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
      <div className="session-form-container" >
        <h2 className="formType-header">
          {formType} {`${formType === "Sign Up" ? "for" : "to"}`} SpringBoard
        </h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {nameField}
          <label for="email">Your email address</label>
          <input required id="email" type="text" onChange={this.handleChange("email")} value={this.state.email} />
          <label for="password">Your password</label>
          <input required type="password" id="password" onChange={this.handleChange("password")} value={this.state.password} />
          <ul>
            {errorMessages()}
          </ul>
          <input className={`${formType.slice(0,3)}-button`} type="submit" value={this.props.formType} />
        </form>
      </div>
    )
  }
}

export default SessionForm;