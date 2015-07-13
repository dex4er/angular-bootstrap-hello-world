This is template for Ionic application with karma+mocha-chai unit tests and
webdriverio e2e tests.

## Preparing node

```
$ cd ~
$ sudo apt-get install build-essential
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
$ . ~/.bashrc
$ nvm ls-remote
$ nvm install stable
$ npm update npm
```

## Peparing dev

```
$ cd <working directory>
$ node install
$ bower install
```

## Unit testing (constantly)

```
$ grunt unit
```

## Unit testing (single run)

```
$ grunt unit:single
```

## Unit testing (end to end)

```
$ grunt e2e
```

## Running in browser (development)

```
$ grunt serve
```

## Building compressed app

```
$ grunt compress
```

## Running in browser (compressed)

```
$ grunt serve:compress
```
