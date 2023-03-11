import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import { Header} from './components';
import { Home, Login, SignUp } from './pages';

function App() {
  return (
    <div className="app">
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

export default App;
