const contacts = require("./db");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const invokeActions = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list": {
      const allList = await contacts.listContacts();
      return console.log(allList);
    }
    case "get": {
      const getContact = await contacts.getContactById(id);
      return console.log(getContact);
    }
    case "add": {
      const addContact = await contacts.addContact({ name, email, phone });
      return console.log(addContact);
    }
    case "remove": {
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
    }
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

const arr = hideBin(process.argv);
const { argv } = yargs(arr);
invokeActions(argv);

