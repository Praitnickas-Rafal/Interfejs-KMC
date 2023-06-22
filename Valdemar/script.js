// script.js
function submitForm() {
    var orderId = document.getElementById("orderId").value;
    var orderName = document.getElementById("orderName").value;
    var companyName = document.getElementById("companyName").value;
    var materials = document.getElementById("materials").value;
    var materialsQuantity = document.getElementById("materialsQuantity").value;

    // Sprawdza, czy pola są puste; jeśli tak, nie dodaje nowego wiersza
    if(orderId || orderName || companyName || materials) {
        var table = document.getElementById("dataTable");

        var row = table.insertRow(-1);
        row.insertCell(0).innerHTML = orderId;
        row.insertCell(1).innerHTML = orderName;
        row.insertCell(2).innerHTML = companyName;
        row.insertCell(3).innerHTML = materials;
        row.insertCell(4).innerHTML = materialsQuantity;
    } 
}

function order() {
    alert("Zamówienie złożone pomyślnie!");
}
