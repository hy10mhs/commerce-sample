import { ajax } from 'rxjs/ajax';
import CONSTANT from '../../constants';

export const getRanking = () => ajax({
  url: `${CONSTANT.API_URL}/ranking`,
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
});

export const test = () => {};
