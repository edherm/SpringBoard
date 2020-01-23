import React from "react";

const MessagesPreview = () => {
  
  return (
    <li className="toolbox-item-li">
      <h1 className="toolbox-item-header">Message Board</h1>
      <div className="toolbox-item-body">
        <ul className="preview message-ul">
          <li className="preview message-li">
            <div className="preview message-author-initials">PH</div>
            <div className="preview message-item-container">
              <h2>2nd Message</h2>
              <p>has content</p>
            </div>
          </li>
          <li className="preview message-li">
            <div className="preview message-author-initials">KB</div>
            <div className="preview message-item-container">
              <h2>Message Title</h2>
              <p>message Preview</p>
            </div>
          </li>
        </ul>
      </div>
    </li>
  );
}

export default MessagesPreview;