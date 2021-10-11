import React from "react";
import { lastUpdated, messagePreview } from "../../util/messages_api_util";

export default ({page, user, message}) => {
  const prevLength = page === 'preview' ? 30 : 150;

  return (
    <li className={`${page} message-li`}>
      <div>
        <div className={`${page} message-author-initials`}>
          {user.name
            .split(" ")
            .map(str => str[0])
            .join("")
            .toUpperCase()}
        </div>
      </div>
      <div className={`${page} message-item-container`}>
        <h2>{message.title}</h2>
          <p className={`${page} message-item-p`}>
            {page === "preview" ? null : (
              `${ user.name } · ${lastUpdated(message.updated_at)}
            - `)}
            {messagePreview(message.body, prevLength)}
          </p>
      </div>
    </li>
  );
}
