import { createStore, applyMiddleware, compose } from "redux";

import {persistStore, persistReducer, createMigrate} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk'

import { enableES5 } from 'immer';
enableES5();

import rootReducer from "./reducers/rootReducer"

const middleWare = [thunk];
const middleWareEnhancer = applyMiddleware(...middleWare);

const enhancers = [middleWareEnhancer];
const composedEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__(...enhancers) : compose(...enhancers);


const migrations = {
  0: (state) => {
    return ({
      ...state
    })
  },
  1: (state) => {
    return ({
      ...state,
      user: {
        currentUser: {
          userName:state.user.userName,
          userRoles:state.user.userRoles,
          isLoggedIn:state.user.isLoggedIn,
        }
      }
    })
  }
}

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  migrate: createMigrate(migrations)
}

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedRootReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);