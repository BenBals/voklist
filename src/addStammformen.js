var addStammformen = function (raw, stammformenData) {
    var alleLektionen = Object.keys(stammformenData)
    var alleStammformen = alleLektionen.map(function (lektion) {return stammformenData[lektion]})
    var alleStammformenFlattened = [].concat.apply([], alleStammformen)
    var infinitiveIndexedStammformen = alleStammformenFlattened.reduce(function (prevVal, val, index, array) {
        var newData = {}
        newData[val.split(',')[0]] = val
        return Object.assign({}, prevVal, newData)
    }, {})
    var betterVokList = raw.map(function (val) {
        return Object.assign({}, val, {
            Vokabel: infinitiveIndexedStammformen[val.Vokabel] ? infinitiveIndexedStammformen[val.Vokabel] : val.Vokabel
        })
    })
    return betterVokList
}
module.exports = addStammformen
