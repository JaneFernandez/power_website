// index.js - logique du quiz d'objectif (page index.html)
//
// Aucun gestionnaire d'événement inline (onclick) dans le HTML :
// les écouteurs sont attachés ici via addEventListener(), pour une
// séparation claire entre structure (HTML) et comportement (JS).

document.addEventListener('DOMContentLoaded', function () {
    var boutonsObjectif = document.querySelectorAll('.btn-objectif');
    var champObjectif = document.getElementById('hidden-goal-id');
    var formulaire = document.getElementById('formulaire-email');
    var champNom = document.getElementById('champ-nom');

    /**
     * Affiche le formulaire d'inscription et mémorise l'objectif choisi.
     * @param {string} id - identifiant de l'objectif sélectionné
     *   (ex: "perte_de_poids", "renforcement_musculaire", "nutrition")
     */
    function choisir(id) {
        champObjectif.value = id;
        formulaire.style.display = 'block';

        // Amène le focus clavier vers le premier champ du formulaire
        // pour une navigation fluide (Cr 1.c.4).
        if (champNom) {
            champNom.focus();
        }
    }

    boutonsObjectif.forEach(function (bouton) {
        bouton.addEventListener('click', function () {
            choisir(bouton.dataset.objectif);
        });
    });
});
