import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);
    console.log("%%", doneCount);

    return (
      <div>
        <div className="todo-footer">
          <label>
            <input
              type="checkbox"
              onChange={this.handleCheckAll}
              checked={
                doneCount === todos.length && todos.length !== 0 ? true : false
              }
            />
          </label>
          <span>
            <span>Already completed {doneCount} </span> / Total {todos.length}
          </span>
          <button onClick={this.handleClearAllDone} className="btn btn-danger">
            Clear completed tasks
          </button>
        </div>
      </div>
    );
  }
}
