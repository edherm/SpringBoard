import React from "react";

const Toolbox = ({NavBar, HeaderLeft, HeaderCenter, HeaderRight, Body}) => {
  return (
    <div>
      {NavBar ? NavBar : null}
      <div className="toolbox-container">
        <div className="toolbox-header">
          <div className="toolbox-header-left">
            {HeaderLeft}
          </div>
          <div className="toolbox-header-center">
            {HeaderCenter}
          </div>
          <div className="toolbox-header-right">
            {HeaderRight}
          </div>
        </div>
        <div className="toolbox-body">
          <Body />
        </div>
      </div>
    </div>
  )
}

export default Toolbox;