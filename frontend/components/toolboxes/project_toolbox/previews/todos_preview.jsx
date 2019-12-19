import React from "react";

const TodosPreview = () => {

  return (
    <li className="toolbox-item-li">
      <h1 className="toolbox-item-header" >To-dos</h1>
      <div className="toolbox-item-body" >
        <ul className="todos-preview-ul" >
          <li className="todos-preview-li" >
            <div className="preview-list-container">
              <h2>Todo Title1</h2>
              <ul className="todos-ul" >
                <li className="todos-item" >
                  <div className="todolist-checkbox false"></div>
                  <span>Todo Item1</span>
                </li>
                <li className="todos-item" >
                  <div className="todolist-checkbox false"></div>
                  <span>Todo Item2</span>
                </li>
                <li className="todos-item" >
                  <div className="todolist-checkbox false"></div>
                  <span>Todo Item3</span>
                </li>
              </ul>
            </div>
          </li>
          <li className="todos-preview-li" >
            <div className="preview-list-container">
              <h2>Todo Title2</h2>
              <ul className="todos-ul" >
                <li className="todos-item" >
                  <div className="todolist-checkbox false"></div>
                  <span>Todo Item1</span>
                </li>
                <li className="todos-item" >
                  <div className="todolist-checkbox false"></div>
                  <span>Todo Item2</span>
                </li>
                <li className="todos-item" >
                  <div className="todolist-checkbox false"></div>
                  <span>Todo Item3</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </li>
  )
}

export default TodosPreview;