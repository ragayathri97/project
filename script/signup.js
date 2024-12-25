import { baseUrl } from "./baseUrl.js";


let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  let username = form.username.value;
  let email = form.email.value;
  let password = form.password.value;
  let gender = form.gender.value;
  let mobile = form.mobile.value;
  let userObj = { username, email, password, gender, mobile };
  
  /// logic is check whether email is present in the DB
  fetch(`${baseUrl}/users`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => el.email == email);
      if (user.length != 0) {
        /// user present
        alert("User already registred, please login");
        window.location.href = "login.html"
      } else {
        /// user is not present
        /// push the user into json server
        fetch(`${baseUrl}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userObj),
        }).then(() => {
          alert("Signup Sucessfull");
          window.location.href = "login.html"
        });
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Something went wrong, Please try again later");
    });
});