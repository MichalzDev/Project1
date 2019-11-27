var checkbox = document.querySelector("input[name=checkbox]");
var modal = document.querySelector(".modal");
var modal2 = document.querySelector(".modal-wrapper");
var closeButton = document.getElementById("modal_x");
var closeButton2 = document.getElementById("modal_x2");

var trigger = document.querySelector(".sign-up-button");
var trigger2 = document.querySelector(".menu-sign-up");
var trigger3 = document.getElementById("sign-up-side");
var trigger4 = document.querySelector(".sign-in-button");
var trigger5 = document.getElementById("sign-in-side");
var submit = document.getElementById('submit');
var submitLogin = document.getElementById('submitLogin');

checkbox.addEventListener( 'change', function()
{
    if(this.checked)
    {
          document.getElementById('menu').style.transform = "translate(0,0)";
    } else
    {
          document.getElementById('menu').style.transform = "translate(100%,0)";
    }
});

function toggleModal()
{
  if(checkbox.checked === true)
  {
    checkbox.click();
  }
  modal.classList.toggle("show-modal");
}

function windowOnClick(event)
{
    if (event.target === modal)
    {
      toggleModal();
    }
}
function toggleModal2()
{
  modal2.classList.toggle("show-modal");
}

function windowOnClick2(event)
{
    if (event.target === modal2)
    {
      toggleModal2();
      console.log("1");
    }
}


function isEmpty(str)
{
  return (!str || str.length === 0);
}
function isWhiteSpace(str)
{
  var ws = "\t\n\r ";
  for (i = 0; i < str.length; i++)
  {
    var c = str.charAt(i);
     if (ws.indexOf(c) > -1)
     {
       return true;
     }
   } return false;
 }

 function checkString(str, msg)
 {
   if (isWhiteSpace(str) || isEmpty(str))
   {
     alert(msg);
     return false;
    }
     else
     {
       return true;
     }
   }
   function checkPassword(str, msg)
   {
     checkString(str, msg)
     if(str.value < 5)
     {
       alert("Password to short");
       return false;
     }
     else
     {
       return true;
     }
   }
function checkEmail(str)
{
  if (isWhiteSpace(str))
  {
    alert("Enter valid e-mail");
  }
  else
  {
    at = str.indexOf("@");
    if (at < 1)
    {
      alert("Invalid e-mail");
      return false;
    }
     else
    {
      var l = -1;
      for (var i = 0; i < str.length; i++)
      {
        var c = str.charAt(i);
        if (c == ".") l = i;
      }
      if ((l < (at + 2)) || (l == str.length - 1))
      {
       alert("Invalid e-mail");
      }
    }
      return true;
    }
  }
function checkLogin(lgn,psw)
{
    if(lgn === 'Admin1' && psw === '12345')
    {
      alert("Welcome "+lgn);
      return true;
    }
    else
    {
      alert("Incorrect login or password");
      return false;
    }
}
function loginin()
{
  var lgn1 = document.forms["sign-in-form"]["login"].value;
  var psw1 = document.forms["sign-in-form"]["password"].value;
  checkLogin(lgn1,psw1);
}
function validate()
{
  var login = document.forms["sign-up-form"]["login"].value;
  var password = document.forms["sign-up-form"]["password"].value;
  var email = document.forms["sign-up-form"]["email"].value;
  checkEmail(email);
  checkString(login, "Invalid login");
  checkPassword(password, "Invalid password");
}

submitLogin.addEventListener("click", loginin);
trigger.addEventListener("click", toggleModal);
trigger2.addEventListener("click", toggleModal);
trigger3.addEventListener("click", toggleModal);
trigger4.addEventListener("click", toggleModal2);
trigger5.addEventListener("click", toggleModal2);
closeButton.addEventListener("click", toggleModal);
closeButton2.addEventListener("click", toggleModal2);

window.addEventListener("click", windowOnClick);
window.addEventListener("click", windowOnClick2);
submit.addEventListener("click", validate);
