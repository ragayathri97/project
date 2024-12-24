import { baseUrl } from "./baseUrl.js";


let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let userObj = { username, email, password, gender, mobile };
  
  /// logic is check whether email is present in the DB
  fetch(`${baseUrl}/users`)
    .then((res) => res.json())
    .then((data) => {
      let user = data.filter((el, i) => el.email == email);
      if (user.length != 0) {
        /// user present
        //check for password
       if(user[0].password==password){
        alert("Login Sucess....")
        window.location.href = "todos.html"
       }
       else{
        alert("password is wrong, login with write password")
       }
       
      } else {
        alert("User not registred, please signup...")
        window.location.href = "signup.html"

      }
    })
    .catch((err) => {
      console.log(err);
      alert("Something wenr wrong, Please try again later");
    });
});