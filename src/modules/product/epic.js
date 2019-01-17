import { ofType, combineEpics } from 'redux-observable';
import { of, merge } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { actions as toastrActions } from 'react-redux-toastr';

import * as action from './action';
import * as fetch from './fetch';

const getProductsRequest$ = action$ => action$.pipe(
  ofType(action.GET_PRODUCTS_REQUEST),
  mergeMap(() => fetch.getProducts().pipe(
    map(({ response }) => action.getProductsSuccess(response)),
    catchError(e => merge(
      of(action.getProductsFailure(e)),
      of(toastrActions.add({
        type: 'error',
        title: '상품데이터 로딩 실패',
        attention: true,
        message: '시스템 관리자에게 문의하세요.',
      })),
    )),
  )),
);

export default combineEpics(
  getProductsRequest$,
);
