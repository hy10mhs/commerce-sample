import { ajax } from 'rxjs/ajax';
import CONSTANT from '../../constants';

export const getProducts = () => ajax({
  url: `${CONSTANT.API_URL}/product`,
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
});

export const test = () => {};
