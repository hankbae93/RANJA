import { combineReducers } from 'redux';
import { routerReducer } from '../connectRouterConfig';

import auth from './auth';
import map from './map';

const reducer = combineReducers({
  router: routerReducer,
  auth,
  map,
});

export default reducer;
