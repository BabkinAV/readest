import { render, screen } from '../../../test-utils/testing-utils';
import TopNavigation from './TopNavigation';


test('renders heading', () => {
  render(
      <TopNavigation />
  );
  const navigationList = screen.getAllByRole('listitem');
  expect(navigationList.length).toBe(3);
});
