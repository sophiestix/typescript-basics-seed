<h1 align="center">
<img width="40" valign="bottom" src="https://ultimateangular.com/assets/img/categories/typescript.svg">
TypeScript: Basics Course Seed
</h1>
<h4 align="center">Project seed for our comprehensive introduction to TypeScript course.</h4>

---

<a href="https://ultimateangular.com" target="_blank"><img src="https://ultimateangular.com/assets/img/banner.jpg"></a>

---

> This repo serves as the seed project for Ultimate Angular's TypeScript Basics course as well as the final solution in stepped branches, come and [learn TypeScript](https://ultimateangular.com/courses/) with us!

[Setup and install](#setup-and-install) | [Tasks](#tasks) |
[Resources](#resources)

## Setup and install

Fork this repo from inside GitHub so you can commit directly to your account, or
simply download the `.zip` bundle with the contents inside.

#### Dependency installation

During the time building this project, you'll need development dependencies of
which run on Node.js, follow the steps below for setting everything up (if you
have some of these already, skip to the next step where appropriate):

1. Download and install [Node.js here](https://nodejs.org/en/download/) for
   Windows or for Mac.

2. Install TypeScript globally via `npm i -g typescript`

That's about it for tooling you'll need to run the project, let's move onto the
project install.

#### Project installation and server

Now you've pulled down the repo and have everything setup, using the terminal
you'll need to `cd` into the directory that you cloned the repo into and run
some quick tasks:

```
cd <typescript-basics-seed>
yarn install
# OR
npm install
```

This will then setup all the development and production dependencies we need.

Now simply run this to boot up the server:

```
yarn start
# OR
npm start
```

Visit `localhost:3000` to start building.

## Tasks

A quick reminder of all tasks available:

#### Development server

```
yarn start
# OR
npm start
```

## Resources

There are several resources used inside this course, of which you can read
further about to dive deeper or understand in more detail what they are:

* [TypeScript Docs](https://www.typescriptlang.org)
* [TypeScript Playground](https://www.typescriptlang.org/play)
* [AST Explorer](https://astexplorer.net)

# Notes

## Introduction
### Installing Typescript / TypeScript compiler (tsc) and tsconfig

```
tsc -version
```

```
tsc --init
```
This creates a `tsconfig.json` file, where we can delete all the commented-out lines to keep it neat.

In the terminal, to compile typescript according to the `<script>` in the `index.html`:
```
tsc --outDir dist
```

OR

in the `tsconfig.json` file add
```
"outDir": "dist"
```
and then just run
```
tsc
```

To set up watch mode:
```
tsc -w
```

### Setting up Webpack for TypeScript

Create a `webpack.config.js` file.

Then install devDependencies
```
yarn install
```
```
yarn start
```

With webpack we dont really need a `dist` folder because webpack will virtually use the output we
defined in the `output` in the config file. So we won't need to have the `./dist` in the `dist/app/js`
in the `<script>` tag in `index.html` anymore.

## ES6/7 and TypeScript

### Arrow functions and implicit returns

```
const pizza3 = {
    name: "Blazing Inferno",
    getName: function() {
        setTimeout(() => {
            console.log(this.name); // now 'this' will return the pizza3, "inherits" the scope
        }, 100);
    },
};

console.log(pizza3.getName());
```

```
const pizza4 = {
    name: "Blazing Inferno",
    getName: () => pizza.name,
};

console.log(pizza4.getName());
```


