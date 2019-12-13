import React from "react";

class ToolBox extends React.Component {
  render () {
    return (
      <div>
        <p>Call ProjNavBar here and pass it toolbox path info</p>
        <div className="toolbox-container">
          <div className="toolbox-header">
            <div className="toolbox-header-left">
              <h3>+</h3>
              <p>New Thing</p>
            </div>
            <div className="toolbox-header-center">
              <div className="toolbox-header-title">
                <h1>Toolbox Title!</h1>
              </div>
              <div className="toolbox-header-info">
                <h3>extra info</h3>
              </div>
            </div>
            <div className="toolbox-header-right">
              <p>Dropdown view options</p>
              <h3>up/down</h3>
            </div>
          </div>
          <div className="toolbox-body">
            <p>Render a tool body from props here.</p>
          </div>
        </div>
      </div>
    )
  }
}