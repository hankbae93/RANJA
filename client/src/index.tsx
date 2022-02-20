import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createReduxHistory } from './redux/connectRouterConfig';
import create from './redux/create';
import reportWebVitals from './reportWebVitals';

const store = create();
export const history = createReduxHistory(store);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
