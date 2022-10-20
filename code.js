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
    document.getElementById("button1").addEventListener('click', firstClick);
    document.getElementById("button2").addEventListener('click', secondClick);
    document.getElementById("button3").addEventListener('click', thirdClick);


}
function firstClick() {
    loadJSON(function (response) {
        if (document.getElementById("answer1").childNodes.length == 1) {
            var users = JSON.parse(response).users;
            console.log("json: " + JSON.stringify(users))
            var table = document.createElement("table")
            var titleRow = table.insertRow(0)
            titleRow.insertCell(0).innerHTML = "id"
            titleRow.insertCell(1).innerHTML = "First Name"
            titleRow.insertCell(2).innerHTML = "Last Name"
            titleRow.insertCell(3).innerHTML = "Email"
            for (i in users) {
                console.log("i: " + i)
                var row = table.insertRow()
                row.insertCell(0).innerHTML = users[i].id
                row.insertCell(1).innerHTML = users[i].firstName
                row.insertCell(2).innerHTML = users[i].lastName
                row.insertCell(3).innerHTML = users[i].email
            }
            document.getElementById("answer1").appendChild(table)
        }
    });
}



function secondClick() {
    loadJSON(function (response) {
        if (document.getElementById("answer2").childNodes.length == 1) {
            var orders = JSON.parse(response).orders;
            console.log("json: " + JSON.stringify(orders))
            var table = document.createElement("table")
            var titleRow = table.insertRow(0)
            titleRow.insertCell(0).innerHTML = "Price"
            titleRow.insertCell(1).innerHTML = "Product"
            titleRow.insertCell(2).innerHTML = "Status"
            titleRow.insertCell(3).innerHTML = "User Id"
            for (i in orders) {
                console.log("i: " + i)
                var row = table.insertRow()
                row.insertCell(0).innerHTML = orders[i].price
                row.insertCell(1).innerHTML = orders[i].product
                row.insertCell(2).innerHTML = orders[i].status
                row.insertCell(3).innerHTML = orders[i].userId
            }
            document.getElementById("answer2").appendChild(table)
        }
    });
}



function thirdClick() {
    loadJSON(function (response) {
        if (document.getElementById("answer3").childNodes.length == 1) {
            var orders = JSON.parse(response).orders;
            console.log("json: " + JSON.stringify(orders))
            var table = document.createElement("table")
            var titleRow = table.insertRow(0)
            titleRow.insertCell(0).innerHTML = "Price"
            titleRow.insertCell(1).innerHTML = "Product"
            titleRow.insertCell(2).innerHTML = "Status"
            titleRow.insertCell(3).innerHTML = "User Id"
            for (i in orders) {
                if (orders[i].userId == 4) {
                    console.log("i: " + i)
                    var row = table.insertRow()
                    row.insertCell(0).innerHTML = orders[i].price
                    row.insertCell(1).innerHTML = orders[i].product
                    row.insertCell(2).innerHTML = orders[i].status
                    row.insertCell(3).innerHTML = orders[i].userId
                }
            }
            document.getElementById("answer3").appendChild(table)
        }
    });
}
