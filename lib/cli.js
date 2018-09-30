const fs = require('fs');
const path = require('path');

const commands = require('./commands');

module.exports = () => {
  const command = process.argv[2];
  const argument = process.argv[3];

  switch (command) {
    case 'list':
    case 'ls':
    case 'la':
    case 'll':
      return commands.list();

    case 'install':
    case 'i':
      return commands.install(argument);

    case "uninstall":
    case "remove":
    case "rm":
    case "r":
      return commands.uninstall(argument);

    default:
      return commands.help();
  }
}
