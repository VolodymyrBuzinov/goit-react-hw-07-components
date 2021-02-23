import phonebookReducer from './phonebook/reducers/reducers';
import { configureStore, combineReducers, createStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const mainReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = configureStore({ reducer: mainReducer, middleware, devTools: process.env.NODE_ENV === 'development' });

export default store;

