import React from "react";

export const Navbar: React.FC = () => {

    return (
        <nav>
            <div className="nav-wrapper #673ab7 deep-purple px1">
                <a href="/" className="brand-logo">React + TS</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">list</a></li>
                    <li><a href="/">abut us</a></li>
                </ul>
            </div>
        </nav>
    )
}