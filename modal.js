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
const submitBtn = document.getElementById("submit-btn");
const modalClose = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
const form = document.getElementsByName('reserve');
const confirmationMsg = document.getElementById("confirmation");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const nbTournament = document.getElementById("quantity");
const locations = document.querySelectorAll("input[type=radio]:checked");
const checkbox = document.querySelectorAll("input[type=checkbox]");
const confirm = document.getElementById("confirm-modal");

	//	EVENTS

// launch modal event

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event 

modalClose.addEventListener("click", closeModal);

	//	Display modal

// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}

// close modal form when click on cross

function closeModal() {
  modalbg.style.display = "none";
 
}

// close confirmation msg when click on cross

function closeConfirmationMsg() {
	confirmationMsg.style.display = "none";
	
}

// keep modal

/*function keepModal(form) {
	form[0].addEventListener('submit', (e) => {
		e.preventDefault();
	  });
}*/


// error messages

const errorMessages = {
  	lastError: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstError: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	mailError: "Veuillez entrer une adresse email valide.",
	birthdateError: "Veuillez entrer une date de naissance valide.",
	nbTournamentError: "Veuillez entrer un nombre valide.",
	locationError: "Veuillez choisir une ville.",
	checkboxError: "Veuillez accepter les conditions d'utilisations.",
};

// Regex 

const Regex = {
	 NoNbRegex : /^[0-9]/,
	 mailRegex : /^\S+@\S+\.\S+$/,
	 //birthdateRegex : /^([0-9])/,
	 nbRegex : /^[0-9]+$/,
};

// Show the confirmation message

function isValid() {
	modalbg.style.display = "none";
	confirmationMsg.style.display = "flex";
	
}

// remove error messages

function removeErrors() {
	let invalidInput = document.querySelectorAll('.formdata[data-error-visible=true]');
	for (input of invalidInput) {
		invalidInput.setAttribute('data-error-visible', false);
		invalidInput.setAttribute('data-error', "");
	}
	
}

// Show error messages 

function isNotvalid(formData, message) {
	formData.parentNode.setAttribute("data-error-visible", true);
	formData.parentNode.setAttribute("data-error", message);
} 

// input's validation conditions

function firstValidation() {
	let inputValue = firstName.value;
	if (inputValue !== null && inputValue.length >= 2 && inputValue !== Regex.NoNbRegex && inputValue.replace(/^\s+|\s+$/gm,'')) {
    	return true;
  }
	else {
		return false
  }
}

function lastValidation() {
	let inputValue = lastName.value;
	if (inputValue !== null && inputValue.length >= 2 && inputValue !== Regex.NoNbRegex && inputValue.replace(/^\s+|\s+$/gm,'')){
		return true;
	} 
	else {
		return false ;
	} 
}

function emailValidation() {
	let inputValue = mail.value;
	if (Regex.mailRegex.test(mail.value && inputValue.replace(/^\s+|\s+$/gm,''))) {
		return true;
	}
	else {
		return false ;
	}
}

function birthdateValidation() {
	let birthdateValue = new Date(birthdate.value);
	let today = new Date();
	if (birthdateValue.toString() !== "Invalid Date") {
		if (
			birthdateValue.getDate() >= today.getDate() &&
			birthdateValue.getMonth() == today.getMonth() &&
			birthdateValue.getFullYear() == today.getFullYear()
		) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}

function nbTournamentValidation() {
	if (Regex.nbRegex.test(nbTournament.value) > 0) {
		return true;
	} 
	else {
		return false ;
	}
}

function locationValidation() {
	if (locations.length == null){
		return false ;
	}
	else {
		return true ;
	}
	
}

function checkboxValidation() {
  if (checkbox.lenght == null) {
    return false ;
  } 
	else {
    return true ;
  }
}

// validation event

submitBtn.addEventListener("click",validation);

// Validation

 function validation(event) {	
	event.preventDefault();
	let isValidInput = true ;
	removeErrors();
	if (!firstValidation()) {
		isValidInput = false
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
		isNotvalid(locations, errorMessages.locationError);
	}
	if (!checkboxValidation()) {
		isValidInput = false;
		isNotvalid(checkbox, errorMessages.checkboxError);
	}
	else if (isValidInput = true) {
		isValid();
		
	}
}


