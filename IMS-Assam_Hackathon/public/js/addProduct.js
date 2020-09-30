function verify_data(){
    product_name = document.getElementById("product_name").value;
    product_desc = document.getElementById("product_desc").value;
    product_category = document.getElementById("product_category").value;
    product_category = product_category.toLowerCase();
    product_supplier_name = document.getElementById("product_supplier_name").value;
    product_supplier_address = document.getElementById("product_supplier_address").value;
    product_received_by = document.getElementById("user_name").textContent;
    product_quantity = document.getElementById("product_quantity").value;
    product_rate = document.getElementById("product_rate").value;
    product_total_price = product_quantity * product_rate;
    var date_obj = new Date();
    added_date = String(date_obj.getDate());
    added_month = String(date_obj.getMonth() + 1);
    added_year = String(date_obj.getFullYear());
    added_hours = String(date_obj.getHours());
    added_minutes = String(date_obj.getMinutes());
    added_seconds = String(date_obj.getSeconds());
    full_date = added_date + ':' + added_month + ':' + added_year;
    full_time = added_hours + ':' + added_minutes + ':' + added_seconds;
    product_added_on = full_date +':'+full_time;

    console.log(
        product_name, product_desc, product_category, product_supplier_name, product_supplier_address, product_received_by,
        product_quantity, product_rate, product_total_price, product_added_on
    )
    add_product(product_name, product_desc, product_category, product_supplier_name, product_supplier_address, product_received_by,
        product_quantity, product_rate, product_total_price, product_added_on
    )
}



function add_product(product_name, product_desc, product_category, product_supplier_name, product_supplier_address,product_received_by,
        product_quantity, product_rate, product_total_price, product_added_on) {
    

    firebase.database().ref('count/').once('value').then(function (snapshot) {
        count = snapshot.val().count;
        // console.log(count);
        save_to_database(product_name, product_desc, product_category, product_supplier_name, product_supplier_address,
            product_received_by, product_quantity, product_rate, product_total_price, product_added_on, count);
        count = count + 1;
        firebase.database().ref('count/').set({
            count: count
        })
    })
}

function save_to_database(product_name, product_desc, product_category, product_supplier_name, product_supplier_address,
    product_received_by, product_quantity, product_rate, product_total_price, product_added_on, count) {
    firebase.database().ref(`products/${product_category}/${count}/`).set({
        product_name: product_name,
        product_rate: product_rate,
        product_quantity: product_quantity,
        product_desc: product_desc,
        product_supplier_name: product_supplier_name,
        product_supplier_address : product_supplier_address,
        product_received_by : product_received_by,
        product_total_price : product_total_price,
        product_added_on : product_added_on,
        product_id: count
    })
    window.location.reload();
}


function updatePrice(){
    product_quantity = document.getElementById("product_quantity").value;
    product_rate = document.getElementById("product_rate").value;
    product_total_price = product_quantity * product_rate;
    document.getElementById("product_total_price").value = product_total_price;
}