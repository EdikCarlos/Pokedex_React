import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import List from './List';

test('renders learn react link', () => {
  render(<List />);
  const stringElement = screen.getByText(/Lista de Pokemons/i);
  expect(stringElement).toBeInTheDocument();
});
