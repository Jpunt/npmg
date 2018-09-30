const fs = require('fs');
const path = require('path');

const commands = require('./commands');

module.exports = () => {
  const [execPath, filePath, command, ...otherArguments] = process.argv;

  switch (command) {
    case 'list':
    case 'ls':
    case 'la':
    case 'll':
      return commands.list();

    case 'install':
    case 'i':
      return commands.install(otherArguments);

    case "uninstall":
    case "remove":
    case "rm":
    case "r":
      return commands.uninstall(otherArguments);

    default:
      return commands.help();
  }
}
