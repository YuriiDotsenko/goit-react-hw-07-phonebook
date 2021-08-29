import {
  getContacts,
  addContact,
  removeContact,
} from '../../services/contacts-api';

import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactsError,
  removeContactsRequest,
  removeContactsSuccess,
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const data = await getContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContactOperation = data => async dispatch => {
  dispatch(addContactRequest());

  try {
    await addContact(data);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const removeContactOperation = idToRemove => async dispatch => {
  dispatch(removeContactsRequest());

  try {
    await removeContact(idToRemove);
    dispatch(removeContactsSuccess(idToRemove));
  } catch (error) {
    dispatch(removeContactsError(error));
  }
};
