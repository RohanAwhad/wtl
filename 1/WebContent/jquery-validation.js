$(document).ready( function(){
	
	jQuery.validator.addMethod("special",function(value,element){
		return /^[0-9a-zA-Z]+$/.test(value);
	},"please enter something");
	$("#form1").validate({
		rules:{
			firstName: {
				required:true,
				lettersonly:true,
				maxWords:1,
			},
			lastName: {
				required:true,
				lettersonly:true,
				maxWords:1,
			},
			email: {
				required:true,
				email:true
			},
			usrID: {
				required:true,
				alphanumeric:true
			},
			userName: {
				required:true,
				email:true
			},
			password: {
				required:true,
				email:true
			},
			confirm_password: {
				required:true,
				email:true
			},
			zipcode: {
				required:true,
				email:true
			},
			phoneNumber: {
				required:true,
				email:true
			},
		},
		
			
	});
	
});