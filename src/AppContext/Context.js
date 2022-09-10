import { createContext } from 'react';

const AppContext = createContext({
  user: '',
  setIntoPokedex: () => {},
});

export default AppContext;
