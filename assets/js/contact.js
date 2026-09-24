// contact.js - pré-remplissage du formulaire de contact
//
// Quand l'utilisateur arrive depuis un bouton "DÉCOUVRIR" de la page
// programmes.html (lien du type contact.html?sujet=programme), on
// présélectionne automatiquement le sujet correspondant dans le
// formulaire pour lui éviter une ressaisie.

document.addEventListener('DOMContentLoaded', function () {
    var parametres = new URLSearchParams(window.location.search);
    var sujet = parametres.get('sujet');
    var champSujet = document.getElementById('champ-sujet');

    if (sujet && champSujet) {
        var optionExiste = Array.prototype.some.call(
            champSujet.options,
            function (option) { return option.value === sujet; }
        );
        if (optionExiste) {
            champSujet.value = sujet;
        }
    }
});
