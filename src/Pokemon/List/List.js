import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';

const List = () => {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((json) => setPokemons(json.results));
  }, []);

  return (
    <div>
      <h1 className="list_title">Lista de Pokemons</h1>
      <ul className="pokeList">
        {pokemons &&
          pokemons.map(({ name }) => (
            <li className="pokeName" key={name}>
              <Link className="pokeLink" to={`/pokemons/${name}`}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
