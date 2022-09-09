import React from 'react';
import './App.css';
import List from './Pokemon/List/List';
import Resume from './Pokemon/Resume/Resume';
import AppProvider from './AppContext/Provider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <AppProvider>
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
      </AppProvider>
    </div>
  );
}

export default App;
