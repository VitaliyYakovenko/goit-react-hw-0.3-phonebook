import React, { Component } from "react";
import { Container,Title ,TitleContacts} from "./App.styled";
import AddContacts from "../AddContacts/AddContacts";
import FilteredContacts from "../FilteredContacts/FilteredContacts";
import ContactsList from "../ContactsList/ContactsList";
import { nanoid } from "nanoid";
const LS_KEY = "contacts";


export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
 
  componentDidMount() {
    const data = localStorage.getItem(LS_KEY);
    if (data) {
      this.setState(({contacts: JSON.parse(data)}));
    }
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  };


  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;
    const id = nanoid();
    const newContact = {
      id,
      name,
      number
    };

    const isFind = contacts.find((el) => el.name === name);
   
    if (isFind) {
      alert("go home mazafacka!!!");
      return;
    }
   

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }));
  };


  onChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };


  onDeleteContact = (id) => {

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)   
    }));
  };


  render() {
    const { contacts, filter } = this.state;
    const normalaizeFilter = filter.toLocaleLowerCase();

    const filteredArr = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalaizeFilter);
    });
   
    return (<Container>
      <Title>Phonebook</Title>
      <AddContacts
        onGetData={this.addNewContact}
      />
      
      <TitleContacts>Contacts</TitleContacts>
      <FilteredContacts
        onFilter={this.onChangeFilter}
        sort={filter} /> 
      <ContactsList
        onDeleteById={this.onDeleteContact}
        data={filteredArr} />
    </Container>)
  }
};













  // style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}