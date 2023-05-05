let usernameLabel = document.createElement("label");
let passwordLabel = document.createElement("label");
let cfrmPasswordLable = document.createElement("label");
let btn = document.getElementById("btn");

let inputUsername = document.getElementById("input-username");
let inputPassword = document.getElementById("input-pass");
let inputcnfrmPass = document.getElementById("input-confirm-pass");

// usernameLabel.setAttribute("for", "input-username");
usernameLabel.textContent = "Username: ";
passwordLabel.textContent = "Password: ";
cfrmPasswordLable.textContent = "Confirm Password: ";

inputUsername.insertAdjacentElement("beforebegin", usernameLabel);
inputPassword.insertAdjacentElement("beforebegin", passwordLabel);
inputcnfrmPass.insertAdjacentElement("beforebegin", cfrmPasswordLable);

// Ex.2
inputUsername.setAttribute("required", true);
inputPassword.setAttribute("required", true);
inputcnfrmPass.setAttribute("required", true);

// Ex.3
btn.onclick = () => {
  let pass = inputPassword.value;
  let cnfrmPass = inputcnfrmPass.value;

  if (pass !== cnfrmPass) {
    window.alert("Password does not match");
  }
  //   Ex.5
  else {
    window.alert("Register successfully");
  }
};

// Ex.4
btn.setAttribute("disabled", true);

inputUsername.addEventListener("input", checkInputs);
inputPassword.addEventListener("input", checkInputs);
inputcnfrmPass.addEventListener("input", checkInputs);

function checkInputs() {
  let user = inputUsername.value;
  let pass = inputPassword.value;
  let cnfrmPass = inputcnfrmPass.value;

  if (user == "" || pass == "" || cnfrmPass == "") {
    btn.setAttribute("disabled", true);
  } else {
    btn.removeAttribute("disabled");
  }
}
