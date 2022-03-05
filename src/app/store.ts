import { createStore, applyMiddleware, AnyAction } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

// eslint-disable-next-line import/no-extraneous-dependencies
const reduxDevtools = require('redux-devtools-extension');

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = reduxDevtools;
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  return applyMiddleware(...middleware);
};

const reducer = (state, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }

  return reducers(state, action);
};

const initStore = () => createStore(reducer, bindMiddleware([thunkMiddleware]));

// export an assembled wrapper
export default createWrapper(initStore);
