import { useState, useEffect } from 'react';
import style from './apReduxAgenda.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../redux/contactsSlice';
import SearcContacts from './SearchContact';

const ListTheContacs = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [idState, setIdState] = useState('');
  const [updateContact, setUpdateContact] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.agendaRedux);
  const filter = useSelector(state => state.filterAgendaRedux);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );


  const finalArr = filter!=="" ? filteredContacts: contacts;

  useEffect(() => {
    const foundContact = contacts.find(contact => contact.id === idState);
    if (foundContact) setUpdateContact(foundContact);
  }, [idState, contacts]);

  const handleUpdateContact = (event, contactId) => {
    event.preventDefault();
    const form = event.currentTarget.elements;
    const newName = form.newName.value.trim();
    const newPhone = form.newPhone.value.trim();
    dispatch(editContact({ id: contactId, number: newPhone, name: newName}));
    setIsEdit(false);
  };
  return (
    <div className={style.listTheContacts}>


      <h3>Search agenda:</h3>
      <SearcContacts />

      
      {isEdit && (
        <form onSubmit={e => handleUpdateContact(e, idState)}>
          <button type="submit">Save</button>
          <input
            type="text"
            name="newName"
            value={updateContact.name || ''}
            pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
            placeholder="Adjust name..."
            onChange={e =>
              setUpdateContact(prev => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="text"
            name="newPhone"
            placeholder="Adjust phone number..."
            value={updateContact.number || ''}
                      pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={e =>
              setUpdateContact(prev => ({ ...prev, number: e.target.value }))
            }
          />
          <button
            type="button"
            onClick={() => setIsEdit(false)}
            style={{ marginLeft: '10px' }}
          >
            Cancel
          </button>
        </form>
      )}

      {finalArr.map((contact, index) => (
        <div key={contact.id}>

          {!isEdit && (
            <button
              onClick={() => {
                setIsEdit(true);
                setIdState(contact.id);
              }}
              style={{ marginRight: '10px' }}
            >
              Edit
            </button>
          )}

          <span>
            {index + 1}. {contact.name} || {contact.number}
          </span>
          <button
            type="button"
            style={{ marginLeft: '15px' }}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTheContacs;
