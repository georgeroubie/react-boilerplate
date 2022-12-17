import { screen } from '@testing-library/react';
import Settings from '.';
import { render } from '../../components/test/test-utils';

describe('<Settings />', () => {
  test('Should render the title', () => {
    // ARRANGE
    render(<Settings />);
    const titleElement = screen.getByText('Settings');

    // ACT

    // ASSERT
    expect(titleElement).toBeInTheDocument();
  });
});
