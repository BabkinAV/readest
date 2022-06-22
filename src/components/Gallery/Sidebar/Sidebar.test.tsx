import { render, screen } from '../../../test-utils/testing-utils';
import Sidebar from './Sidebar';
import data from '../../../data';
import { createArrayOfUniqueValues } from '../../../helpers/dataArrayHandler';

const authors: string[] = createArrayOfUniqueValues<string>(
  data,
  'Author l-f',
  true
);

const ratings: number[] = createArrayOfUniqueValues<number>(
  data,
  'My Rating',
  false
);

const yearsRead: string[] = createArrayOfUniqueValues<string>(
  data,
  'Date Read',
  false
);

test('renders sidebar', () => {
  render(
    <Sidebar
      authors={authors}
      yearsRead={yearsRead}
      ratings={ratings}
      handleSortTypeChange={jest.fn()}
      handleXmarkClick={jest.fn()}
      handleFilterClick={jest.fn()}
      appliedFilters={[]}
    />
  );
});
