document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("Votre message a été envoyé avec succès !");

        form.reset();
    });

});