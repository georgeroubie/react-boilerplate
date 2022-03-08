import { render, screen } from '@testing-library/react';
import Home from '../../app/pages/Home';
import { AppProvider } from '../../app/state/context';

test('renders title', () => {
  render(
    <AppProvider>
      <Home />
    </AppProvider>,
  );
  const titleElement = screen.getByText('Welcome friend');
  expect(titleElement).toBeInTheDocument();
});
