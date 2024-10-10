// Variable pour cibler la galerie dans le DOM
const gallery = document.querySelector(".gallery");
const filters = document.querySelector(".filters");

// Fonction pour récupérer les travaux depuis l'API
async function getWorks() {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();
    return works;
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
  }
}

// Récupération pour récupérer les catégories depuis l'API
async function getCategorys() {
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    return await response.json();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des catégories :",
      error.message
    );
  }
}

// Fonction pour charger la page au chargement initial
function loadingPage() {
  displayGalleryProjets();
  displayCategorysButtons().then(() => {
    filterCategorys();
  });
}
//Si utilisateur connecté :
//Affichage et déconnexion via Logout
async function displayAdminInterface() {
  document.addEventListener("DOMContentLoaded", function () {
    const logged = window.sessionStorage.getItem("logged");

    if (logged === "true") {
      displayAdminTopBar();
      updateTitleWithEditButton();
      filters.style.display = "none";
       // Ajoutez ici le code pour le reste de l'interface d'administration
    }
  });
}

// Fonction pour afficher la barre du haut du mode administrateur
function displayAdminTopBar() {
  const newDiv = document.createElement("div");
  const iconElement = document.createElement("i");
  const titleEditionMod = document.createElement("p");

  // Ajoutez ici le code pour créer la barre noire et le bouton "Modifier"
  // par exemple, vous pouvez ajouter des classes CSS, attributs, événements, etc.

  // Ajout de la nouvelle div au début de body
  document.body.insertBefore(newDiv, document.body.firstChild);
}

// Fonction pour mettre à jour le titre avec le bouton "Modifier"
function updateTitleWithEditButton() {
  // Ajoutez ici le code pour mettre à jour le titre avec le bouton "Modifier"
  // par exemple, vous pouvez modifier le contenu HTML, ajouter des classes, attributs, événements, etc.
}

// Appel des fonctions pour charger la page et afficher l'interface d'administration
loadingPage();
displayAdminInterface();

function displayAdminTopBar() {
  const newDiv = document.createElement("div");
  const iconElement = document.createElement("i");
  const titleEditionMod = document.createElement("p");
  const body = document.querySelector("body");

  if (window.sessionStorage.getItem("logged") === "true") {
    // Code pour la barre noire
    const barreNoire = document.createElement("div");
    barreNoire.className = "barre-noire";

    // Ajouter votre code ici pour les éléments de la barre noire (logo, titre, etc.)

    newDiv.appendChild(barreNoire);
  }

  // Ajout de la nouvelle div au début de body
  body.insertBefore(newDiv, body.firstChild);
}















// Variable pour cibler la galerie dans le DOM
/**const gallery = document.querySelector(".gallery");
const filters = document.querySelector(".filters");

// Fonction pour récupérer les travaux depuis l'API
async function getWorks() {
  try {
    const response = await fetch("http://localhost:5678/api/works");
    const works = await response.json();
    return works;
  } catch (error) {
    console.error("Erreur lors de la requête :", error);
  }
}

// Récupération pour récupérer les catégories depuis l'API
async function getCategorys() {
  try {
    const response = await fetch("http://localhost:5678/api/categories");
    return await response.json();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des catégories :",
      error.message
    );
  }
}

// Fonction pour charger la page au chargement initial
function loadingPage() {
  displayGalleryProjets();
  displayCategorysButtons().then(() => {
    filterCategorys();
  });
}

loadingPage();

// Fonction pour afficher les travaux dans le DOM
async function displayGalleryProjets() {
  try {
    // Nettoyage de la galerie avant ajout de nouveaux éléments
    gallery.innerHTML = "";

    // Récupérer les travaux depuis l'API
    const works = await getWorks();

    // Créer les éléments de la galerie
    works.forEach((work) => {
      createWorkElement(work);
    });
  } catch (error) {
    console.error("Erreur lors de l'affichage de la galerie :", error);
  }
}

function createWorkElement(work) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figcaption = document.createElement("figcaption");
  img.src = work.imageUrl;
  img.alt = work.title;
  figcaption.textContent = work.title;
  figure.appendChild(img);
  figure.appendChild(figcaption);
  gallery.appendChild(figure);
}

// Fonction pour afficher les boutons dynamiquement
async function displayCategorysButtons() {
  console.log("loadingPage executed");
  const categorys = await getCategorys();
  if (categorys) {
    categorys.forEach((category) => {
      const btn = document.createElement("button");
      btn.textContent = category.name;
      btn.id = category.id;
      btn.classList.add("clic"); 
      filters.appendChild(btn);
    });
  }
}

// Fonction pour que le bouton fonctionne
function filterCategorys() {
  const allButtons = document.querySelectorAll(".filters button");

  allButtons.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const allStoredWorks = await getWorks();
      const btnId = e.target.id;

      gallery.innerHTML = "";
      allStoredWorks.forEach((work) => {
        if (btnId == work.categoryId || btnId == "0") {
          createWorkElement(work);
        }
      });

      allButtons.forEach((button) => {
        button.classList.remove("active");
      });

      e.target.classList.add("active");
    });
  });
  document.getElementById("0").classList.add("active");
}

//Smooth scrool
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  });
});

//Si utilisateur connecté :
//Affichage et déconnexion via Logout
async function displayAdminInterface() {
  document.addEventListener("DOMContentLoaded", function () {
    const logged = window.sessionStorage.getItem("logged");

    if (logged === "true") {
      displayAdminTopBar();
      updateTitleWithEditButton();
      filters.style.display = "none";
      header.style.margin = "100px 0px 50px 0px";

      loginLink.textContent = "Logout";

      loginLink.addEventListener("click", () => {
        window.sessionStorage.setItem("logged", "false");
      });
    } else {
      console.log("L'utilisateur n'est pas connecté");
    }
  });
}

// Fonction pour afficher la barre du haut du mode administrateur
function displayAdminTopBar() {
  const newDiv = document.createElement("div");
  const iconElement = document.createElement("i");
  const titleEditionMod = document.createElement("p");

  newDiv.className = "editionMod";
  iconElement.className = "fa-regular fa-pen-to-square";
  titleEditionMod.textContent = "Mode édition";

  newDiv.appendChild(iconElement);
  newDiv.appendChild(titleEditionMod);

  // Ajout de la nouvelle div au début de body
  body.insertBefore(newDiv, body.firstChild);
}

// Fonction pour changer mon titre Mes projets et ajouter le "Modifier"
function updateTitleWithEditButton() {
  const selectTitlePortfolio = document.querySelector("#portfolio h2");
  const newDiv = document.createElement("div");
  newDiv.className = "editionModPortfolio";
  const clonedTitle = selectTitlePortfolio.cloneNode(true);
  selectTitlePortfolio.parentNode.replaceChild(newDiv, selectTitlePortfolio);
  newDiv.appendChild(clonedTitle);

  const iconElement = createIconElement("fa-regular fa-pen-to-square");
  const textElement = document.createElement("p");
  textElement.textContent = "Modifier";
  textElement.className = "modify";

  newDiv.appendChild(iconElement);
  newDiv.appendChild(textElement);

  textElement.addEventListener("click", () => {
    displayContainerModals();
  });
}
displayAdminInterface();

// Fonction pour créer un élément i avec une classe donnée
const createIconElement = (className) => {
  const iconElement = document.createElement("i");
  iconElement.className = className;
  return iconElement;
};


// Fonction pour afficher la barre du haut du mode administrateur
function displayAdminTopBar() {
  const newDiv = document.createElement("div");
  const iconElement = document.createElement("i");
  const titleEditionMod = document.createElement("p");

  // Ajoutez ici le code pour la création de la barre noire

  // Ajout de la nouvelle div au début de body
  body.insertBefore(newDiv, body.firstChild);
}

// Reste du code existant...

// Appel de la fonction pour afficher la barre du mode administrateur
displayAdminTopBar();

// Fonction pour afficher la barre du haut du mode administrateur
function displayAdminTopBar() {
  const newDiv = document.createElement("div");
  const iconElement = document.createElement("i");
  const titleEditionMod = document.createElement("p");

  if (window.sessionStorage.getItem("logged") === "true") {
    // Code pour la barre noire
    const barreNoire = document.createElement("div");
    barreNoire.className = "barre-noire";
    newDiv.appendChild(barreNoire);

    // Ajoutez ici le code pour le reste de la barre noire (logo, titre, etc.)
  }

  // Ajout de la nouvelle div au début de body
  body.insertBefore(newDiv, body.firstChild);
}**/