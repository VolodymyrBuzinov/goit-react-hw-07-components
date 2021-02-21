import { combineReducers } from 'redux';
// import actionTypes from '../actions/actionsTypes';
import { createReducer } from '@reduxjs/toolkit'
import actions from '../actions/actions';


const items = createReducer([], {
  [actions.actionAdd]: (state, { type, payload }) => [payload, ...state],
  [actions.actionDelete]: (state, { type, payload }) => state.filter(({ id }) => id !== payload)
})
const filter = createReducer('', {
  [actions.actionFilter]: (state, { type, payload }) => payload
})

//До рефакторинга
// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [payload, ...state];

//     case actionTypes.DELETE:
//       return state.filter(({ id }) => id !== payload);
    
//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});