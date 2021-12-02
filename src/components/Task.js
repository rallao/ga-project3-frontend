import React, { useState, useEffect } from "react";
// ID generator for task object
import { nanoid } from "nanoid";

const Task = () => {
  // add useState to React
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");
  const [fetchData, setFetchData] = useState(false);

  // add useEffect to React
  useEffect(() => {
    fetch("http://localhost:3001/api/tasks", {}, "GET")
      .then((response) => response.json())
      .then((data) =>
        setTasks(
          data.map((value) => ({
            id: value._id,
            taskName: value.content,
          }))
        )
      );
    setFetchData(false);
  }, [fetchData]);

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
    // setTasks([...tasks, { id: nanoid(10), taskName: task }]);
    fetch(
      "http://localhost:3001/api/tasks",
      {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ id: nanoid(10), content: task }),
      },
      "POST"
    )
      .then((response) => response.json())
      .then((data) => setFetchData(true));

    // Clean up the form
    setTask("");
  };

  // deleteTask function
  const deleteTask = (id) => {
    // Check if function is grabbing id.
    console.log(id);

    fetch(
      "http://localhost:3001/api/deleteTask?id=" + id,
      {
        method: "DELETE",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ id: nanoid(10), content: task }),
      },
      "POST"
    )
      .then((response) => response.json())
      .then((data) => setFetchData(true));
    // generate an filtered array, if the
    const filteredArray = tasks.filter((item) => item.id !== id);
    setTasks(filteredArray);
  };

  // editTask function
  const editTask = (item) => {
    // Check if function is grabbing id.
    console.log(item);

    // Change the boolean state to true.
    setEditMode(true);
    setTask(item.taskName);
    setId(item.id);
  };

  const editTaskList = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      console.log("Error: Task with no value");
      return;
    }

    // check if the item.id is equal to the edited task, if true return new taskNAme value, if false return other item.
    const editedArray = tasks.map((item) =>
      item.id === id ? { id: id, taskName: task } : item
    );

    // return the edited array and empty
    setTasks(editedArray);
    setEditMode(false);
    setTask("");
    setId("");
  };

  return (
    <div className="row">
      <div className="col-8">
        <h4 className="text-center">Task List</h4>
        <ul className="list-group">
          {tasks.map((item) => (
            <li className="list-group-item" key={item.id}>
              <span className="lead">{item.taskName}</span>
              <button
                className="btn btn-danger btn-sm float-right mx-2"
                onClick={() => deleteTask(item.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-warning btn-sm float-right"
                onClick={() => editTask(item)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-4">
        <h4 className="text-center">{editMode ? "Edit Task" : "Add Task"}</h4>
        <form onSubmit={editMode ? editTaskList : addTask}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="New task"
            // handle the user input in realtime with onChange.
            onChange={(e) => setTask(e.target.value)}
            //
            value={task}
          />
          {editMode ? (
            <button className="btn btn-warning btn-block" type="submit">
              Edit Task
            </button>
          ) : (
            <button className="btn btn-dark btn-block" type="submit">
              Add Task
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Task;
