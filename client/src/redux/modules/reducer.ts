import { combineReducers } from 'redux';
import { routerReducer } from '../connectRouterConfig';

import auth from './auth';

const reducer = combineReducers({
  router: routerReducer,
  auth,
});

export default reducer;
