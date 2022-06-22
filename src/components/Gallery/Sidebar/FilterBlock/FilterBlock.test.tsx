import { fireEvent, render, screen } from '../../../../test-utils/testing-utils';
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
      <FilterBlock category="author" items={authors} onFilterClick={jest.fn()}/>
  );
  let authorListsArray = screen.getAllByRole('list');
  expect(authorListsArray.length).toBe(1);

  const expandToggler = screen.getByText(/more/);
  fireEvent.click(expandToggler);
  //more button turns less and back
  expect(expandToggler).toHaveTextContent('less');
  await new Promise((r) => setTimeout(r, 3000));
  authorListsArray = screen.getAllByRole('list');
  expect(authorListsArray.length).toBe(2);
  



});
