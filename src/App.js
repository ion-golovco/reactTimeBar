import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import AppTimer from './components/AppTimer'


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <AppTimer />
    </div>
  );
}

export default App;
