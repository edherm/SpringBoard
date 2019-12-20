import React from "react";
import { Link } from "react-router-dom";

const TodoList = ({todoList, page}) => {
  return (
    <>
      <ul className="todos-ul">
        <li className={`todo-list-title ${page}`}>
          <Link to={`./todoLists/${todoList.id}`} >
            <p>0/6 completed</p>
            <h3>{todoList.name}</h3>
          </Link>
        </li>
        <li className="todos-item" >
          <div className={`todolist-checkbox false ${page}`}></div>
          <span className={`todo-item-description ${page}`}>Todo Item1</span>
        </li>
        <li className="todos-item" >
          <div className={`todolist-checkbox false ${page}`}></div>
          <span className={`todo-item-description ${page}`}>Todo Item2</span>
        </li>
        <li className="todos-item" >
          <div className={`todolist-checkbox false ${page}`}></div>
          <span className={`todo-item-description ${page}`}>Todo Item3</span>
        </li>
      </ul>
      <input 
        className="new-todo" 
        type="submit" 
        onClick={ e => e.preventDefault() } 
        value="Add a to-do" 
      />
    </>
  )
}

export default TodoList;