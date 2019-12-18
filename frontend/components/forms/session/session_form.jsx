import React from "react";

class SessionForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: "",
      name: "",
      password: "",
      selected: { 
        email: false,
        name: false,
        password: false
      }
    }
    this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  handleFocus (field) {
    return () => {
      let selected = this.state.selected;
      selected[field] = true;
      this.setState({ selected })
    }
  }

  handleBlur(field) {
    return (e) => {
      const value = this.state[field];
      if (value === "") {
        let selected = this.state.selected;
        selected[field] = false;
        this.setState({ selected })
      }
    }
  }

  fillForm(e) {
    e.preventDefault();
    this.props.action({ email: "demo@email.com", password: "password" })
      .then((user) => {
        this.props.history.push(`/${user.id}/projects`)
      });
  }

  render () {
    const { formType, errors } = this.props;
    const formTypeKlass = formType.slice(0, 3);

    const formOption = () => {
      if (formType === "Sign Up") {
        return (
          <div className="session-input-container" >
            <label 
              htmlFor="input-form" 
              className={this.state.selected.name ? "filled session-label" : "session-label"} 
              >Your name
            </label>
              <input 
                id="input-form" 
                className="input-form" 
                required type="text" 
                id="name" 
                onChange={this.handleChange("name")} 
                onFocus= {this.handleFocus("name")} 
                onBlur={() => this.handleBlur("name")} 
                value={this.state.name} 
              />
          </div>
        )
      } else {
        return (
          <div className="login-options">
            <div className="demo-button-container">
              <button className="demo-button" onClick={this.fillForm}>
                Use my Demo account
              </button>
            </div>
            <div className="login-options-instruction">
              <h2 className="login-instructions">
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
          <div className="signup-header-container">
            <h2 className="signup-header">
              {formType} for SpringBoard Personal
            </h2>
          </div>
        )
      }
    }

    const innerHeader = ()=> {
      if (formType === "Log In") {
        return (
          <div className="login-header-container">
            <h2 className={`login-header`}>
              {formType} to SpringBoard
            </h2>
          </div>
        )
      } else {
        return (
          <div className="signup-instructions-container">
            <h3 className={`signup-instructions`}>
              Type your name & email address to begin
            </h3>
          </div>
        )
      }
    }

    const emailInput = () => (
      <>
        <label 
          htmlFor="input-form" 
          className={this.state.selected.email ? "filled session-label" : "session-label"} 
          >Your email (e.g. julie@widgetco.com)
        </label>
        <input
          id="input-form"
          className="input-form"
          required id="email"
          type="text"
          onChange={this.handleChange("email")}
          onFocus={this.handleFocus("email")}
          onBlur={() => this.handleBlur("email")} 
          value={this.state.email}
        />
      </>
    );

    const passwordInput = () => (
      <>
        < label 
          htmlFor = "input-form" 
          className={this.state.selected.password ? "filled session-label": "session-label" } 
          >Your password
        </label>
        <input
          id="input-form"
          className="input-form"
          required
          type="password"
          id="password"
          onChange={this.handleChange("password")}
          onFocus={this.handleFocus("password")}
          onBlur={() => this.handleBlur("password")} 
          value={this.state.password}
        />
      </>
    );

    const errorMessages = () => {
      let i = 0
      return errors.session.map((error) => {
        i++;
        return <li key={i}>{error}</li>
      })
    }
   
    return (
      <div className={formTypeKlass}>
        <div className="form-logo-container">
          <img className="form-logo-img" src={window.springBoardLitURL} alt="SpringBoard Logo" />
        </div>
        {outerHeader()}
        <div className="session-form-container" >
          {innerHeader()}
          <form className="session-form" onSubmit={this.handleSubmit}>
            {formOption()}
            <div className="session-input-container" >
              {emailInput()}
            </div>
            <div className="session-input-container" >
              {passwordInput()}
            </div>
            <ul>
              {errorMessages()}
            </ul>
            <div className="session-submit-container">
              <input 
                className={`${formType.slice(0,3)}-button`} 
                type="submit" 
                value={this.props.formType} 
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SessionForm;