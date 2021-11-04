import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { auth } from "./services/firebase";

// Import Components
import Header from "./components/Header";
// import Timer from "./components/Timer";
// import Task from "./components/Task";

// Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login.js";
import Todolist from "./pages/Todolist";

function App() {
  const [user, setUser] = useState(null);

  const [apitasks, setApitasks] = useState([]);

  const API_URL = "http://localhost:3001/api/apitasks"; // DEV

  // apitask helper functions
  const getApitask = async () => {
    const response = await fetch(API_URL);
    const apitask = await response.json();
    setApitasks(apitask);
  };

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => setUser(user));
    getApitask();
    return () => unsuscribe();
  }, [user]);

  return (
    <div className="container">
      <Header user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/login"
          render={() => (user ? <Redirect to="/todolist" /> : <Login />)}
        />
        <Route
          path="/todolist"
          render={() => (user ? <Todolist /> : <Redirect to="/login" />)}
        />
      </Switch>
    </div>
  );
}

export default App;
