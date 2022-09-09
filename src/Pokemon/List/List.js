import React from 'react';
import './List.css';
import { Link } from 'react-router-dom';
import AppContext from '../../AppContext/Context';

const List = () => {
  const [pokemons, setPokemons] = React.useState([]);
  const [search, setSearch] = React.useState('');
  const { user } = React.useContext(AppContext);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((json) => setPokemons(json.results));
  }, []);

  const filteredPokemon = pokemons.filter((pokemon) =>
    pokemon.name.toString().startsWith(search.toLowerCase()),
  );

  return (
    <div>
      <h1 className="list_title">Lista de Pokemons</h1>
      <label htmlFor="">Filtrar:</label>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p style={{ color: '#fff' }}>
        Pokémons visualizados: {Object.keys(user.pokedex).length}/151.
      </p>
      {Object.keys(user.pokedex).length === 151 && (
        <p style={{ color: 'yellow' }}>
          Parabéns, você viu todos os Pokemons!!!
        </p>
      )}
      <ul className="pokeList">
        {pokemons &&
          filteredPokemon.map(({ name }) => (
            <li className="pokeName" key={name}>
              <Link className="pokeLink" to={`/pokemons/${name}`}>
                {name}
                {user && !user.pokedex[name] && (
                  <span className="pokeInfo">Não Visualizado</span>
                )}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
