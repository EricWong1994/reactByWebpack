// @deprecated
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Redux Toolkit is our recommended approach for writing Redux logic today, including store setup, reducers, data fetching, and more.
// For more details, please read this Redux docs page: https://redux.js.org/introduction/why-rtk-is-redux-today

// configureStore from Redux Toolkit is an improved version of createStore that simplifies setup and helps avoid common bugs.
// You should not be using the redux core package by itself today, except for learning purposes. The createStore method from the core redux package will not be removed, but we encourage all users to migrate to using Redux Toolkit for all Redux code.

// If you want to use createStore without this visual deprecation warning, use the legacy_createStore import instead:
// import { legacy_createStore as createStore} from 'redux'

import { createStore } from 'redux';
import reducer from './reducer/reducer';

const store = createStore(reducer);

export default store;
