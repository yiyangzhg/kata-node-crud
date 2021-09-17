# CRUD operations

[![Test](https://github.com/yiyangzhg/kata-node-crud/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/yiyangzhg/kata-node-crud/actions/workflows/node.js.yml)

Tiny node.js kata of performing CRUD(Create/Read/Update/Delete) operations on
public API: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com).

## Dependencies

- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [express](https://www.npmjs.com/package/express)
- [ejs](https://www.npmjs.com/package/ejs)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [method-override](https://www.npmjs.com/package/method-override)

## Usage

```shell
$ git clone https://github.com/yiyangzhg/kata-node-crud.git
$ cd kata-node-crud
$ npm install
$ npm run build
```

## Features

- 4 business logics: Create/Read/Update/Delete for API: https://jsonplaceholder.typicode.com/
- The return JSON results are logged to the console
- A tiny express application rendering EJS templates that allow you to input the parameters and print the result on the web page as well
