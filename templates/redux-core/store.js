import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

/*
Use this as the store for your application (usually added in the `index.js` by using Redux's
Provide to render you app).
*/
export default createStore(rootReducer, applyMiddleware(ReduxThunk));
