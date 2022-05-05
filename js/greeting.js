const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){
	greeting.innerText = `hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
	event.preventDefault();
	const username = loginInput.value;

	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreeting(username);

	localStorage.setItem(USERNAME_KEY,username);
}


if (savedUserName === null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit);
} else{
	paintGreeting(savedUserName);
}