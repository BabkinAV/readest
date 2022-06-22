import data from '../data';
import { createArrayOfUniqueValues } from './dataArrayHandler';

describe('create Array of Unique Values', () => {
  test('Correct value return for author and ascend sort', () => {
    const authors= createArrayOfUniqueValues(
      data,
      'Author l-f',
      true
    );
    expect(authors.length).toBe(12);
  });
  test('Correct value return for ratings and descend sort', () => {
    const ratings= createArrayOfUniqueValues(
      data,
      'My Rating',
      false
    );
    expect(ratings).toStrictEqual([5, 4, 3, 2]);
  });
  test('Correct value return for year and descend sort', () => {
    const years= createArrayOfUniqueValues(
      data,
      'Date Read',
      false
    );
    expect(years).toStrictEqual(['2022','2021','2020','2013','2012' ]);
  });
});
