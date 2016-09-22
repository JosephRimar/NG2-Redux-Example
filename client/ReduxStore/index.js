/*
=================== Redux Store Creation ===================
This code was duplicated in fees-common-store and then imported 
in the boot.js file. The code is essential the same with a few 
middleWare imports (Thunk) excluded becuase on current incompatability
with TypeScript. Since this is a babel application they could be used
so I left them here as an example.
*/

import {
  applyMiddleware, // Use with Redux-thunk for async actions
  Store, // Interface for TypeScript
  compose,
  createStore
} from 'redux';
import Thunk from 'redux-thunk'; // <-- MiddleWare allowing for async dispatch on store
import { makeRootReducer } from './mainReducer';



  /* Store Enhancers
  -----------------------  Store Enhancers not woring with Angular 2 Observables
  */
  const enhancers = []
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

 // Redux Middleware & Store Creation -----------------------  
const middleWare = [Thunk]; // Add new middleware here -----------
export const store = createStore(
  makeRootReducer(), 
  compose(  
    applyMiddleware(...middleWare)
  )
);

store.asyncReducers = {};

 // Hot Reloading of Redux Store----------------------- 
if(module.hot) {
  module.hot.accept('./mainReducer'), () => {
    const nextReducer = require('./mainReducer').default;
    store.replaceReducer(nextReducer);
  }
}
