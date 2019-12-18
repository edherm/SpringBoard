import React from "react";

const MessagesPreview = () => {
  
  return (
    <li className="toolbox-item-li">
      <h1 className="toolbox-item-header" >Message Board</h1>
      <div className="toolbox-item-body" >
        <ul className="message-preview-ul">
          <li className="message-preview-li">
            <div className="message-preview-author-initials">PH</div>
            <div className="message-preview-item-container">
              <h2>2nd Message</h2>
              <p>has content</p>
            </div>
          </li>
          <li className="message-preview-li">
            <div className="message-preview-author-initials">KB</div>
            <div className="message-preview-item-container">
              <h2>Message Title</h2>
              <p>message Preview</p>
            </div>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default MessagesPreview;