import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodoLists } from '../../actions/todo_list_actions';
import { fetchTodos, updateTodo } from '../../actions/todo_actions';
import { filterByProject } from '../../util/project_api_util';
import TodoList from './todo_list';

export default ({ page }) => {
  const dispatch = useDispatch();
  const { projectId, userId } = useParams();
  const { todoLists, todos } = useSelector((state) => ({
    todoLists: filterByProject(
      Object.values(state.entities.todo_lists),
      projectId
    ),
    todos: filterByProject(Object.values(state.entities.todos), projectId),
  }));

  const [loaded, setLoaded] = useState(!!todoLists.length);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);
      dispatch(fetchTodoLists(projectId));
    }
  }, [loaded, projectId, dispatch]);

  const klass = page === 'preview' ? 'preview' : 'list';

  return (
    <ul className={`todo-${klass}-ul`}>
      {todoLists.map((todoList) => {
        return (
          <li key={todoList.id} className={`todo-${klass}-li`}>
            <TodoList
              todoList={todoList}
              projectId={projectId}
              page={page}
              fetchTodos={(todoListId) => dispatch(fetchTodos(todoListId))}
              todos={todos}
              updateTodo={(todo) => dispatch(updateTodo(todo))}
              userId={userId}
            />
          </li>
        );
      })}
    </ul>
  );
};
