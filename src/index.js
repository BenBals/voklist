var fs = require('fs')
var xlsx = require('xlsx')

var stammformenData = require('./data')
var makeVokListAmazeballs = require('./makeVokListAmazeballs.js')
var vokListToHtml = require('./vokListToHtml')

var input = process.argv[2]
var output = process.argv[3]
var workbook = xlsx.readFile(input)
var rawData = xlsx.utils.sheet_to_json(workbook.Sheets.Worksheet)
var betterVokList = makeVokListAmazeballs(rawData, stammformenData)
var html = vokListToHtml(betterVokList)
fs.writeFile(output, html, function (err) {
    if (err) throw err
    console.log('output written to', output)
})
