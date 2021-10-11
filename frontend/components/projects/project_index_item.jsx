import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({project, userId}) => {
  return (
    <li className="project-index-item-li project-index-item-container" >
      <Link to={`/${userId}/projects/${project.id}/edit`} className="edit-project">...</Link>
      <Link to={`/${userId}/projects/${project.id}`}>
        <h1 className="project-index-item-name">{project.name}</h1>
        <p className="project-index-item-description" >{project.description}</p>
      </Link>
    </li>
  )
}

export default ProjectIndexItem;