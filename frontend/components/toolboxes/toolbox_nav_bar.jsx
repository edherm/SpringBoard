import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ToolboxNavBar = ({topic, project}) => {
  const { userId, projectId, todoListId } = useParams(); 
  const { pathname } = useLocation();
  console.log(location)
  const todoList = useSelector(state => {
    return topic !== 'todoList' ? null : state.entities.todo_lists[todoListId]
  })

  const baseURL = `/${userId}/projects/${projectId}`;
  const topicURL = `/${topic}s`;

  return (
    <div className="toolbox-nav">
      <i className="fas fa-th-large"></i>
      <Link to={baseURL}>{project.name}</Link>
      {!pathname.includes(`${topicURL}`) ? null : (
        <>
          <p>></p>
          <Link to={`${baseURL}${topicURL}`}>
            {topic === 'message' ? 'NoteBook' : (
              topic === 'todoList' ? 'To-dos' : 'Schedule'
            )}
          </Link>
          {!todoListId ? null : (
            <>
              <p>></p>
              <Link to={`${baseURL}${topicURL}/${todoListId}`}>
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