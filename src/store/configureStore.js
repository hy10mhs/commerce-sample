import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import loggerMiddleware from './middleware/logger';
import { rootReducer, rootEpic } from 'modules';

export default function configureStore(preloadedState) {
  const epicMiddleware = createEpicMiddleware();
  const middlewares = [epicMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(loggerMiddleware);
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(...enhancers);

  const store = createStore(rootReducer, preloadedState, composeEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../modules', () => store.replaceReducer(rootReducer))
  }

  epicMiddleware.run(rootEpic);

  return store;
}
