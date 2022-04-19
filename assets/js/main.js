/**
 * method to read quesbank data
 */
function readQuesBankData(){
	var quesBankJSONData = quesBankData;
	console.log("My QuesBank Data",quesBankJSONData);
}

/**
 * method to login by checking user provided credentials with stored data
 */
function login(){
	var userJSONData = userData;
	var userName = document.getElementById("userName").value;
	var password= document.getElementById("password").value;
	console.log("entered Password :",password);
	console.log("entered userName :",userName);
	if(window.localStorage.getItem('user_data')){
		var userDataArray = JSON.parse(window.localStorage.getItem('user_data'));
	}
	else{
		var userDataArray = userJSONData;
	}
	console.log("UserData",userDataArray);
	userDataArray.forEach(userData => {
		if(userName == userData.user_name && password == userData.password){
			location.href = './dashboard.html';
		}
	});
}

/**
 * method to go to registration page
 */
function gotoRegistrationPage(){
	location.href = './registrationPage.html';
}

/**
 * method to go to login page
 */
function gotologinPage(){
	location.href = './loginPage.html';
}

/**
 * method to save new user in local
 */
function savetolocal(){
	var userName = document.getElementById("fullName").value;
	var email= document.getElementById("email").value;
	var password= document.getElementById("password").value;
	var verifyHint= document.getElementById("verify").value;

	console.log(userName,email,password,verifyHint);
	var newUserData = {
		"user_name": userName,
		"password": password,
		"email": email,
		"phone": "",
		"security_ques": verifyHint
	};
	if(window.localStorage.getItem('user_data')){
		var userDataArray = JSON.parse(window.localStorage.getItem('user_data'));
	}
	else {
		var userDataArray = userData;
	}
	userDataArray.push(newUserData)
	window.localStorage.setItem("user_data",JSON.stringify(userDataArray));
	location.href = './loginPage.html';
}
