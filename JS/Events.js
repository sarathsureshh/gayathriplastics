

function validateForm() {
    window.location.href = "home.html"
    // var email = document.getElementById("email-input-box").value;
    // var password = document.getElementById("password-input-box").value;

    // if (email == "" || password == "") {
    //     alert("Email and Password are required");
    //     return false;
    // } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    //     alert("Invalid Email Address");
    //     return false;
    // } else if (password.length < 8) {
    //     alert("Password must be at least 8 characters long");
    //     return false;
    // } else if (email=="gayathriplastics2000@gmail.com"|| password == "sUre@9360"){
    //     window.location.href = "HTML/home.html";
    // } else{
    //     alert("Invalid account");
    // }
}

function addCustomers(){
    window.location.href = "addUser.html";


}

function updateCustomers(){

}

function createInvoice(){


}

function addToDB(){

    var customerName = document.getElementById("customerName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var pinCode = document.getElementById("pinCode").value;
    var mob = document.getElementById("mob").value;
    var gstin = document.getElementById("gstin").value;
    var id = document.getElementById("id").value;


    var jsonObject ={
        "\"id\"": id,
        "\"name\"":customerName,
        "\"address\"": address,
        "\"city\"": city,
        "\"state\"": state,
        "\"pinCode\"": pinCode,
        "\"mob\"": "+91"+mob,
        "\"gstin\"": gstin
    };

    if(customerName == "")
    {
        alert("Please enter the customer details");
    } else{
        alert("New customer has been added");
        console.log(jsonObject);
    }
    

    
    

    

}