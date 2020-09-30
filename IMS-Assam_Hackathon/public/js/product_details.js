database = firebase.database();

function change_cat() {
    var Table = document.getElementById("myTable");
    Table.innerHTML = "";
    let product_category = document.getElementById("product_category").value;
    document.getElementById("table_title").innerHTML = product_category.toUpperCase();
    var ref = database.ref(`products/${product_category}/`);
    ref.on('value', gotData, errData);
}



function gotData(data) {
    var entries = data.val();
    var keys = Object.keys(entries);
    count = keys.length;
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);

    cell0.innerHTML = "<b>Sr. No</b>";
    cell1.innerHTML = "<b>Product Name</b>";
    cell2.innerHTML = "<b>Product Description</b>";
    cell3.innerHTML = "<b>Supplier Name</b>";
    cell4.innerHTML = "<b>Supplier Address</b>";
    cell5.innerHTML = "<b>Quantity</b>";
    cell6.innerHTML = "<b>Rate of One Unit</b>";
    cell7.innerHTML = "<b>Added by</b>";
    cell8.innerHTML = "<b>Date</b>";

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var product_added_on = entries[k].product_added_on;
        var product_desc = entries[k].product_desc;
        var product_id = entries[k].product_id;
        var product_name = entries[k].product_name;
        var product_quantity = entries[k].product_quantity;
        var product_rate = entries[k].product_rate;
        var product_received_by = entries[k].product_received_by;
        var product_supplier_address = entries[k].product_supplier_address;
        var product_supplier_name = entries[k].product_supplier_name;
        myFunction(product_added_on,product_desc,product_id,product_name,product_quantity,product_rate, 
            product_received_by,product_supplier_address,product_supplier_name,count);
        count = count - 1;
    }

}

function errData(err) {
    console.log("error");
    console.log(err)
}

function myFunction(product_added_on,product_desc,product_id,product_name,product_quantity,product_rate, 
    product_received_by,product_supplier_address,product_supplier_name,count) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3 = row.insertCell(3);
    var cell4 = row.insertCell(4);
    var cell5 = row.insertCell(5);
    var cell6 = row.insertCell(6);
    var cell7 = row.insertCell(7);
    var cell8 = row.insertCell(8);
    cell0.innerHTML = `<font size="2rem">${count}.</font>`;
    cell1.innerHTML = `<font size="2rem">${product_name.toUpperCase()}</font>`;
    cell2.innerHTML = `<font size="2rem">${product_desc.toUpperCase()}</font>`;
    cell3.innerHTML = `<font size="2rem">${product_supplier_name.toUpperCase()}</font>`;
    cell4.innerHTML = `<font size="2rem">${product_supplier_address.toUpperCase()}</font>`;
    cell5.innerHTML = `<font size="2rem">${product_quantity.toUpperCase()}</font>`;
    cell6.innerHTML = `<font size="2rem">${product_rate.toUpperCase()}</font>`;
    cell7.innerHTML = `<font size="2rem">${product_received_by.toUpperCase()}</font>`;
    cell8.innerHTML = `<font size="2rem">${product_added_on.toUpperCase()}</font>`;
}