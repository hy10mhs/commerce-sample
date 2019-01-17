import { applyMiddleware, compose, createStore } from 'redux';
import window from 'global/window';
import { createBrowserHistory } from 'history';
import { createReducer, createEpic } from 'modules';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import loggerMiddleware from './middleware/logger';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [routerMiddleware(history), epicMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(...enhancers);

  const store = createStore(createReducer(history), preloadedState, composeEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../modules', () => store.replaceReducer(createReducer(history)));
  }

  epicMiddleware.run(createEpic());

  return store;
}
