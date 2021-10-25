import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../../../actions/todo_actions';
import TodoCheckbox from './todo_checkbox';

export default function TodoToggle({ todo, page }) {
  const [checked, setChecked] = useState(todo.complete);
  const dispatch = useDispatch();

  const handleClick = async () => {
    await setChecked((checked) => !checked);
    const updatedTodo = { ...todo, complete: checked };
    await dispatch(updateTodo(updatedTodo));
  };

  return (
    <div
      onClick={page === 'project' ? null : handleClick}
      className={`todo-checkbox ${todo.complete} ${page}`}
    >
      <TodoCheckbox checked={checked} />
    </div>
  );
}
