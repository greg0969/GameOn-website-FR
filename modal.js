function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.getElementsByName('reserve');
const confirmationMsg = document.getElementsByClassName("Confirmation");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbTournament = document.getElementById("quantity");
const locations = document.querySelectorAll(".checkbox-input[type=radio]");
const checkbox = document.getElementById("checkbox1");
const confirm = document.getElementById("confirm-modal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close form

function closeModal() {
  modalbg.style.display = "none";
}

// keep modal

/*form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});*/

// error message

const errorMessages = {
  lastError: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstError: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	mailError: "Veuillez entrer une adresse email valide.",
	birthdateError: "Veuillez entrer une date de naissance valide.",
	nbTournamentError: "Veuillez entrer un nombre valide.",
	locationError: "Veuillez choisir une ville.",
	checkboxError: "Veuillez accepter les conditions d'utilisations.",
};

function isValid() {
  confirmationMsg.style.display = "block";
}

function isNotvalid(value, message) {
	var input ;
	input = value.parentNode;
	input.setAttribute("data-error-visible", true);
	input.setAttribute("data-error", message);
}

// validation

function firstValidation() {
	let inputValue = firstName.value;
	if (inputValue !== null && inputValue.length >= 2) {
    return true;
  }
	else {
    return false;
  }
}

function lastValidation() {
	let inputValue = lastName.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}


function emailValidation() {
	let mailRegex = /^\S+@\S+\.\S+$/;
	return mailRegex.test(mail.value);
}

function birthdateValidation() {

}

function nbTournamentValidation() {
	let nbRegex = /^[0-9]+$/;
	return nbRegex.test(nbTournament.value);
}

function locationValidation() {
	for (let radio of location) {
		if (radio.checked === true) {
      return true;
    }
	}
	return false;
}

function checkboxValidation() {
  if (checkbox.checked) {
    return true
  } 
	else {
    return false
  }
}


function validation(event) {
	//event.preventDefault();
	let isValidInput = true;
	//removeAlerts();
	if (!firstValidation()) {
		isValidInput = false;
		isNotvalid(firstName, errorMessages.firstError);
	}
	if (!lastValidation()) {
		isValidInput = false;
		isNotvalid(lastName, errorMessages.lastError);
	}
	if (!emailValidation()) {
		isValidInput = false;
		isNotvalid(mail, errorMessages.mailError);
	}
	if (!birthdateValidation()) {
		isValidInput = false;
		isNotvalid(birthdate, errorMessages.birthdateError);
	}
	if (!nbTournamentValidation()) {
		isValidInput = false;
		isNotvalid(nbTournament, errorMessages.nbTournamentError);
	}
	if (!locationValidation()) {
		isValidInput = false;
		isNotvalid(location, errorMessages.locationError);
	}
	if (!checkboxValidation()) {
		isValidInput = false;
		isNotvalid(checkboxInput, errorMessages.checkboxError);
	}
	if (isValidInput) {
		isValid();
	}
}