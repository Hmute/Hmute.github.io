import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <p> Hello World</p>
      </main>
    </div>
  );
}

export default App;