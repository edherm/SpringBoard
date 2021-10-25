import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../../actions/todo_actions';
import TodoCheckbox from './todo_checkbox';

export default function TodoToggle({ todo, page }) {
  const [checked, setChecked] = useState(todo.complete);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checked !== todo.complete) {
      dispatch(updateTodo({ ...todo, complete: checked }));
    }
  }, [checked, todo]);

  const handleClick = () => {
    debugger;
    setChecked((checked) => !checked);
    const updatedTodo = { ...todo, complete: checked };
    dispatch(updateTodo(updatedTodo));
  };

  return (
    <div
      onClick={
        page === 'project' ? null : () => setChecked((checked) => !checked)
      }
      className={`todo-checkbox ${todo.complete} ${page}`}
    >
      <TodoCheckbox checked={checked} />
    </div>
  );
}
