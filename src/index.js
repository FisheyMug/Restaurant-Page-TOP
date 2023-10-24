import { generateHomepage } from "./homepage";
import { generateMenuPage } from "./menu";
import { deleteAllContent } from "./deleteContent";
import { generateContactPage } from "./contact";

const pageContent = document.querySelector("#content");

//Generate HomePage
let homePageContent = generateHomepage();
pageContent.appendChild(homePageContent);

// create even listeners
let homepageLink = document.getElementById("home");
let menuPageLink = document.getElementById("menu");
let contactPageLink = document.getElementById("contact")

menuPageLink.addEventListener("click", () => {
    deleteAllContent();
    let menuPageContent = generateMenuPage();
    pageContent.appendChild(menuPageContent);
})

homepageLink.addEventListener("click", () => {
    deleteAllContent();
    let homePageContent = generateHomepage();
    pageContent.appendChild(homePageContent);
})

contactPageLink.addEventListener("click", () => {
    deleteAllContent();
    let contactPageContent = generateContactPage();
    pageContent.appendChild(contactPageContent);
})