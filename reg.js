function validDate() {
  var firstName = document.querySelector("#fname").value;

  var lastName = document.querySelector("#lname").value;

  var eMail = document.querySelector("#email").value;

  var pwd = document.querySelector("#pwd").value;

  var confirmPassword = document.querySelector("#cpwd").value;

  var birthDate = document.querySelector("#bdate").value;

  var phone = document.querySelector("#phn").value;

  var age = document.querySelector("#ag").value;

  var address = document.querySelector("#adr").value;

  var validFName = validDateFName(firstName);
  console.log("first name is" + validFName);

  var isValidLName = validDateLName(lastName);
  console.log("second name is" + isValidLName);

  var isValidEmail = validDateEmail(eMail);
  console.log("mail-id is" + isValidEmail);

  var isValidPwd = validDatePwd(pwd);
  console.log("password is" + isValidPwd);

  var isValidCpwd = validDateCPwd(pwd, confirmPassword);
  console.log("confirm is" + isValidCpwd);

  var isValidDob = validDateDob(birthDate);
  console.log("date of birth is" + isValidDob);

  var isValidPhno = validDatePhno(phone);
  console.log("phone number is" + isValidPhno);

  var isValidAge = validDateAge(age);
  console.log("age is" + isValidAge);

  var isValidAddress = validDatePwd(address);
  console.log("address is" + isValidAddress);

 
//   if (
//     isValidFName &&
//     isValidLName &&
//     isValidEmail &&
//     isValidPwd &&
//     isValidCpwd &&
//     isValidDob &&
//     isValidPhno &&
//     isValidAge &&
//     isValidAddress
//   ) {
//     return true;
//   }
  return false;
}

function validDateFName(firstName) {
  var nameFPattern = /^[A-Z]+$/i;

  var validFName = nameFPattern.test(firstName);
  var fNameErr = document.getElementById("fNameErr");
  if(!firstName){
    fNameErr.innerHTML = "Please enter this field";
    fNameErr.style.color = "red";
    fNameErr.style.display = "block";
  }
 else if (validFName == false) {
    fNameErr.innerHTML = "invalid first-name";
    fNameErr.style.color = "red";
    fNameErr.style.display = "block";
  } else {
    
    fNameErr.style.display = "none";
  }
  return validFName;
}

function validDateLName(lastName) {
  var nameLPattern = /^[A-Z]+$/i;

  var validLName = nameLPattern.test(lastName);
  var lNameErr = document.getElementById("lNameErr");
  if(!lastName){
    lNameErr.innerHTML = "Please enter this field";
    lNameErr.style.color = "red";
    lNameErr.style.display = "block";
  }
 else if (validLName == false) {
    lNameErr.innerHTML = "invalid Last-name";
    lNameErr.style.color = "red";
    lNameErr.style.display = "block";
  } else {
    lNameErr.style.display = "none";
  }
  return validLName;
}

function validDateEmail(eMail) {
  var nameEPattern = new RegExp("/^[^s@]+@[^s@]+.[^s@]+$/");
  var validEMail = nameEPattern.test(eMail);
  var mailErr = document.getElementById("mailErr");
  if(!eMail){
    mailErr.innerHTML = "Please enter this field";
    mailErr.style.color = "red";
    mailErr.style.display = "block";
  }
    else if (validEMail == false) {
    mailErr.style.color = "red";
    mailErr.style.display = "block";
    mailErr.innerHTML = "invalid email";
  } else {
    mailErr.style.display = "none";
  }
  return validEMail;
}

function validDatePwd(pwd) {
  var pwdPattern = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );
  var isValidPwd = pwdPattern.test(pwd);
  var pwdErr = document.getElementById("pwdErr");
  
  if(!pwd){
    pwdErr.style.color = "red";
    pwdErr.style.display = "block";
    pwdErr.innerHTML = "Please enter this field";
  }
  else if (isValidPwd == false) {
    pwdErr.style.display = "block";
    pwdErr.innerHTML = "invalid password";
    pwdErr.style.color = "red";
  } else {
    pwdErr.style.display = "none";
  }
  return isValidPwd;
}function validDateCPwd(password, confirmPassword) {
  var cpwdPattern = new RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );

  var isValidCpwd = cpwdPattern.test(confirmPassword);

  var cpwdErr = document.getElementById("cpwdErr");
  if (!confirmPassword) {
    cpwdErr.style.display = "block";
    cpwdErr.innerHTML = "Please enter valid field";
    cpwdErr.style.color = "red";
  } else if (password !== confirmPassword) {
    cpwdErr.style.display = "block";
    cpwdErr.innerHTML = "Password and confirm password doesnt match";
    cpwdErr.style.color = "red";
  }
  else {
    cpwdErr.style.display = "none";
  }
  return isValidCpwd;
}     
function validDateDob(birthDate) {
  var dobPattern = new RegExp("^({[0-94})-([0-9]{2})-([0-9]{2})");
  console.log(birthDate);

  var isValidDob = dobPattern.test(birthDate);

  var dobErr = document.getElementById("dobErr");
  if(!birthDate){
    dobErr.style.color = "red";
    dobErr.style.display = "block";
    dobErr.innerHTML = "Please enter this field";
  }
  else if (isValidDob == false) {
    dobErr.style.display = "block";
    dobErr.innerHTML = "invalid date of birth";
    dobErr.style.color = "red";
  } else {
    dobErr.style.display = "none";
  }
  return isValidDob;
}

function validDatePhno(phone) {
  var phnoPattern = new RegExp("[6-9]{1}[0-9]{9}");

  var isValidPhno = phnoPattern.test(phone);

  var phErr = document.getElementById("phErr");
  if (isValidPhno == false) {

    phErr.style.display = "block";
    phErr.innerHTML = "invalid phone number";
    phErr.style.color = "red";
  } else {
    phErr.style.display = "none";
  }
  return isValidPhno;
}

function  onKeyPressAge(event) {
    console.log('event', event);
    
    event.preventDefault();
}

function validDateAge(age) {
  var agPattern = new RegExp("[0-9]{1}[0-9]{1}[0-9]{1}");

  var isValidAge = agPattern.test(age);

  var ageErr = document.getElementById("ageErr");
  if (isValidAge == false) {
    ageErr.style.display = "block";
    ageErr.innerHTML = "invalid age";
    ageErr.style.color = "red";
  } else {
    ageErr.style.display = "none";
  }
  return isValidAge;
}

function validDateAddress(address) {
  var adrPattern = new RegExp("^[#.0-9a-zA-Zs,-]+[0-9]{6}$");
  // ex: #1, North Street, Chennai -pin- 11
  var isValidAddress = adrPattern.test(address);

  var addErr = document.getElementById("addErr");
  if (isValidaddress == false) {
    addErr.style.display = "block";
    addErr.innerHTML = "invalid date of birth";
    addErr.style.color = "red";
  } else {
    addErr.style.display = "none";
  }
  return isValidAddress;
}
