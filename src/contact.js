function generateContactPage() {
    let contactPageContent = document.createElement("div");
    contactPageContent.classList.add("homepage-content");

    //Generate text
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-div");

    let heading3 = document.createElement("h3");
    heading3.textContent = "Contact"

    let heading4 = document.createElement("h4");
    heading4.textContent = "The beauty of the mind";

    let textParagraph = document.createElement("p");
    textParagraph.textContent = "We are located right in your mind. No reservations no bookings required. Think and we shall appear!"

    textDiv.appendChild(heading3);
    textDiv.appendChild(heading4);
    textDiv.appendChild(textParagraph);
    contactPageContent.appendChild(textDiv);

    return contactPageContent;
}

export {generateContactPage}