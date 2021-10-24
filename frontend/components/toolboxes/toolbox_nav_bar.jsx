import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ToolboxNavBar = ({topic, project, match, obj, title}) => {
  const {userId, projectId} = useParams(); 
  debugger;
  // const {obj} = useSelector(state => {
  //   return topic === 'message' ? () : ()
  // })
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
          {!obj ? null : (
            <>
              <p>></p>
              <Link to={`/${userId}/projects/${projectId}/${topic}s/${obj.id}`}>
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