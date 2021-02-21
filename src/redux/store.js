import phonebookReducer from './phonebook/reducers/reducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
// import { combineReducers } from 'redux';


const persistConfig = {
  key: 'items',
  storage,
  blacklist: ['filter'],
}
// const persistedReducer = persistReducer(persistConfig, combineReducers({ contacts: phonebookReducer }));

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const store = configureStore({ reducer: { contacts: persistReducer(persistConfig, phonebookReducer) }, middleware, devTools: process.env.NODE_ENV === 'development' });

const persistor = persistStore(store);
//До рефакторинга
// const mainReducer = combineReducers({
//   contacts: phonebookReducer,
// });
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(mainReducer, composeWithDevTools());

export default {store, persistor};

