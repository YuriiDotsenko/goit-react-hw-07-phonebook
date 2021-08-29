import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ContactsList.css';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

const ContactsList = () => {
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className="List">
      {filteredContacts.map(({ name, id, number }) => (
        <li key={id} className="Contact">
          <p className="Text">
            <span className="Name">{name}</span>
            <span className="Phone">{number}</span>
          </p>
          <button
            className="Remove__btn"
            type="button"
            onClick={() =>
              dispatch(contactsOperations.removeContactOperation(id))
            }
          >
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
