import { Book, AppliedFilter } from '../../data.model';


 function filterBooksArray(initialArray: Book[], filterArr:AppliedFilter[]) {

  let newBookArr = initialArray.filter((book: Book) => {
    //checking if specific filter categories are present on filter array

    const isFilterListNotIncludes = {
      author: !filterArr.some((elem) => elem.category === 'author'),
      year: !filterArr.some((elem) => elem.category === 'year'),
      rating: !filterArr.some((elem) => elem.category === 'rating'),
    };

    //if specific filter categories are present - checking if appliedFilters array contains object with value equal to current book's specific property value .
    //TODO: review edge cases (like author name is equal to some number etc.)
    return (
      (isFilterListNotIncludes.author ||
        filterArr.some((distinctEl) => {
          return distinctEl.value === book['Author l-f'];
        })) &&
      (isFilterListNotIncludes.year ||
        filterArr.some((distinctEl) => {
          return distinctEl.value === book['Date Read'].slice(0, 4);
        })) &&
      (isFilterListNotIncludes.rating ||
        filterArr.some((distinctEl) => {
          return distinctEl.value === book['My Rating'];
        }))
    );
  });
  return newBookArr;


}

export default filterBooksArray;