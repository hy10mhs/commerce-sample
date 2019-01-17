import { ofType, combineEpics } from 'redux-observable';
import { of, merge } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { actions as toastrActions } from 'react-redux-toastr';

import * as action from './action';
import * as fetch from './fetch';

const getRankingRequest$ = action$ => action$.pipe(
  ofType(action.GET_RANKING_REQUEST),
  mergeMap(() => fetch.getRanking().pipe(
    map(({ response }) => action.getRankingSuccess(response)),
    catchError(e => merge(
      of(action.getRankingFailure(e)),
      of(toastrActions.add({
        type: 'error',
        title: '랭킹데이터 로딩 실패',
        attention: true,
        message: '시스템 관리자에게 문의하세요.',
      })),
    )),
  )),
);

export default combineEpics(
  getRankingRequest$,
);
