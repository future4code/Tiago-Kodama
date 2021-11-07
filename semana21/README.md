# Case pokemon

### Pokemon Api - inserting into database and searching pokemons

### Features

- [x] Get pokemons
- [x] Get pokemons by id
- [x] Get pokemons by params
- [x] Get pokemons by page


### How I converted XLSX to JSON

install xlsx and fs

`
    var XLSX = require('xlsx')
    var fs = require('fs')

    var workbook = XLSX.readFile('Pokemon.xlsx');

    var sheet_name_list = workbook.SheetNames;

    var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    fs.writeFileSync('./pokemons.json', JSON.stringify(data))

`

### - Instructions

#### to install
```
    npm install
```
#### to test
```
    npm run test
```
#### to dev
```
    npm run dev
```
#### to start
```
    npm run start
```

[Endpoints](https://documenter.getpostman.com/view/14922046/UVC3kTQV)