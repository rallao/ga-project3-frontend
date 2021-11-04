import Navbar from "./components/Navbar";
// import Timer from "./components/Timer";
import Task from "./components/Task";
import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';


import Home from './pages/Home'
import Login from './pages/Login'
import Todolist from './pages/Todolist'

function App() {
  return (
    <div className="container">
      <Navbar />
      <hr />
      {/* <Timer />
      <hr /> */}
      <Task />
    </div>
  );
}

export default App;
