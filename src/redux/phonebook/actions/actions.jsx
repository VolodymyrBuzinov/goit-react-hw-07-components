// import actionTypes from './actionsTypes';
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit'

const actionAdd = createAction('phonebook/Add', (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));
const actionDelete = createAction('phonebook/Delete');
const actionFilter = createAction('phonebook/Filter');

// До рефакторинга
// const actionAdd = (name, number) => ({
//     type: actionTypes.ADD,
//     payload: {id:uuidv4(), name, number},
// });
// const actionDelete = id => ({
//     type: actionTypes.DELETE,
//     payload: id,
// });
// const actionFilter = value => ({
//     type: actionTypes.FILTER,
//     payload: value,
// })

export default  { actionAdd,  actionDelete, actionFilter};