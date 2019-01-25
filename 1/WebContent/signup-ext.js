function validation(){
	
	var nameExpr = /^[a-zA-Z]+$/;
	var fname = document.forms["signup"]["firstName"].value;
	var lname = document.forms["signup"]["lastName"].value;
	var usrname = document.forms["signup"]["userName"].value;
	var alphanumeric = /^[0-9a-zA-Z]+$/;
	if (nameExpr.test(fname) == false){
		alert("First name should be contain only alphanumeric characters ");
		return false;
	}
	if (nameExpr.test(lname) == false){
		alert("Last name should be contain only alphanumeric characters ");
		return false;
	}
	
	var email = document.forms["signup"]["email"].value;
	var mailexpr = /^[0-9a-z.]+@[a-z]+[.][a-z]{2,3}$/;
	if (mailexpr.test(email) == false){
		alert("Invalid email id!");
		return false;
	}
	
	var usrID = document.forms["signup"]["usrID"].value;
	var idexpr = /^[\d]+$/
	if (idexpr.test(usrID) == false){
			alert("Not a valid User ID. Enter only Numbers.");
			return false
		}
	
	if (usrname == ""){
		alert("Fill out username.");
		return false;
	}
	if (alphanumeric.test(usrname) == false){
		alert("Not a valid username. Enter only alphanumeric.");
		return false
	}
	var pswd = document.forms["signup"]["password"].value;
	var pswdExpression = /^(?=.*[0-9])(?=.*[\W])[a-zA-Z0-9\W]{6,16}$/
	if (pswdExpression.test(pswd) == false){
		alert("Password should contain atleast one number, one special charadcter and should be of length in between 6-12 characters");
		return false
	}
	
	var contact = document.forms["signup"]["phoneNumber"].value;
	var contactexpr = /^[\d]{10}$/;
	if (contactexpr.test(contact) == false){
		alert("Not a valid Phone Number. Enter only 10 numbers.");
		return false
	}
	
	var gender = document.forms["signup"]["gender"]
	if (gender.checked == false){
		alert("Select a gender");
		return false;
	}
	
	alert("Submitted");
	return true;
}