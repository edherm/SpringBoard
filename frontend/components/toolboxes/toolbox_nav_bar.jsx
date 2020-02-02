import React from "react";
import { Link } from "react-router-dom";

export const ToolboxNavBar = ({topic, userId, project, match}) => {
  return (
    <div className="toolbox-nav">
      <i className="fas fa-th-large"></i>
      <Link to={`/${userId}/projects/${project.id}`}>{project.name}</Link>
      {!match.params[`${topic}Id`] ? null : (
        <>
          <p>></p>
          <Link to={`/${userId}/projects/${project.id}/${topic}s`}>
            {topic === 'message' ? 'Message Board' : (
              topic === 'todoList' ? 'To-dos' : 'Schedule'
            )}
          </Link>
        </>
      )}
    </div>
  )
} 