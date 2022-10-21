 
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
        if (document.getElementById("table1").rows.length < 2) {
            var users = JSON.parse(response).users;
            var table = document.getElementById("table1")
            for (i in users) {
                var row = table.insertRow()
                row.insertCell(0).innerHTML = users[i].id
                row.insertCell(1).innerHTML = users[i].firstName
                row.insertCell(2).innerHTML = users[i].lastName
                row.insertCell(3).innerHTML = users[i].email
            }
        }
    });
}



function secondClick() {
    loadJSON(function (response) {
        if (document.getElementById("table2").rows.length < 2) {
            var orders = JSON.parse(response).orders;
            var table = document.getElementById("table2")
            for (i in orders) {
                var row = table.insertRow()
                row.insertCell(0).innerHTML = orders[i].price
                row.insertCell(1).innerHTML = orders[i].product
                row.insertCell(2).innerHTML = orders[i].status
                row.insertCell(3).innerHTML = orders[i].userId
            }
        }
    });
}



function thirdClick() {
    loadJSON(function (response) {
        if (document.getElementById("table3").rows.length < 2) {
            var orders = JSON.parse(response).orders;
            var table = document.getElementById("table3")
            for (i in orders) {
                if (orders[i].userId == 4) {
                    var row = table.insertRow()
                    row.insertCell(0).innerHTML = orders[i].price
                    row.insertCell(1).innerHTML = orders[i].product
                    row.insertCell(2).innerHTML = orders[i].status
                    row.insertCell(3).innerHTML = orders[i].userId
                }
            }
        }
    });
}
