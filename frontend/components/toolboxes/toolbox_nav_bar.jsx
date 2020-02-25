import React from "react";
import { Link } from "react-router-dom";

export const ToolboxNavBar = ({topic, userId, project, match, obj, title}) => {
  return (
    <div className="toolbox-nav">
      <i className="fas fa-th-large"></i>
      <Link to={`/${userId}/projects/${project.id}`}>{project.name}</Link>
      {!match.url.includes(`${topic}s/`) ? null : (
        <>
          <p>></p>
          <Link to={`/${userId}/projects/${project.id}/${topic}s`}>
            {topic === 'message' ? 'NoteBook' : (
              topic === 'todoList' ? 'To-dos' : 'Schedule'
            )}
          </Link>
          {title === undefined || title.length === 0 ? null : (
            <>
              <p>></p>
              <Link to={`/${userId}/projects/${project.id}/${topic}s/${obj.id}`}>
                {title}
              </Link>
            </>
          )}
        </>
      )}
    </div>
  )
} 

// need to refactor so that the second link displays for the new message form,
//    and a third to message show from the edit message form