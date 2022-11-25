var attempt = 3; 
function loginhub(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
//admin
if ( username == "admin" && password == "55555"){
window.location = "Admin.html"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
//user
if ( username == "user" && password == "44444"){
window.location = "User.html"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}
//error
if ( username !== "" && password !== ""){
    window.location = "Error.html"; // Redirecting to other page.
    return false;
    }
    else{
        alert("Place. Enter Your Username Or Password ");
    if( attempt == 0){
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
}