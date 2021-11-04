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
  // Login Feature
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => setUser(user));
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
