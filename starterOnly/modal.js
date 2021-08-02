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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

function closeModal() {
  modalbg.style.display = "none";
}

//keep modal

form[0].addEventListener('submit', (e) => {
  e.preventDefault();
});

// Validation

function isValid(condition) {
  if (!condition){
    return false;
  }
  else {
    return true;
  }
}

// show error 

function ShowErrorMessage(elemID,message,input){
  if(elemID && message){
    document.getElementById(elemID).style.display = "block";
    document.getElementById(elemID).innerText = message;
    if(input){
      input.setAttribute("aria-invalid","true");
    }
  }
  else throw new Error('erreur');
}

//hide error when corrected error

function HideErrorMessage(elemID,input) {
  if(elemID){
    document.getElementById(elemID).style.display = "none";
  }
  if(input){
    input.setAttribute("aria-invalid", "false");
  } 
}

function validation(form) { 
  let firstNameValid = isValid(form["first"].value) && isValid(form["first"].value.length >= 2);
  firstNameValid ?
    hideErrorMessage('first-error', form["first"]) : 
    ShowErrorMessage('first-error', "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", form["first"]);
  
  let lastNameValid = isValid(form["last"].value) && isValid(form["last"].value.length >= 2);
  lastNameValid ?  
    hideErrorMessage('last-error', form["last"]) : 
    ShowErrorMessage('last-error', "Veuillez entrer 2 caractères ou plus pour le champ du nom.", form["last"]); 
  
  
  let emailValid = isValid(form["email"].value) && isValid(/[A-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(form["email"].value));
  emailValid ? 
    hideErrorMessage('mail-error', form["email"]) : 
    ShowErrorMessage('mail-error', "Veuillez entrer une addresse mail valide.", form["email"]);

  let birthdateValid = isValid(form["birthdate"].value) && isValid(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/.test(form["birthdate"].value));
  birthdateValid ? 
    hideErrorMessage('birthdate-error', form["birthdate"]) : 
    ShowErrorMessage('birthdate-error', "Veuillez entrer une date de naissance.", form["birthdate"]);


  let nbTournamentValid = isValid(form["quantity"].value) && isValid(/^[0-9]+$/.test(form["quantity"].value));
  nbTournamentValid ? 
    hideErrorMessage('error-tournament', form["quantity"]) : 
    ShowErrorMessage('error-tournament', "Veuillez entrer une valeur numérique.", form["quantity"]);

  let locationValid = isValid(form.location.value);
  locationValid ?  hideErrorMessage('error-location') : ShowErrorMessage('error-location', "Veuillez sélectionner une ville.");

  let termsValid = isValid(form.terms.checked);
  termsValid ? hideErrorMessage('error-terms') : ShowErrorMessage('error-terms', "Veuillez indiquer que vous acceptez les conditions générales.");

  // Check the confirmation form, show a confirmation message
  if(
      firstNameValid 
      && lastNameValid 
      && emailValid
      && birthdateValid 
      && qteTournamentValid
      && locationValid
      && termsValid
    ) {
      document.querySelector(".modal-body").style.display = "none";
      document.querySelector(".Confirmation").style.display = "unset";
    }
}
