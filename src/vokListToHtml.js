var styles = ""
var head = "<!DOCTYPE html><html><head><title>Vokabelliste</title><styles>" + styles + "</styles></head><body>"
var footer = "</body></html>"
var vokListToHtml = function (vokList) {
    var rows = vokList.map(function(vok) {
        return "<tr><td>" + vok.Vokabel + "</td><td>" + vok.Uebersetzung + "</td></tr>"
    })
    var body = "<table><thead><tr><th>Vokabel</th><th>Übersetzung</th></tr></thead><tbody>" + rows.join('') + "</tbody></table>"
    var html = head + body + footer
    return html
}

module.exports = vokListToHtml
