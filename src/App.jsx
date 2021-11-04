import { useState, useEffect } from "react";
import { Routes, Route, Redirect } from 'react-router-dom';

// Import Components
import Header from "./components/Header";
// import Timer from "./components/Timer";
import Task from "./components/Task";

// Import Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Todolist from './pages/Todolist'

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todolist">
          <Todolist />
          <Task />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
