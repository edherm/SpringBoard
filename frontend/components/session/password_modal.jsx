import React from "react";

class PasswordModal extends React.Component {
  render () {
    return (
      <label>Password:
            <input required type="password" onChange={this.props.handleChange("password")} value={this.props.password} />
      </label>
    )
  }
}

export default PasswordModal;