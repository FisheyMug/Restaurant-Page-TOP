function generateMenuPage() {
    let menuPageContent = document.createElement("div");
    menuPageContent.classList.add("homepage-content");

    //Generate text
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-div");

    let heading3 = document.createElement("h3");
    heading3.textContent = "Menu!"

    let heading4 = document.createElement("h4");
    heading4.textContent = "Use that Noggin of yours.";

    let textParagraph = document.createElement("p");
    textParagraph.textContent = "Whatever you imagine, you can eat!"

    textDiv.appendChild(heading3);
    textDiv.appendChild(heading4);
    textDiv.appendChild(textParagraph);
    menuPageContent.appendChild(textDiv);

    return menuPageContent;
}

export {generateMenuPage}