import React from 'react';
import { useSelector } from 'react-redux';
import TodoListList from '../../../todo_lists/todo_list_list';

export default function TodosPreview() {
  const todoListsExist = useSelector(
    (state) => !!Object.values(state.entities.todo_lists).length
  );
  return (
    <li className="toolbox-item-li">
      <h1 className="toolbox-item-header">To-dos</h1>
      <div className="toolbox-item-body">
        {todoListsExist ? null : (
          <div className="empty-preview-wrapper">
            <i className="fas fa-check-square"></i>
            <p>
              Make lists of work that needs to get done, assign items, set due
              dates, and discuss.
            </p>
          </div>
        )}
        <TodoListList page="preview" />
      </div>
    </li>
  );
}
