import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ToolboxNavBar = ({topic, project, match, title}) => {
  const { userId, projectId, todoListId } = useParams(); 

  const todoList = useSelector(state => {
    return topic !== 'todoList' ? null : state.entities.todo_lists[todoListId]
  })

  return (
    <div className="toolbox-nav">
      <i className="fas fa-th-large"></i>
      <Link to={`/${userId}/projects/${projectId}`}>{project.name}</Link>
      {!match.url.includes(`${topic}s/`) ? null : (
        <>
          <p>></p>
          <Link to={`/${userId}/projects/${projectId}/${topic}s`}>
            {topic === 'message' ? 'NoteBook' : (
              topic === 'todoList' ? 'To-dos' : 'Schedule'
            )}
          </Link>
          {!todoListId ? null : (
            <>
              <p>></p>
              <Link to={`/${userId}/projects/${projectId}/${topic}s/${todoListId}`}>
                {todoList?.name}
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