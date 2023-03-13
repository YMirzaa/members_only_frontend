import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import './styles.css';

export default function Header() {
    const {userInfo, logout}: any = useContext(AuthContext);
    let header : React.ReactNode;
    if (!userInfo) {
        header = (
            <header>
                <h1>Members Only </h1>
                <div className="header__buttons">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/sign-up">Sign Up</Link>
                </div>
            </header>
            );
    }else{
        header = (
            <header>
                <h1>Members Only </h1>
                <div className="header__buttons">
                    <Link to="/">Home</Link>
                    <button onClick={logout}>Logout</button>
                </div>
            </header>
        );
    }
    return (
        header
   );
}