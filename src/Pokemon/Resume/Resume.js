import React from 'react';
import './Resume.css';
import { useParams, Link } from 'react-router-dom';
import AppContext from '../../AppContext/Context';

const Resume = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const { name } = useParams();
  const { setIntoPokedex } = React.useContext(AppContext);

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((Pokemonjson) => {
        setPokemon(Pokemonjson);
        setIntoPokedex(Pokemonjson);
      });
  }, [name, setIntoPokedex]);
  if (!pokemon) {
    return null;
  }

  // Recebe o tipo do pokemon e permite através dele definir uma cor específica
  const pokeType = pokemon.types[0].type.name;
  let typeColor = '';
  switch (pokeType) {
    case 'grass':
      typeColor = 'green';
      break;
    case 'water':
      typeColor = 'blue';
      break;
    case 'fire':
      typeColor = 'red';
      break;
    case 'bug':
      typeColor = 'darkgreen';
      break;
    case 'poison':
      typeColor = 'mediumpurple';
      break;
    case 'electric':
      typeColor = 'yellow';
      break;
    case 'ground':
      typeColor = 'brown';
      break;
    case 'psychic':
      typeColor = 'darksalmon';
      break;
    case 'dragon':
      typeColor = 'orange';
      break;
    case 'ghost':
      typeColor = 'purple';
      break;
    case 'fighting':
      typeColor = 'orangered';
      break;
    case 'ice':
      typeColor = 'lightblue';
      break;
    case 'rock':
      typeColor = 'grey';
      break;
    default:
      typeColor = 'black';
  }

  return (
    <section
      className="resume_container"
      style={{ boxShadow: `1px 2px 8px 4px ${typeColor}` }}
    >
      <h1 className="resume_name">{pokemon.name}</h1>
      <img
        className="resume_img"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <p>
        Tipo:{' '}
        <span
          className="resume_type"
          style={{
            color: typeColor,
          }}
        >
          {pokemon.types[0].type.name}
        </span>{' '}
      </p>
      <ul className="resume_list">
        <li>Habilidades:</li>
        {pokemon.abilities.map((abilitie) => (
          <li key={abilitie.ability.name}>{abilitie.ability.name}</li>
        ))}
      </ul>
      <Link to="/pokemons/list">
        <button className="resume_button">Voltar</button>
      </Link>
    </section>
  );
};

export default Resume;
