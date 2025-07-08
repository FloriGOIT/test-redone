import React from 'react';
import style from './phone.module.scss';

class Phone2nd extends React.Component {
  render() {
    return (
      <section className={style.phone2}>
        <h2>Phone book-2nd</h2>
        <h3>Add new contact</h3>
        <NewContact
          handleSetArrContacts={this.props.handleSetArrContacts}
          arrContacts={this.props.arrContacts}
        />
        <FilterContact handleInputFilter={this.props.handleInputFilter} />

        <ListContact
          arrContacts={this.props.arrContacts}
          filterContacts={this.props.filterContacts}
          handleDeleteArrContacts={this.props.handleDeleteArrContacts}
        />
      </section>
    );
  }
}
export default Phone2nd;

class NewContact extends React.Component {
  handleNewContact = event => {
    event.preventDefault();
    const nameInput2 = event.target.elements.name2.value.trim();
    const numberInput2 = event.target.elements.number2.value.trim();
    let validInput = this.props.arrContacts.some(
      contact =>
        contact.name2.toLowerCase() === nameInput2.toLowerCase() ||
        contact.number2.toLowerCase() === numberInput2
    );
    if (validInput) {
      alert('You have this contact already in your agends');
      return;
    }
    let input = {
      id: `id-${Date.now()}`,
      name2: nameInput2,
      number2: numberInput2,
    };
    this.props.handleSetArrContacts(input);
    event.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleNewContact}>
        <label htmlFor="newContact">Name:{` `}</label>
        <input
          id="newContact"
          type="text"
          name="name2"
          pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <br />
        <label htmlFor="newNumber">Number:{` `}</label>

        <input
          type="text"
          id="newNumber"
          name="number2"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

class ListContact extends React.Component {
  render() {
    const { arrContacts, filterContacts, handleDeleteArrContacts } = this.props;
    let filterArrContacts = arrContacts.filter(contact =>
      contact.name2.toLowerCase().includes(filterContacts)
    );
    let renderList = filterContacts !== ''
        ? filterArrContacts
        : arrContacts;
    return (
      <div className={style.arrContacts}>
        <h3>Contacts:</h3>
        <ul>
          {renderList.map(contact => (
            <li key={contact.id}>
              <span>
                {contact.name2}: {contact.number2}
              </span>
              <button
                type="button"
                onClick={() => handleDeleteArrContacts(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class FilterContact extends React.Component {
  handleInput = event => {
    this.props.handleInputFilter(event.target.value.toLowerCase());
  };
  render() {
    return (
      <div className={style.searchContact}>
        <h3>Search contact</h3>
        <input type="text" name="filterInput2" onChange={this.handleInput} />
      </div>
    );
  }
}


