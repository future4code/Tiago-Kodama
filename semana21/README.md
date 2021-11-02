How to convert XLSX to JSON

install xlsx and fs

`
    var XLSX = require('xlsx')
    var fs = require('fs')

    var workbook = XLSX.readFile('Pokemon.xlsx');

    var sheet_name_list = workbook.SheetNames;

    var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    fs.writeFileSync('./pokemons.json', JSON.stringify(data))

`

