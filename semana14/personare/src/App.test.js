import { render, screen } from '@testing-library/react';
import App from './App';

test('deve conter a componente header tarot', () => {
  render(<App />);
  const componentHeaderTitle = screen.getByText(/tarot/i);
  expect(componentHeaderTitle).toBeInTheDocument();
});

test('deve conter a componente button start', () => {
  render(<App />);
  const componentButton = screen.getByText(/start/i);
  expect(componentButton).toBeInTheDocument();
});

test('deve conter 3 componente buttons', () => {
  render(<App />)

  const items = screen.queryAllByRole('button')
  expect(items).toHaveLength(3)
});