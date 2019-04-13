function grabData() {
	var fullName = document.getElementById("fullName").value;
	console.log(fullName);
	var email = document.getElementById("email").value;
	console.log(email);
	var password = document.getElementById("password").value;
	console.log(password);
	var tut = document.querySelector('input[type = radio]:checked').value;
	console.log(tut);
	var subject = document.getElementById("subject").value;
	console.log(subject);
	var college = document.getElementById("college").value;
	console.log(college);
}