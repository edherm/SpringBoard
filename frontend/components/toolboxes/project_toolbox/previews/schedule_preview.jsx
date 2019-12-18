import React from "react";

const SchedulePreview = () => {

  return (
    <li className="toolbox-item-li">
      <h1 className="toolbox-item-header" >Schedule Board</h1>
      <div className="toolbox-item-body" >
        <ul>
          <li>
            <div>
              <h2>Mon, Jan 1</h2>
              <ul>
                <li>Event title</li>
                <li>12:00am - 1:00am</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h2>Mon, Jan 1</h2>
              <ul>
                <li>Event title</li>
                <li>12:00am - 1:00am</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default SchedulePreview;