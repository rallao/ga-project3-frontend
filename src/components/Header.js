import { Link } from 'react-router-dom';
import React from 'react';
import { logOut } from '../services/firebase';

const Header = (props) => {

    return (
        <div className="navbar navbar-light bg-light">
            <h1>Stay Focused</h1>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>Welcome, {props.user.displayName}</li>
                            <li>
                                <img 
                                    src={props.user.photoURL} 
                                    alt={props.user.displayName} 
                                />
                            </li>
                            <li onClick={logOut}>Logout</li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                        </>
                        :<li>
                            <Link to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;

