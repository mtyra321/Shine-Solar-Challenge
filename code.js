function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'db.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
window.onload = function () {
    document.getElementById("chicken").addEventListener('click', firstClick);
}
function firstClick() {
    loadJSON(function (response) {
        if (document.getElementById("answer1").lastChild != typeof table) {
            var users = JSON.parse(response).users;
            console.log("json: " + JSON.stringify(users))
            var table = document.createElement("table")
            var titleRow = table.insertRow(0)
            titleRow.insertCell(0).innerHTML = "id"
            titleRow.insertCell(1).innerHTML = "First Name"
            titleRow.insertCell(2).innerHTML = "Last Name"
            titleRow.insertCell(3).innerHTML = "Email"

            document.getElementById("answer1").appendChild(table)
        }
    });
}