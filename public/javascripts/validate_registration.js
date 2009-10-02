/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function check_for_match(){
  var user_pwd = document.getElementById('user_password');
  var confirm_pwd = document.getElementById('confirm_password');
  if(user_pwd.value != confirm_pwd.value){
  alert("confirm password and password dont match");
  }else{ }
}

function validate_email()
{var email = document.getElementById('user_email');
  apos=email.value.indexOf("@");
  dotpos=email.value.lastIndexOf(".");
  if (apos<1||dotpos-apos<2)
    {  var email_format = document.getElementById('email_format');
       email_format.innerHTML = "Not a valid e-mail address!";

       alert(alerttxt);return false;}
  else {return true;}
}
