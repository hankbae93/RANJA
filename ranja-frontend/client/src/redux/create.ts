import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from './connectRouterConfig';

import reducer from './modules/reducer';
import rootSaga from './modules/rootSaga';

const create = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware)));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
