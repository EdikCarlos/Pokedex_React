import AppContext from './Context';
import React from 'react';

const AppProvider = ({ children }) => {
  const defaultUser = {
    name: 'You',
    pokedex: {},
  };

  const [user, setUser] = React.useState(defaultUser);
  const setIntoPokedex = (pokemon) => {
    setUser({
      ...user,
      pokedex: {
        ...user.pokedex,
        [pokemon.name]: pokemon,
      },
    });
  };
  return (
    <AppContext.Provider value={{ user, setIntoPokedex }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
