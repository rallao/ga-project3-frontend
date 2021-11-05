import { Link } from "react-router-dom";
import React from "react";
import { logOut } from "../services/firebase";

const Header = (props) => {
  return (
    <div className="navbar navbar-light bg-light">
      <h1>Stay Focused</h1>
      <nav>
        <ul>
          {props.user ? (
            <>
                <Link to="/todolist">Todo List</Link>

              <img
                src={props.user.photoURL}
                alt={props.user.displayName}
                class="rounded-circle"
                height="40"
              />
              <li onClick={logOut}>Logout</li>
            </>
          ) : (
            <button type="button" class="btn btn-link px-3 me-2">
              Login
            </button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
