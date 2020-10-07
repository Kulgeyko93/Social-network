import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare  from 'redux-thunk';
import newsReducer from './news-redusers';
import usersReducer from './users-redusers';



let redusers = combineReducers({
   newsPage: newsReducer,
   usersPage: usersReducer
});

const store = createStore(redusers,applyMiddleware(thunkMiddleWare));

export default store;


window.__store__ = store;

