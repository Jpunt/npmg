const npm = require('./npm');
const packages = require('./packages');

module.exports = {
  list: list,
  install: install,
  uninstall: uninstall,
  help: help,
};

function list() {
  packages.get()
    .sort()
    .forEach(name => console.log(name));
}

function install(names) {
  (names.length == 0
    ? packages.get()
    : names
  ).forEach(name => {
    npm('install', `${name}@latest`);
    packages.add(name);
  });
}

function uninstall(names) {
  names.forEach(name => {
    npm('uninstall', name);
    packages.remove(name);
  });
}

function help() {
  console.log(`
  Usage: npmg <command>

  where <command> is one of:

    list:
      Returns the packages that npmg knows about.
      Note:     This does not mean that these packages are available for use,
                because that depends on the environment you're running at
                this moment. If you'd like to know that, use the regular
                npm command: \`npm -g list\`
      Aliases:  ls, la, ll

    install:
      Makes sure all packages that should be installed are installed.
      Note:     This will also update all packages to their latest version.
      Aliases:  i

    install <package>:
      Installs a package and stores it for future reference.
      Note:     It is not possible to define a version. \`@latest\` is used.
      Aliases:  i

    uninstall <package>:
      Uninstalls a package and removes it from npmg's reference.
      Aliases:  uninstall, remove, rm, r
  `);
}
