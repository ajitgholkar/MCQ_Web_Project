function readQuesBankData(){
	
	//$.getJSON("./assets/json/ques_bank.json",function(data){
	//	console.log(data);
	//});
	var quesBankJSONData = quesBankData;
	console.log("My QuesBank Data",quesBankJSONData);
	
	
}

function login(){
	var userJSONData = userData;
	console.log("UserData",userJSONData);
	var userName = document.getElementById("userName").value;
	var password= document.getElementById("password").value;
	console.log("entered Password :",password);
	console.log("entered userName :",userName);
	
	userJSONData.forEach(userData => {
		if(userName == userData.user_name && password == userData.password){
			location.href = './dashboard.html';
			console.log("in if:",userData.user_name);
		}
	});
}

function gotoRegistrationPage(){
	location.href = './registrationPage.html';
}