const fs = require('fs');
const path = require('path');
const PATH = path.resolve(__dirname, '../packages.json');

module.exports = {
  get: get,
  add: add,
  remove: remove,
};

function get() {
  try {
    const file = fs.readFileSync(PATH);
    return JSON.parse(file);
  } catch (error) {
    if (error.code == 'ENOENT') {
      return [];
    }
    throw new Error(error);
  }
}

function set(packages) {
  const newPackages = packages
    .sort()
    .filter((package, index, self) => (
      // Remove duplicates
      index == self.indexOf(package)
    ));
  const json = JSON.stringify(newPackages, null, 2);
  fs.writeFileSync(PATH, json);
}

function add(package) {
  const packages = get();
  set([...packages, package]);
}

function remove(package) {
  const packages = get();
  set(packages.filter(p => p != package));
}
