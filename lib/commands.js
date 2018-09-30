const npm = require('./npm');
const packages = require('./packages');

module.exports = {
  list: list,
  install: install,
  uninstall: uninstall,
};

function list() {
  packages.get()
    .sort()
    .forEach(package => console.log(package));
}

function install(package) {
  const npmInstall = package => npm('install', `${package}@latest`);
  if (package) {
    npmInstall(package);
    packages.add(package);
  } else  {
    packages.get().forEach(npmInstall);
  }
}

function uninstall(package) {
  npm('uninstall', package);
  packages.remove(package);
}
