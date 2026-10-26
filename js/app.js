
function ouvriMenu() {

    const menu = document.getElementById(
        "navigation-principale"
    );

    const bouton = document.querySelector(
        ".Header-menu-mobile"
    );

    if (!menu || !bouton) {
        console.error("Menu mobile introuvable !");
        return;
    }

    const estOuvert = menu.classList.toggle("menu-open");

    bouton.setAttribute(
        "aria-expanded",
        String(estOuvert)
    );

    bouton.setAttribute(
        "aria-label",
        estOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );

}
