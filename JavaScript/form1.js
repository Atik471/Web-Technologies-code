function validate(event) {
	event.preventDefault();

	const uname = event.target.uname.value;
	const pass = event.target.pass.value;
	const email = event.target.email.value;

	// console.log(uname, pass, email);


	if(uname == "" || pass == "" || email == "")
	{
		alert("Fields cannot be empty!");
		return false;
	}

	if(pass.length < 6)
	{
		alert("Password must have at least 6 characters!")
		return false;
	}

	if(!email.includes('@') || !email.includes('.'))
	{
		alert("Inavlid Email!");
		return false;
	}


	return true;



}