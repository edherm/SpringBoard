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
              <ul className="todolist-preview-ul" >
                <li className="todos-preview-item" >
                  <input type="checkbox" />
                  Todo Item1
                </li>
                <li className="todos-preview-item" >
                  <input type="checkbox" />
                  Todo Item2
                </li>
                <li className="todos-preview-item" >
                  <input type="checkbox" />
                  Todo Item3
                </li>
              </ul>
            </div>
          </li>
          <li className="todos-preview-li" >
            <div className="preview-list-container">
              <h2>Todo Title2</h2>
              <ul className="todolist-preview-ul" >
                <li className="todos-preview-item" >
                  <input type="checkbox"/>
                  Todo Item1
                </li>
                <li className="todos-preview-item" >
                  <input type="checkbox" />
                  Todo Item2
                </li>
                <li className="todos-preview-item" >
                  <input type="checkbox" />
                  Todo Item3
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