# Portfolio personnel — Mpango Balibuno Joseph

Portfolio web personnel destiné à présenter mon profil de concepteur et développeur informatique, mes compétences, mes réalisations et mes moyens de contact.

> **État du projet :** première version en préparation pour publication. Les vérifications de sécurité, les tests finaux sur différents appareils et la mise en ligne restent à effectuer.

## Technologies utilisées

- **HTML5** : structure et contenu des pages.
- **CSS3** : mise en page, styles, grilles et adaptation aux différentes tailles d'écran.
- **JavaScript** : menu mobile et mise à jour automatique de l'année du pied de page.
- **Git** : suivi des modifications du projet.

La typographie du site utilise **Inter** ; certaines icônes reposent sur **Material Icons**.

## Structure du site

1. **Accueil** : bannière de présentation, description et liens vers les réalisations et le contact.
2. **À propos** : présentation personnelle et emplacement pour un portrait professionnel.
3. **Compétences** : six catégories présentées sous forme de cartes (programmation, applications desktop, développement web, bases de données, outils et développement mobile).
4. **Réalisations** : cartes de projets avec illustration, description et technologies utilisées.
5. **Contact** : moyens de contact et liens vers les profils professionnels.
6. **Pied de page** : identité, navigation rapide, copyright et retour en haut.

## Historique des améliorations

Cet historique retrace les principales étapes de conception de la première version. Il s'agit d'un résumé fonctionnel, et non d'un journal exhaustif des commits Git.

### 1. Structure initiale

- Création d'une page HTML organisée en sections.
- Mise en place de la navigation, des styles CSS et d'un dossier pour les images.
- Choix d'une identité visuelle hybride : sections claires et sections sombres, avec des accents bleus.

### 2. Accueil et en-tête

- Refonte de la bannière d'accueil avec image de fond, titre, présentation et boutons d'action.
- Amélioration de l'en-tête : logo, navigation vers les ancres de la page et bouton de menu mobile.
- Harmonisation des styles et des espacements.

### 3. Section « À propos »

- Réorganisation de la présentation personnelle.
- Ajout d'un emplacement pour une photographie en portrait, à gauche du texte sur grand écran.
- Adaptation de la disposition aux écrans plus étroits.
- Utilisation provisoire d'une image d'exemple, à remplacer avant publication si nécessaire.

### 4. Section « Compétences »

- Création de six cartes thématiques avec icônes et technologies associées.
- Ajout de styles de survol discrets et d'une grille responsive.
- Essai de mini-cartes avec logos de langages, puis décision de **conserver la présentation initiale**, plus épurée.

### 5. Section « Réalisations »

- Création de cartes de projets avec image, catégorie, description et technologies.
- Présentation notamment du système de gestion des jetons et de My CEVB.
- Passage de **deux à trois colonnes** sur grand écran, avec adaptation prévue sur tablette et téléphone.

### 6. Contact et pied de page

- Création de cartes pour les moyens de contact et les réseaux professionnels.
- Ajout d'un lien Facebook à la présentation.
- Création du pied de page avec navigation rapide et lien de retour en haut.
- Ajout d'un script pour actualiser automatiquement l'année du copyright.

### 7. Harmonisation et responsive

- Uniformisation de la typographie autour de la police Inter.
- Ajustement des titres, textes, marges et règles générales de dimensionnement.
- Vérification de l'affichage à différentes largeurs.
- Correction du chargement JavaScript : le fichier était nommé `qpp.js` au lieu de `app.js`.
- Implémentation et vérification du menu mobile : ouverture, fermeture et fermeture après sélection d'un lien.

### 8. Choix concernant les animations

- Étude des animations d'apparition au défilement.
- Décision de **ne pas les ajouter à la première version**. Les effets de survol CSS existants peuvent être conservés.

## Organisation indicative des fichiers

```text
portfolio/
├── index.html
├── styles/
│   └── style.css
├── js/
│   └── app.js
├── img/
│   └── ...
└── README.md
```

> Cette arborescence est indicative : elle devra être comparée aux fichiers réels du projet lors de l'audit.

## Exécution locale

Ouvrir `index.html` dans un navigateur récent. Pour un environnement de développement plus pratique, il est possible d'utiliser un serveur local (par exemple l'extension Live Server de VS Code).

## Avant la publication

- [ ] Vérifier tous les fichiers HTML, CSS et JavaScript.
- [ ] Vérifier les images, leurs chemins et leurs droits d'utilisation.
- [ ] Remplacer les liens et contenus provisoires (contacts, profils, portrait).
- [ ] Contrôler l'absence de secrets, tokens, mots de passe et données confidentielles, y compris dans l'historique Git.
- [ ] Vérifier le fichier `.gitignore` et l'état du dépôt Git.
- [ ] Tester le menu, les liens, les cartes et la navigation sur un véritable téléphone.
- [ ] Créer ou vérifier le dépôt distant GitHub, puis publier avec GitHub Pages.
- [ ] Tester le site depuis son adresse publique.

## Évolutions envisagées

- Ajouter de nouveaux projets et leurs captures réelles.
- Remplacer les éléments provisoires par les contenus définitifs.
- Réexaminer les animations dans une version ultérieure, si elles apportent une réelle valeur.

## Auteur et contributions

**Mpango Balibuno Joseph** — Concepteur et développeur informatique, auteur et responsable du projet.

**ChatGPT (OpenAI)** — Assistant IA ayant accompagné le développement du portfolio.

### Notre collaboration

Ce portfolio a été réalisé dans le cadre d'une collaboration entre Mpango Balibuno Joseph et ChatGPT (OpenAI).

- **Mpango Balibuno Joseph :** conception du projet, choix graphiques, développement, intégration du code, tests et décisions finales.
- **ChatGPT (OpenAI) :** accompagnement technique, propositions de code HTML/CSS/JavaScript, conseils d'interface, aide au débogage et documentation.

Les choix définitifs et la validation des fonctionnalités ont été assurés par l'auteur du projet.

*Un projet construit progressivement, grâce à l'apprentissage, à l'expérimentation et à la collaboration entre un développeur et une intelligence artificielle.*
*Documentation de la première version du portfolio — octobre 2026.*
