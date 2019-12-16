import React from "react";

class SessionForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fillForm = this.fillForm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state)
    this.props.action(user)
      .then((user) => {
        this.props.history.push(`/${user.id}/projects`)
      });
  }

  handleChange (field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  fillForm(e) {
    e.preventDefault();
    this.setState({email: "demo@email.com", password: "password"})
  }

  render () {
    const { formType, errors } = this.props;
    const formTypeKlass = formType.slice(0, 3);
    const activeKlass = "input-container";

    const formOption = () => {
      if (formType === "Sign Up") {
        return (
          <div className={activeKlass} >
            <label htmlFor="input-form" className="input-label" >Your name</label>
              <input 
                id="input-form" 
                className="input-form" 
                required type="text" 
                id="name" 
                onChange={this.handleChange("name")} 
                value={this.state.name} 
              />
          </div>
        )
      } else {
        return (
          <div className="login-options">
            <div className="demo-button">
              <button onClick={this.fillForm}>Use my Demo account</button>
            </div>
            <div className="login-options-instruction">
              <h2>
                <span>Or, use my email address</span>
              </h2>
            </div>
          </div>
        )
      }
    }

    const outerHeader = () => {
      if (formType === "Sign Up") {
        return (
          <div className="form-header-container">
            <h2 className={`${formTypeKlass}-header`}>
              {formType} for SpringBoard Personal
            </h2>
          </div>
        )
      }
    }

    const innerHeader = ()=> {
      if (formType === "Log In") {
        return (
          <div className="form-header-container">
            <h2 className={`${formTypeKlass}-header`}>
              {formType} to SpringBoard
            </h2>
          </div>
        )
      } else {
        return (
          <div className="inner-header-container">
            <h3 className={`sign-up-instructions`}>
              Type your name & email address to begin
            </h3>
          </div>
        )
      }
    }

    const errorMessages = () => {
      let i = 0
      return errors.session.map((error) => {
        i++;
        return <li key={i}>{error}</li>
      })
    }
   
    return (
      <div className={formTypeKlass}>
        <img className="form-logo-img" src={window.springURL} alt="SpringBoard Logo" />
        {outerHeader()}
        <div className="session-form-container" >
          {innerHeader()}
          <form className="session-form" onSubmit={this.handleSubmit}>
            {formOption()}
            <div className={activeKlass} >
              <label htmlFor="input-form" className="input-label" >Your email (e.g. julie@widgetco.com)</label>
              <input 
                id="input-form" 
                className="input-form" 
                required id="email" 
                type="text" 
                onChange={this.handleChange("email")} 
                value={this.state.email} 
              />
            </div>
            <div className={activeKlass} >
            <label htmlFor="input-form" className="input-label" >Your password</label>
              <input 
                id="input-form" 
                className="input-form" 
                required 
                type="password" 
                id="password" 
                onChange={this.handleChange("password")} 
                value={this.state.password} 
              />
            </div>
            <ul>
              {errorMessages()}
            </ul>
            <input 
              className={`${formType.slice(0,3)}-button`} 
              type="submit" 
              value={this.props.formType} 
            />
          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;