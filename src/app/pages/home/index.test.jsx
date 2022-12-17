import { screen } from '@testing-library/react';
import Home from '.';
import { render } from '../../components/test/test-utils';

describe('<Home />', () => {
  test('Should render the title', () => {
    // ARRANGE
    render(<Home />);
    const titleElement = screen.getByText('React boilerplate');

    // ACT

    // ASSERT
    expect(titleElement).toBeInTheDocument();
  });
});
