var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");
  console.log("user name: " + validateUsername());
  console.log("first name: " + validateFirstName());
  console.log("last name: " + validateLastName());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());
  console.log("phone number: " + validatePhone());

  if (
    validateUsername() &&
    validateFirstName() &&
    validateLastName() &&
    validateEmail() &&
    validatePassword() &&
    validatePhone()
  ) {
    var _newUser = getUserName();

    registeredUsers.push(_newUser);
    renderRegisteredUsers();

    if (registeredUsers.length > 5) {
      registeredUsers.shift();
    }

    // add code to update registeredUsers array with new user and call render function
    // TODO
    document.registration.reset(); // reset form input fields
  }
}

function renderRegisteredUsers() {
  registeredUsers.forEach(function(registeredUser) {
    var _newUser = document.createElement("li");
    _newUser.innerHTML = registeredUser;
    document.getElementById("registered-users").appendChild(_newUser);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 * function checkSpace(sample) {
    return sample === '' || sample.indexOf(' ') > -1;
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

function validateFirstName() {
  var _firstName = getFirstName();

  return !checkEmpty(_firstName);
}

function validateLastName() {
  var _lastName = getLastName();

  return !checkEmpty(_lastName);
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password !== _confirmPassword) {
    return false;
  }
  if (_password.length < 8) {
    return false;
  }
  if (checkForNumber(_password)) {
    return false;
  }
  if (checkForCapitalLetter(_password)) {
    return false;
  }

  /*if (!_password.match("[0-9]") === true) {
    return false;
  }

  if (!_password.match("[A-ZÅÄÖ]")) {
    return false;
  }
*/
  return true;
}

function checkForNumber(sample) {
  if (sample.match(/[0-9]+/g) === null) {
    return false;
  }
  return true;
}

function checkForCapitalLetter(sample) {
  if (sample.match(/[A-Ö]+/g) === null) {
    return false;
  }
  return true;
}

function validatePhone() {
  var _phone = getPhone();

  if (_phone.length < 6) {
    return false;
  }

  if (isNaN(_phone)) {
    return false;
  }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

function checkEmpty(sample) {
  return sample === "";
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  if (typeof document.registration.username.value === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }
}

function getFirstName() {
  if (typeof document.registration.firstname.value === "undefined") {
    return "";
  } else {
    return document.registration.firstname.value;
  }
}

function getLastName() {
  if (typeof document.registration.lastname.value === "undefined") {
    return "";
  } else {
    return document.registration.lastname.value;
  }
}

function getEmail() {
  if (typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}

function getPassword() {
  if (typeof document.registration.password.value === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}

function getConfirmPassword() {
  if (typeof document.registration.password_confirm.value === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}

function getPhone() {
  if (typeof document.registration.phone.value === "undefined") {
    return "";
  } else {
    return document.registration.phone.value;
  }
}
