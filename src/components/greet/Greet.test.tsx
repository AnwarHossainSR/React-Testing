import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Greet render correctly', () => {
  render(<Greet />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
