var user = $('input[name=Username]');
var ps = $('input[name=Password]');
var jsButton = $('input[type=button]');
var message = $('.secretContainer');
$(document).ready(function() {
  jsButton.on("click", display)

  function display() {
    var name = user.val();
    var psword = ps.val();
    console.log(name);
    console.log(psword);
    if(name === "a" && psword === "a"){
      // message.append(`<h2>Thank you for Logging in!</h2>`
      window.location.href = "home.html";
    }
    else{
      alert("please enter valid stuff");
    }
  }
})
