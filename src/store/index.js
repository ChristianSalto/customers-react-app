import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools
const reducers = state => state;

export const store = createStore(reducers, {}, composedEnhancers());