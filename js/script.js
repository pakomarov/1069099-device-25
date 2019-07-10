var linkSupport = document.querySelector(".button-support");

var popupSupport = document.querySelector(".modal-support");
var closeSupport = popupSupport.querySelector(".modal-support .modal-close");

var form = popupSupport.querySelector("form");
var userName = popupSupport.querySelector("#support-name");
var userEmail = popupSupport.querySelector("#support-email");
var userMessage = popupSupport.querySelector("#support-message");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

var mapLink = document.querySelector(".map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

try {
  storageName = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageEmail = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

linkSupport.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSupport.classList.add("modal-show");

  if (storageName) {
    userName.value = storageName;
    userEmail.focus();
  } else {
    userName.focus();
  }
  if (storageEmail) {
    userEmail.value = storageEmail;
    userMessage.focus();
  }
});

closeSupport.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSupport.classList.remove("modal-show");
  popupSupport.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !userMessage.value) {
    evt.preventDefault();
    popupSupport.classList.remove("modal-error");
    popupSupport.offsetWidth = popupSupport.offsetWidth;
    popupSupport.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupSupport.classList.contains("modal-show")) {
      popupSupport.classList.remove("modal-show");
      popupSupport.classList.remove("modal-error");
    }
  }
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
