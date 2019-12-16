import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({project, userId}) => {
  return (
    <Link className="project-index-item-container" to={`/${userId}/projects/${project.id}`}>
      <li className="project-index-item-li" >
        <Link to={`/${userId}/projects/${project.id}/edit`} className="edit-project">...</Link>
        <h1 className="project-index-item-name">{project.name}</h1>
        <p className="project-index-item-description" >{project.description}</p>
      </li>
    </Link>
  )
}

export default ProjectIndexItem;