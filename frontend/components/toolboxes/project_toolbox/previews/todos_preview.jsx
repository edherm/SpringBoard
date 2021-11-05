import React from 'react';
import TodoListList from '../../../todo_lists/todo_list_list';
import Preview from './preview';

export default function TodosPreview() {
  return (
    <Preview
      content="todo_lists"
      title="To-Dos"
      description="Make lists of work that needs to get done, assign items, set due dates, and discuss."
      fasKlass="check-square"
    >
      <TodoListList page="preview" />
    </Preview>
  );
}

// <li className="toolbox-item-li">
//   <h1 className="toolbox-item-header">To-dos</h1>
//   <div className="toolbox-item-body">
//     {todoListsExist ? null : (
//       <div className="empty-preview-wrapper">
//         <i className="fas fa-check-square"></i>
//         <p>
//           Make lists of work that needs to get done, assign items, set due
//           dates, and discuss.
//         </p>
//       </div>
//     )}
//   </div>
// </li>
