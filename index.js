// index.js

const fs = require('fs');

class ContactManager {
  constructor() {
    this.contacts = [];
  }

  loadContacts() {
    try {
      const data = fs.readFileSync('contacts.json', 'utf8');
      this.contacts = JSON.parse(data);
      console.log('Contacts loaded successfully.');
    } catch (err) {
      console.error('Error loading contacts:', err);
    }
  }

  saveContacts() {
    try {
      const data = JSON.stringify(this.contacts, null, 2);
      fs.writeFileSync('contacts.json', data);
      console.log('Contacts saved successfully.');
    } catch (err) {
      console.error('Error saving contacts:', err);
    }
  }

  addContact(contact) {
    this.contacts.push(contact);
    this.saveContacts();
  }

  displayContacts() {
    console.log('Contacts:');
    this.contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name} - ${contact.email}`);
      console.log('-------------------------------------');
    });
  }
}

const contactManager = new ContactManager();
contactManager.loadContacts();
contactManager.displayContacts();

// Example: Add a new contact
const newContact = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '123-456-7890'
};
contactManager.addContact(newContact);
