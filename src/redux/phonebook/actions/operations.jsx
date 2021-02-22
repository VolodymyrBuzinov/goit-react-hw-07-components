import axios from 'axios';
import actions from './actions';


const { actionItemsRequest, actionItemsSuccess, actionItemsError, actionAddRequest, actionAddSucess, actionAddError, actionDeleteRequest, actionDeleteSucess, actionDeleteError, actionFilter } = actions;


const fetchContacts = () => dispatch => {
  dispatch(actionItemsRequest());

  axios
    .get('http://localhost:4040/contacts')
    .then(({ data }) => dispatch(actionItemsSuccess(data)))
    .catch(error => dispatch(actionItemsError(error)));
};

const actionAdd = (name, number) => dispatch => {
  const item = {
    name,
    number,
  };

  dispatch(actionAddRequest());

  axios
    .post('http://localhost:4040/contacts', item)
    .then(({ data }) => dispatch(actionAddSucess(data)))
    .catch(error => dispatch(actionAddError(error)));
};

const actionDelete = contactId => dispatch => {
  dispatch(actionDeleteRequest());

  axios
    .delete(`http://localhost:4040/contacts/${contactId}`)
    .then(() => dispatch(actionDeleteSucess(contactId)))
    .catch(error => dispatch(actionDeleteError(error)));
};

export default {fetchContacts, actionAdd, actionDelete };