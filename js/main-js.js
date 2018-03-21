
var link = document.querySelector(".info-contacts-btn");
var modalContent = document.querySelector(".modal-content");
var closeModalContent = modalContent.querySelector(".modal-content-close");
var form = modalContent.querySelector("form");
var login = modalContent.querySelector("[name=name]");
var mail = modalContent.querySelector("[name=mail]");
var text = modalContent.querySelector("[name=text]");
var storageLogin = localStorage.getItem("login");
var storageMail = localStorage.getItem("mail");
var storageText = localStorage.getItem("text");
var mapOpen = document.querySelector(".open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");


link.addEventListener("click", function(event) {
	event.preventDefault();
	modalContent.classList.add("modal-content-show");
	login.focus();

	if(storageLogin && storageMail) {
		login.value = storageLogin;
		mail.value = storageMail;
		text.focus();
	} else if (storageLogin) {
		login.value = storageLogin;
		mail.focus();
	} else {
		login.focus();
	}
});

closeModalContent.addEventListener("click", function(event) {
	event.preventDefault();
	modalContent.classList.remove("modal-content-show");
	modalContent.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
	if (!login.value || !mail.value) {
		event.preventDefault();
		modalContent.classList.add("modal-error");
		if (!login.value && !mail.value) {
			login.setAttribute("required", "required");
			mail.setAttribute("required", "required");
		} 
		else if (!login.value) {
			login.setAttribute("required", "required");
		} 
		else {
			mail.setAttribute("required", "required");
		} 
	} 
	else {
		localStorage.setItem("login", login.value);
		localStorage.setItem("mail", mail.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (modalContent.classList.contains("modal-content-show")) {
			modalContent.classList.remove("modal-content-show");
		}
	}
});

mapOpen.addEventListener("click", function(event) {
 event.preventDefault();
 mapPopup.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(event) {
 event.preventDefault();
 mapPopup.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event) {
 if (event.keyCode === 27) {
 if (popup.classList.contains("modal-content-show")) {
 popup.classList.remove("modal-content-show");
 }
 }
});