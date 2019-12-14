import React from "react";

class ToolboxNavBar extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.containers.map(container => (
            <li><Link to="">Container Name</Link></li>
          ))}
        </ul>
      </div>
    )
  }
} 

export default ToolboxNavBar;