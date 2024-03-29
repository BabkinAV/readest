import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar, faXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarRegular}  from '@fortawesome/free-regular-svg-icons';

library.add(
  faStar,
  faStarRegular,
  faCaretDown,
  faXmark,
  faSpinner,
	faMagnifyingGlass
  // more icons go here
);