import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from '../../../../test-utils/testing-utils';
import userEvent from '@testing-library/user-event';
import FilterBlock from './FilterBlock';
import data from '../../../../data';
import { createArrayOfUniqueValues } from '../../../../helpers/dataArrayHandler';

const authors: string[] = createArrayOfUniqueValues<string>(
  data,
  'Author l-f',
  true
);

test('author list expand functionality', async () => {
  render(
    <FilterBlock category="author" items={authors} onFilterClick={jest.fn()} />
  );
  let authorListsArray = screen.getAllByRole('list');
  expect(authorListsArray.length).toBe(1);

  const expandToggler = screen.getByText(/more/);
  fireEvent.click(expandToggler);
  // // eslint-disable-next-line testing-library/no-unnecessary-act
  // await act(async () => {});
  // //more button turns less and back
  expect(expandToggler).toHaveTextContent('less');
  // await act(async () => {
  //   await new Promise((r) => setTimeout(r, 3000))
  // })
  await waitFor(() => {
    authorListsArray = screen.getAllByRole('list');
    return expect(authorListsArray.length).toBe(2);
  });
});
