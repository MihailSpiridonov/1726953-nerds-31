const openPopup = document.querySelector(".contacts-btn");
const popup = document.querySelector(".popup");
const closePopup = popup.querySelector(".popup-btn-close");
const formPopup = popup.querySelector("popup-form");
const loginPopup = popup.querySelector(".popup-login");
const emailPopup = popup.querySelector(".popup-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

openPopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("visually-hidden");

    if (storage) {
        loginLogin.value = storage;
        loginPassword.focus();
    } else {
        loginPopup.focus();
    }
});

closePopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("visually-hidden");
});

formPopup.addEventListener("submit", function(evt) {
    if(!loginPopup.value || !emailPopup.value) {
    evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", loginPopup.value);
        }
    }
});