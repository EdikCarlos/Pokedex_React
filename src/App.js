import React from 'react';
import './App.css';
import List from './Pokemon/List/List';
import Resume from './Pokemon/Resume/Resume';
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
          <Route path="/pokemons/:name" element={<Resume />}></Route>
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
