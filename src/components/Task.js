import React, { useState } from "react";

const Task = () => {
  // add useState to React
  const [task, setTask] = useState("");

  // addTask function.
  const addTask = (e) => {
    // prevent the page reload on submit.
    e.preventDefault();

    // validate if the form contains any value to submit, if not send an error.
    if (!task.trim()) {
      console.log("Error: Task with no value");
      return;
    }
    // Send the value in console.
    console.log(task);
  };

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
        <form onSubmit={addTask}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="New task"
            // handle the user input in realtime with onChange.
            onChange={(e) => setTask(e.target.value)}
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
