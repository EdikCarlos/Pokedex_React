import { createContext } from 'react';

const AppContext = createContext({
  user: null,
  setIntoPokedex: () => {},
});

export default AppContext;
