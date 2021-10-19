import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Board from './components/board/index'

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

test('ao clicar no botão start deve ter 78 cartas viradas', async () => {
  render(<App />)

  const button = screen.getByRole("button", {name: /start/i})
  const board = await screen.findByRole('combobox')

  userEvent.click(button)

  const cards = await within(board).findAllByRole('img')

  expect(cards).toHaveLength(78)
});