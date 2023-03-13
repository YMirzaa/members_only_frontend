import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header} from '../../components';
import { Home, Login, SignUp } from '../../pages';

import './styles.css';

export default function AppNavigation() {
    return (
        <div className="app-navigation">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/sign-up" element={<SignUp/>} />
                </Routes>
            </BrowserRouter>
        </div>

    );
}