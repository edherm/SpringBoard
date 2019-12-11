import React from "react";

class SessionForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillForm = this.fillForm.bind(this);
  }

  // componentWillUnmount () {
  //   this.props.dismissErrors()
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/'));
  }

  handleChange (field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  fillForm(e) {
    e.preventDefault();
    this.setState({email: "email", name: "name", password: "password"})
  }

  render () {
    const { formType, errors } = this.props;
    
    let formOption;
    if (formType === "Sign Up") {
      formOption = (
        <div className="input-container" >
          <label htmlFor="input-form" className="input-label" >Your name</label>
          <input id="input-form" className="input-form" required type="text" id="name" onChange={this.handleChange("name")} value={this.state.name} />
        </div>
      )
    } else {
      formOption = (
        <button onClick={this.fillForm}>Demo User</button>
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
          {formOption}
          <div className="input-container" >
            <label htmlFor="input-form" className="input-label" >Your email address</label>
            <input id="input-form" className="input-form" required id="email" type="text" onChange={this.handleChange("email")} value={this.state.email} />
          </div>
          <div className="input-container" >
           <label htmlFor="input-form" className="input-label" >Your password</label>
            <input id="input-form" className="input-form" required type="password" id="password" onChange={this.handleChange("password")} value={this.state.password} />
          </div>
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