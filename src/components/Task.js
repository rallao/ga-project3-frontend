import React from "react";

const Task = () => {
  return (
    <div className="row">
      <div className="col-8">
        <h4 className="text-center">Task List</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="lead">Task Name</span>
            <button className="btn btn-danger btn-sm float-right mx-2">
              Delete
            </button>
            <button className="btn btn-warning btn-sm float-right">Edit</button>
          </li>
        </ul>
      </div>
      <div className="col-4">
        <h4 className="text-center">Form</h4>
        <form>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="New task"
          />
          <button className="btn btn-dark btn-block" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Task;
