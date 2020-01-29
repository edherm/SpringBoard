import React from "react";
import { lastUpdated, messagePreview } from "../../util/messages_api_util";

export default (props) => {
  const prevLength = props.page === 'preview' ? 30 : 150;

  return (
    <li className={`${props.page} message-li`}>
      <div>
        <div className={`${props.page} message-author-initials`}>
          {props.user.name
            .split(" ")
            .map(str => str[0])
            .join("")
            .toUpperCase()}
        </div>
      </div>
      <div className={`${props.page} message-item-container`}>
        <h2>{props.message.title}</h2>
          <p>
            {props.page === "preview" ? null : (
              `${ props.user.name } · ${lastUpdated(props.message.updated_at)}
            - `)}
            {messagePreview(props.message.body, prevLength)}
          </p>
      </div>
    </li>
  );
}

// <li className="message-preview-li">
//   <div className="message-preview-author-initials">PH</div>
//   <div className="message-preview-item-container">
//     <h2>2nd Message</h2>
//     <p>has content</p>
//   </div>
// </li>;