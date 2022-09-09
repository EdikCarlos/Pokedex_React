import React from 'react';
import './App.css';
import List from './Pokemon/List/List';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/pokemons/list" element={<List />}></Route>
          <Route
            path="/"
            exact
            element={<Navigate to="pokemons/list" />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
