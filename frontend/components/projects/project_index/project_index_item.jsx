import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({project}) => {
  return (
    <li className="project-index-item-container" >
      <Link to="" className="edit-project">...</Link>
      <h1 className="project-index-item-name">{project.name}</h1>
      <p className="project-index-item-description" >{project.description}</p>
    </li>
  )
}

export default ProjectIndexItem;