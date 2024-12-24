let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  let username = form.username.value;
  let email = form.email.value;
  let password = form.password.value;
  let gender = form.gender.value;
  let mobile = form.mobile.value;


//logic is check whether email is present in the DB
fetch("http://localhost:3000/users+")

  alert("signup sucessfull")
})