This is template for Angular+Bootstrap application with karma+mocha+chai spec
tests and webdriverio e2e tests.

## Preparing node

```
$ cd
$ sudo apt-get install build-essential git
$ git clone https://github.com/creationix/nvm.git .nvm
$ . ~/.nvm/nvm.sh
$ nvm ls-remote
$ echo stable > ~/.nvmrc
$ nvm install
$ echo '{"private":true}' > ~/package.json
$ npm install --save npm
$ export PATH="node_modules/.bin:../node_modules/.bin:$HOME/node_modules/.bin:$PATH"
```

## Peparing dev

```
$ cd <working directory>
$ node install
$ bower install
```

## List available tasks

```
$ gulp help
```

## Running in browser and watch for changes (development)

```
$ gulp serve
```

## Spec testing (single run)

```
$ gulp spec
```

## End to end testing (single run)

```
$ gulp e2e
```

## Copy files to destination folder (development)

```
$ gulp copy
```
