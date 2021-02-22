import phonebookReducer from './phonebook/reducers/reducers';
import { configureStore, combineReducers, createStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
  import { composeWithDevTools } from 'redux-devtools-extension';
// import storage from 'redux-persist/lib/storage'
// import { combineReducers } from 'redux';


// const persistConfig = {
//   key: 'items',
//   storage,
//   blacklist: ['filter'],
// }
// const persistedReducer = persistReducer(persistConfig, combineReducers({ contacts: phonebookReducer }));

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
// const store = configureStore({ reducer: { contacts: persistReducer(persistConfig, phonebookReducer) }, middleware, devTools: process.env.NODE_ENV === 'development' });

// const persistor = persistStore(store);

const mainReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = configureStore({ reducer: mainReducer, middleware, devTools: process.env.NODE_ENV === 'development' });

export default store;

