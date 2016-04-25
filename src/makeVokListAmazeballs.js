var addStammformen = require('./addStammformen')
var makeVokListAmazeballs = function (rawData, stammformenData) {
    return addStammformen(rawData, stammformenData)
}

module.exports = makeVokListAmazeballs
