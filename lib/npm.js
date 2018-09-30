const spawnSync = require('child_process').spawnSync;

module.exports = (command, package) => {
  const commandString = `npm -g ${command} ${package}`;
  console.log(commandString);

  const npm = spawnSync('npm', ['-g', command, package]);

  console.log(npm.stdout.toString());
  console.warn(npm.stderr.toString());

  if (npm.status != 0) {
    console.log(`'${commandString}' failed with code: ${code}`);
    process.exit(npm.status);
  }
};
