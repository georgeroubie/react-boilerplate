import { render, screen } from '@testing-library/react';
import Home from '../../app/pages/Home';
import TestWrapper from '../Wrapper';

test('renders title', () => {
  render(
    <TestWrapper>
      <Home />
    </TestWrapper>,
  );
  const titleElement = screen.getByText('Welcome friend');
  expect(titleElement).toBeInTheDocument();
});
