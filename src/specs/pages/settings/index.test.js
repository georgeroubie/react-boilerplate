import { render, screen } from '@testing-library/react';
import Settings from '../../../app/pages/settings';
import TestWrapper from '../../Wrapper';

test('renders title', () => {
  render(
    <TestWrapper>
      <Settings />
    </TestWrapper>,
  );
  const titleElement = screen.getByText('Settings');
  expect(titleElement).toBeInTheDocument();
});
