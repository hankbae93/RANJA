import { createReduxHistoryContext, reachify } from 'redux-first-history';
// import { createWouterHook } from "redux-first-history/wouter";
import { createBrowserHistory } from 'history';

export const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});
