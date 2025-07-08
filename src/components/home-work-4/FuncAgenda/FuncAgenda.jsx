import style from './funcAgenda.module.scss';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// un arr initial 1. Addcontact, 2. Searc contact, 3.Show contacts

export const FuncAgenda = () => {
 
  const arrLS = localStorage.getItem("arr");
  const arrLSParse = JSON.parse(arrLS);
  const initalArr = arrLSParse.length> 0 ? arrLSParse : [];
  console.log(arrLSParse.length)
  const [arr, setArr] = useState(initalArr)
  const [input, setInput] = useState('');

  const handleNewContact = newContact => {setArr(prevArr => [...prevArr, newContact]); }
  const handleSearch = input => setInput(input);
  const handleDelete = id => { const arrAfterDel = arr.filter(elem => elem.id !== id); setArr(arrAfterDel); }
  
  useEffect(() => { localStorage.setItem("arr", JSON.stringify(arr))},[arr])

  return (
    <section className={style.agendaAll}>
      <h2>New contact</h2>
      <AddContactF handleNewContact={handleNewContact} arr={arr} />
      <br />
      <br />
      <h2>Search for...</h2>
      <SearchForContact handleSearch={handleSearch} />
      <br />
      <br />
      <br />
      <h2>Your contacts</h2>
      <ShowContacts arr={arr} input={input} handleDelete={ handleDelete} />
    </section>
  );
};

const AddContactF = props => {
  const handleContact = e => {
    e.preventDefault();
    const nameC = e.target.elements.nameC.value.trim();
    const phoneC = e.target.elements.phoneC.value.trim();
    for (const elem of props.arr) {
      const phoneRE = elem.number.match(/\d+/g).join("") || [];
      const phoneCRE = phoneC.match(/\d+/g).join("") || [];
      console.log(phoneRE,phoneCRE)
      if (
        elem.namE.toLowerCase() === nameC.toLowerCase() ||
        phoneRE === phoneCRE
      ) {
        alert('This contact is already in your agenda');
        return;
      }
    }
    const newContact = { id: `id-${Date.now()}`, namE: nameC, number: phoneC };
    props.handleNewContact(newContact);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleContact}>
      <label htmlFor="contactName">Name: </label>
      <input
        type="text"
        id="contactName"
        name="nameC"
        placeholder="Add name..."
        pattern="[A-Za-z]{2,}[A-Za-z\-\s]+"
        required
      />
      <br />
      <label>Phone: </label>
      <input
        type="text"
        id="phoneContact"
        name="phoneC"
        placeholder="Add phone numver... "
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        required
      />
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
};

const ShowContacts = props => {
  const { arr, input,handleDelete } = props;
  const filteredArr = arr.filter(elem =>
    elem.namE.toLowerCase().includes(input)
  );
  const finalArr = input.length > 0 ? filteredArr : arr;
  return (
    <ul className={style.showContact}>
      {finalArr.map(({ id, namE, number }) => (
        <li key={id} id={id}>
          <span>{namE}</span>
          <span>{number}</span>
          <button type="button" onClick={()=>handleDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const SearchForContact = props => {
  const handleInput = e => {
    const input = e.target.value;
    props.handleSearch(input.trim().toLowerCase());
  };

  return (
    <input
      type="text"
      name="searchInput"
      style={{ width: '290px', height: '30px' }}
      onChange={handleInput}
    />
  );
};

/*
      <AddContactF handleNewContact={handleNewContact} arr={arr} />

      <SearchForContact handleSearch={handleSearch} />

      <ShowContacts arr={arr} input={input} handleDelete={ handleDelete} />
*/
AddContactF.propTypes = { handleNewContact: PropTypes.func, arr: PropTypes.array }
SearchForContact.propTypes = { handleSearch: PropTypes.func }
ShowContacts.propTypes = {arr:PropTypes.array, input:PropTypes.string, handleDelete:PropTypes.func}