'use strict'

document.addEventListener("DOMContentLoaded", function(){
    console.log('Скрипт работает корректно')
});

const contactButtonModal = document.querySelector(".contact-us");
const modalApplication = document.querySelector(".applications");
const closeModalButton = document.querySelector(".application-close");

if (contactButtonModal && modalApplication) {
    contactButtonModal.addEventListener("click", function(event) {
          modalApplication.removeAttribute("hidden");
        }
    );
}
window.addEventListener("click", function(event) {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});

closeModalButton.addEventListener("click", function(event)  {
    modalApplication.setAttribute("hidden", true);
});
