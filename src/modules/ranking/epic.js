import { ofType, combineEpics } from 'redux-observable';
import { of, merge } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { actions as toastrActions } from 'react-redux-toastr'

import CONSTANT from '../../constants';
import * as action from './action';

const getRankingRequest$ = action$ => action$.pipe(
  ofType(action.GET_RANKING_REQUEST),
  mergeMap(({ payload }) => ajax(`${CONSTANT.API_URL}/ranking`).pipe(
    map(({ response }) => action.getRankingSuccess(response)),
    catchError(e => merge(
      of(action.getRankingFailure(e)),
      of(toastrActions.add({
        type: 'error',
        title: '랭킹데이터 로딩 실패',
        attention: true,
        message: '시스템 관리자에게 문의하세요.',
      })),
    ))
  )),
);

export default combineEpics(
  getRankingRequest$,
);
