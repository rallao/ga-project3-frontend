import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid"; // ID generator for task object

const URL = "http://localhost:3001/"; // development
//const URL = 'https://fathomless-gorge-28969.herokuapp.com'   // for production

const Task = () => {
  // add useState to React
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");
  const [fetchData, setFetchData] = useState(false);

  // add useEffect to React
  useEffect(() => {
    fetch(URL + "api/tasks", {}, "GET")
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
      URL + "api/tasks",
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
      URL + "api/tasks/" + id,
      {
        method: "DELETE",
      },
      "DELETE"
    )
      .then((response) => response.json())
      .then((data) => setFetchData(true));
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

    fetch(
      URL + "api/tasks",
      {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ id: id, content: task }),
      },
      "PUT"
    )
      .then((response) => response.json())
      .then((data) => setFetchData(true));
      
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
            onChange={(e) => setTask(e.target.value)}
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