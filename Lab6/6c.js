function validateEmail() {
  let emailRegex = /[a-zA-Z\d]+@[a-zA-Z]+\.[a-z]+/;
  let email = document.getElementById('email').value;
  let emailResult = emailRegex.test(email);
  console.log(emailResult);
  return emailResult;
}

function validateNumerical() {
  let numericRegex = /\d/;
  let numericInput = document.getElementById('numeric').value;
  let numResult = numericRegex.test(numericInput);
  console.log(numResult);
  return numResult;
}

function validate() {
  if (!validateEmail()) {
    document.getElementById('email').style.backgroundColor = "#ed6b40";
    document.getElementById('emailErrorText').textContent = "Invalid Email";
  } else {
    document.getElementById('email').style.backgroundColor = "#32e82c";
    document.getElementById('emailErrorText').textContent = "";
  }
  if (!validateNumerical()) {
    document.getElementById('numeric').style.backgroundColor = "#ed6b40";
    document.getElementById('numericErrorText').textContent = "Not a numeric";
  } else {
    document.getElementById('numeric').style.backgroundColor = "#32e82c";
    document.getElementById('numericErrorText').textContent = "";
  }
}
