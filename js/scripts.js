var registeredUsers = []; // this array stores valid usernames until the next pageload

$(document).ready(function() {
  $("#registerBtn").on("click", validateForm);
});

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

function getUserDataObj() {
  return {
    userName: get("username"),
    firstName: get("firstName"),
    lastName: get("firstName"),
    email: get("email"),
    password: get("password"),
    confirmPassword: get("password_confirm")
  };
}

function renderRegisteredUsers() {
  registeredUsers.forEach(function(registeredUser) {
    /* var _newUser = document.createElement("li");
    _newUser.innerHTML = registeredUser;
    document.getElementById("registered-users").appendChild(_newUser); */
  });
  $("<li>")
    .text(JSON.stringify(registeredUser))
    .appendTo("#registered-users");
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
    return true;
  }
  return false;
}

function checkForCapitalLetter(sample) {
  if (sample.match(/[A-Ö]+/g) === null) {
    return true;
  }
  return false;
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
function get(abc) {
  if (typeof $('[name="' + abc + '"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="' + abc + '"]').val();
  }
}
/*document.registration.username.value; */
/*typeof document.registration.username.value === "undefined"

function getFirstName() {
  if (typeof $('[name="firstname"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="firstname"]').val();
  }
}

typeof document.registration.firstname.value === "undefined"

function getLastName() {
  if (typeof $('[name="lastname"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="lastname"]').val();
  }
}

/*typeof document.registration.lastname.value === "undefined"

function getEmail() {
  if (typeof $('[name="email"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="email"]').val();
  }
}

/*typeof document.registration.email.value === "undefined"

function getPassword() {
  if (typeof $('[name="password"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="password"]').val();
  }
}
/*typeof document.registration.password.value === "undefined"

function getConfirmPassword() {
  if (typeof $('[name="password_confirm"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="password_confirm"]').val();
  }
}
/*typeof document.registration.password_confirm.value === "undefined"

function getPhone() {
  if (typeof $('[name="phone"]').val() === "undefined") {
    return "";
  } else {
    return $('[name="phone"]').val();
  }
}
/*typeof document.registration.phone.value === "undefined"*/
