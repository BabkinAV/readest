import dayjs from 'dayjs';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';

//enabling custom parse format for dayjs
dayjs.extend(CustomParseFormat);

export const createArrayOfUniqueValues = <T extends string | number>(
  data: { [key: string | number]: string | number }[],
  property: string | number,
  isAscending: boolean
) => {
  let order = isAscending ? 1 : -1;
  return Array.from(
    new Set(
      data.map((item) => {
        if (property === 'Date Read') {
          return dayjs(item['Date Read'], 'YYYY/MM/DD').format('YYYY') as T;
        } else return item[property] as T;
      })
    )
  ).sort((a, b) => {
    if (a < b) {
      return -order;
    }
    if (a > b) {
      return order;
    }
    return 0;
  });
};
