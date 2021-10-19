import { render, screen } from '@testing-library/react';
import Board from './index'

test('deve conter 78 Cartas em Board', () => {
  render(<Board />);

  const items = screen.queryAllByRole('img')
  expect(items).toHaveLength(78)
});
