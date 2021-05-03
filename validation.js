function validDate()
//to get form
{
//1st method
var userName=document.querySelector('#user').value
var pwd=document.querySelector('#pwd').value

// //2nd method
// var x=document.forms["first"]
// var userName=x["pwd"].value
// var pwd=x["pwd"].value

// //3rd method

// var userName=document.first.user.value;
// var pwd=document.first.pwd.value;

var isValidName=validDateName(userName);
console.log("name is"+isValidName);

var isValidPwd=validDatePwd(pwd);
console.log("password is"+isValidPwd);

if(isValidName && isValidPwd)
{
    return true;
}
return false
}


function validDateName(userName)
{
    var namePattern = new RegExp("^[a-zA-Z]");

    var validName=namePattern.test(userName);
    var nameErr=document.getElementById('nameErr');
    if(validName==false)
    {
        nameErr.innerHTML="invalid name";
        nameErr.style.color="red";
        nameErr.style.display="block"
    }else{
        nameErr.style.display="none"
    }
    return validName;
}

function validDatePwd(pwd)
{
    var pwdPattern=new RegExp
    ("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");

    var isValidPwd=pwdPattern.test(pwd);

    var pwdErr=document.getElementById('pwdErr');
    if(isValidPwd==false)
    {
pwdErr.style.display="block";
pwdErr.innerHTML="invalid password";
pwdErr.style.color="red";
    }
    else{
        pwdErr.style.display="none"
    }
return isValidPwd;
}