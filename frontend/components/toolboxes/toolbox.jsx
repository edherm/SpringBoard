import React from "react";

const Toolbox = ({NavBar, HeaderLeft, HeaderCenter, HeaderRight, Body}) => {
  return (
    <div>
      {NavBar ? <NavBar /> : null }
      <div className="toolbox-container">
        <div className="toolbox-header">
          <div className="toolbox-header-left">
            { HeaderLeft ? <HeaderLeft /> : null }
          </div>
          <div className="toolbox-header-center">
            { HeaderCenter ? <HeaderCenter /> : null }
          </div>
          <div className="toolbox-header-right">
            { HeaderRight ? <HeaderRight /> : null }
          </div>
        </div>
        <div className="toolbox-body">
          { Body ? <Body /> : null }
        </div>
      </div>
    </div>
  )
}

export default Toolbox;