import { ofType, combineEpics } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

import * as actions from './action';

const ping = action$ => action$.pipe(
  ofType(actions.PING),
  mapTo(actions.pong()),
);

export default combineEpics(ping);
