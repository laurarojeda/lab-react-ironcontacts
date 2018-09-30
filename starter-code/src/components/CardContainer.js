import React, { Component } from 'react';
import Button from './Button';
import Card from './Card';
import contactList from '../contacts.json';

const fiveContacts = contactList.slice(0, 5);

class CardContainer extends Component {
  state = {
    contacts: fiveContacts,
  }

  handleRandomCard = () => {
    const { contacts } = this.state;
    const randomContactIndex = Math.floor(Math.random() * contactList.length);
    //poner condicional para no repetir contacts
    contacts.push(contactList[randomContactIndex])
    this.setState({ 
      contacts,
     });
  }

  //order = 'name'
  handleSortByName = (order) => {
    const { contacts } = this.state;
    contacts.sort((contactA, contactB) => {
      if (contactA[order] > contactB[order]) { 
        return 1; 
      } 
      if (contactA[order] < contactB[order]) { 
        return -1; 
      } 
      return 0;
    });
    this.setState({ 
      contacts, 
    });
  }

  handleSortByPopularity = (order) => {
    const { contacts } = this.state;
    contacts.sort((contactA, contactB) => {
      if (contactA[order] > contactB[order]) {
        return -1; 
      } 
      if (contactA[order] < contactB[order]) { 
        return 1; 
      } 
      return 0;
    });
    this.setState({ 
      contacts, 
    });
  }

  handleDelete = (id) => {
    const { contacts } = this.state;
    // if (contacts[id].name === name) {
      contacts.splice(id, 1);
      this.setState({
        contacts,
      })
    // }
  }

  render() {
    return (
      <div>
        <Button 
          addRandom={this.handleRandomCard} 
          sortName={this.handleSortByName} 
          sortPopularity={this.handleSortByPopularity} 
        />
         { this.state.contacts.map((person, index) => {
           return (
             <Card
                key={index}
                id={index}
                pictureUrl={person.pictureUrl}
                name={person.name}
                popularity={person.popularity}
                onDelete={this.handleDelete}
             />
           )
         }) }
      </div>
     )
  }
}

export default CardContainer;
