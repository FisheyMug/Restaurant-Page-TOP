function generateHomepage () {
    let homePageContent = document.createElement("div");
    homePageContent.classList.add("homepage-content");

    //Generate text
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-div");

    let textHeader3 = document.createElement("h3");
    textHeader3.textContent = "Imagination can Sustain!";

    let textHeader4 = document.createElement("h4");
    textHeader4.textContent = "Let's Think and Eat!";

    let textParagraph = document.createElement("p");
    textParagraph.textContent = "With some thought, with soem imagination, we can let our meal time be our play time. Lets let our imagination run wild and enjoy a feast for the ages!";

    textDiv.appendChild(textHeader3);
    textDiv.appendChild(textHeader4);
    textDiv.appendChild(textParagraph);

    //Generate images
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("image-div");

    let image1 = document.createElement("img");
    let image2 = document.createElement("img");

    image1.setAttribute("src", "https://pbs.twimg.com/media/EXoZZXqXkAUW79U.jpg");
    image2.setAttribute("src", "https://i.pinimg.com/600x315/aa/4b/9a/aa4b9a1af84dbf54437fbe411350c167.jpg");
    image1.setAttribute("id", "image1");
    image2.setAttribute("id", "image2");

    imageDiv.appendChild(image1);
    imageDiv.appendChild(image2);

    homePageContent.appendChild(textDiv);
    homePageContent.appendChild(imageDiv);

    return homePageContent;
};

export {generateHomepage}