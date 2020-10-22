import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './../reducers';

const composedEnhancers = composeWithDevTools

export const store = createStore(reducers, {},
  composedEnhancers(applyMiddleware(promiseMiddleware)));