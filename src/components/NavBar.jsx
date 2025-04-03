import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1>Student Management</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Student</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;