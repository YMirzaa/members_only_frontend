import React from "react";
import { Link } from "react-router-dom";

import './styles.css';

export default function Header() {
    return (
        <header>
            <h1>Members Only </h1>
            <div className="header__buttons">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </header>
    );
}