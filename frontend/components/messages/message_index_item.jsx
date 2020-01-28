import React from "react";
import { messagePreview } from "../../util/messages_api_util";

export default (props) => {
  const lastUpdated = updated_at => {
    const d = new Date(updated_at);
    return d.toString().slice(4, 7) + ". " + d.toString().slice(7, 10) + ", " + d.toString().slice(10, 15)
  }

  return (
    <li className={`${props.page} message-li`}>
      <div className={`${props.page} message-author-initials`}>
        {props.user.name
          .split(" ")
          .map(str => str[0])
          .join("")
          .toUpperCase()}
      </div>
      <div className={`${props.page} message-item-container`}>
        <h2>{props.message.title}</h2>
        <p>
          {props.user.name} · {lastUpdated(props.message.updated_at)} - {messagePreview(props.message.body)}
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