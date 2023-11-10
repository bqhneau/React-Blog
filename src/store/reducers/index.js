import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import userReducer from './user';
const createRootReducer = (history) => combineReducers({
    user: userReducer,
   router:connectRouter(history) 
})

export default createRootReducer