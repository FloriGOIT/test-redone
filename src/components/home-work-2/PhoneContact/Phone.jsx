import React from 'react';
import style from './phone.module.scss';
import PropTypes from 'prop-types';

class Phone extends React.Component {
  state = { name: '', number: '' };
  setname = contactInput => this.setState({ name: contactInput });
  setnumber = phoneInput => {
    this.setState({ number: phoneInput });
  };

  componentDidUpdate(_, prevState) {
    if (prevState !== this.state) {
      this.props.setContacts([
        ...this.props.contacts,
        { id: `id-${Date.now()}`, ...this.state },
      ]);
    }
  }

  render() {

    return (
      <div className={style.phoneAll}>
        <h1>PhoneBook</h1>
        <ContactForm
          setname={this.setname}
          setnumber={this.setnumber}
          contacts={this.props.contacts}
        />
        {this.state.name !== '' ? (
          <p>
            {this.state.name} : {this.state.number} was last added in your
            phonebook
          </p>
        ) : null}
        <br />
        <br />
        <h2>Contacts</h2>
        <Filter filter={this.props.filter} setFilter={this.props.setFilter} />
        <br />
        <br />
        <ContactList
          contacts={this.props.contacts}
          handleDeleteContact={this.props.handleDeleteContact}
          filter={this.props.filter}
        />
      </div>
    );
  }
}

export default Phone;

class ContactForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const { contacts } = this.props;
    const nameInput = event.target.elements.nameUser.value;
    const phoneInput = event.target.elements.phoneUser.value;
    const includes = contacts.some(
      contact => contact.name === nameInput || contact.number === phoneInput
    );
    if (includes) {
      alert('The name or phonenumber is already in your contact.');
      return;
    }
    this.props.setname(nameInput);
    this.props.setnumber(phoneInput);
    event.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="userName">Name </label>
        <input
          type="text"
          id="userName"
          name="nameUser"
          pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
        />
        <br />
        <label htmlFor="userPhone">Phone </label>
        <input
          type="tel"
          id="userPhone"
          name="phoneUser"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <br />
        <button type="submit">Add new contact</button>
      </form>
    );
  }
}

class Filter extends React.Component {
  handleInputChange = event => {
    let input = event.target.value;
    this.props.setFilter(input);
  };
  render() {
    //const { filter, setFilter } = this.props;

    return (
      <input type="text" name="filterInput" onChange={this.handleInputChange} />
    );
  }
}

class ContactList extends React.Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    let list =
      filteredContacts.length > 0 || filter !== ''
        ? filteredContacts
        : contacts;

   

    return (
      <ul className={style.contacts}>
        {list.map(contact => (
          <li key={contact.id} id={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>
            <button
              type="button"
              onClick={() => this.props.handleDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

/*         
              
*/
Phone.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string, name:PropTypes.string, number:PropTypes.string})),
  setContacts: PropTypes.func,
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  handleDeleteContact: PropTypes.func,
};
Filter.propTypes = { filter: PropTypes.string, setFilter: PropTypes.func }
ContactList.propTypes={filter:PropTypes.string, contacts:PropTypes.array, handleDeleteContact:PropTypes.func}

