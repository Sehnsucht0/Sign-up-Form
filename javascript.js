const password = document.querySelector(".pass");
const confirmPass = document.querySelector(".confirm-pass");
const button = document.querySelector(".create-account");
const match = document.querySelector(".pass-match");

password.addEventListener("keyup", function () {passCheck();});
confirmPass.addEventListener("keyup", function () {passCheck();});

function passCheck ()
{
    if (password.value != confirmPass.value)
    {
        password.classList.add("error");
        confirmPass.classList.add("error");
        button.setAttribute("disabled", "");
        match.textContent = "*Passwords do not match";
    }
    else
    {
        password.classList.remove("error");
        confirmPass.classList.remove("error");
        button.removeAttribute("disabled");
        match.textContent = '';
    } 
}
