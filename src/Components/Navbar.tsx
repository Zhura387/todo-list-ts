import React from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {

    return (
        <nav>
            <div className="nav-wrapper #673ab7 deep-purple px1">
                <a href="/" className="brand-logo">React + TS</a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/">list</Link></li>
                    <li><Link to="info">abut us</Link></li>
                </ul>
            </div>
        </nav>
    )
}