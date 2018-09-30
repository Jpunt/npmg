# npmg

A little tool that helps you manage global npm packages.

## Why?

There are lots of cool packages out there, that typically don't belong to a project you're working on. Think about tools that you'd use in your daily life as a developer and install globally, like [serve](https://www.npmjs.com/package/serve), [http-status-identifier-cli](https://www.npmjs.com/package/http-status-identifier-cli) and [caniuse-cmd](https://www.npmjs.com/package/caniuse-cmd).

There're also things like [`nvm`](http://nvm.sh), which allows you to install multiple versions of node. The packages that you had installed for one version of node are not available in other ones, so you'd install them again. And if you've got multiple projects you're working on, with different versions of node, you'll get lost pretty quickly..

`npmg` tries to solve this. For example, take the awesome [tldr](https://www.npmjs.com/package/tldr). Instead of installing it with `npm -g install tldr`, you can do so by running `npmg install tldr`. This will install the package globally for your current environment, and also remember that. When switching to a different environment you can run `npmg install`, to be sure you've got every global package you need waiting for you.

> I'm aware that there's this awesome package [`npx`](https://www.npmjs.com/package/npx), but `npmg` is not a competitor to this. `npx` finds a local package or falls back on a global package, and runs it. That's super handy, but when a package has a different name than its command (which happens quite a lot actually), `npx` won't be able to find and install it for you (how could it?). Also: you'd have to install `npx` itself globally as well. So.. I think `npmg` could work great *together* with `npx`. I've got `npx` installed with `npmg` myself 🤯😄

## Installation

The easiest way to install `npmg` is to [download it](https://github.com/Jpunt/npmg/archive/0.0.2.zip) and run `./bin/install`. This will copy some files to `~/.npmg` and make a symlink to `/usr/local/bin`. You could also clone this repo and do those steps manually. You'll need [node](https://nodejs.org/en/) (6.4 or heigher) and macOS to use it. I would also advise you to remove already installed packages, or at least re-install them with `npmg`. And don't forget about those global packages that you've installed with `yarn` either! This way you'll have a nice clean start.

## Usage

### list
Find out what packages `npmg` knows about:
```zsh
$ npmg list
```
> Note: This does not mean that these packages are available for use, because that depends on the environment you're running at this moment. If you'd like to know that, use the regular npm command: \`npm -g list\`.

### install
Make sure all packages that should be installed are installed:
```zsh
$ npmg install
```
> Note: This will also update all packages to their latest version

Install a package and stores it for future reference:
```zsh
$ npmg install <package>
```
> Note: It is not possible to define a version. \`@latest\` is used. If you're depending on a specific version of a package, it should not be installed globally in the first place.

### uninstall
Uninstall a package and remove it from npmg's reference:
```zsh
$ npmg uninstall <package>
```
