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

  const handleClick =
    page === 'project' || page === 'newTodo'
      ? null
      : () => setChecked((checked) => !checked);

  return (
    <div onClick={handleClick} className={`todo-checkbox ${checked} ${page}`}>
      <TodoCheckbox checked={checked} />
    </div>
  );
}
