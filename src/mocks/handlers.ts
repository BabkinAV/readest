import {rest} from 'msw';
import data from '../data';

export const handlers = [
  rest.get('https://gray-doubtful-cod.cyclic.app/books', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data)
    )
  })
]
