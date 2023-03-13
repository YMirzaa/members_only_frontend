import React from 'react';

import './App.css';

import { AppNavigation } from './navigation';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppNavigation/>
    </AuthProvider>
  );
}

export default App;
