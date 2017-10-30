function validate(){

	var u1="jayanth";
	var p1="webproject";
	var username=document.loginform.username.value;
	var password=document.loginform.password.value;

	if(username.length<4)
	{
		alert("Username must be atleast of 4 characters.");
		return false;
	}
	else if(password.length<4)
	{
		alert("Password must be atleast of 8 characters.");
		return false;
	}
	else if(username!=u1 || password!=p1)
	{
		alert("Invalid details.");
		return false;
	}
	return true;
} 