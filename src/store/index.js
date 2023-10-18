import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducers from './reducers';
import HomeReducer from './home/reducer';

const RootReducers = combineReducers({
  AuthReducers,
  HomeReducer,
});

export const store = createStore(RootReducers, applyMiddleware(thunk));
