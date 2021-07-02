import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <h1>React Router Tutorial</h1>

            <ul className="nav">
                <li>
                    {/* CAUSES A RE-RENDER OF THE COMPONENT <a href="/">Home</a> */}
                    <Link to="/">Home</Link>
                </li>
                <li>
                    {/* CAUSES A RE-RENDER OF THE COMPONENT <a href="/about">About</a> */}
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {/* CAUSES A RE-RENDER OF THE COMPONENT <a href="/profile">Profile</a> */}
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </>
    )
}

export default Header
