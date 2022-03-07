import { render, screen } from '@testing-library/react';
import Home from '../../../app/pages/Home';

test('renders title', () => {
  render(<Home />);
  const titleElement = screen.getByText('Welcome');
  expect(titleElement).toBeInTheDocument();
});
