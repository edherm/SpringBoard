import React from 'react';
import { useSelector } from 'react-redux';

export default function Preview({
  content,
  title,
  description,
  fasKlass,
  children,
}) {
  const hasContent = useSelector(
    (state) => !!Object.values(state.entities[content]).length
  );

  return (
    <li className="toolbox-item-li">
      <h1 className="toolbox-item-header">{title}</h1>
      <div className="toolbox-item-body">
        {hasContent ? null : (
          <div className="empty-preview-wrapper">
            <i className={`fas fa-${fasKlass}`}></i>
            <p>{description}</p>
          </div>
        )}
        {children}
      </div>
    </li>
  );
}
