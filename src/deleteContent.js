function deleteAllContent() {
    let pageContent = document.querySelector("#content");
    while (pageContent.firstChild) {
        pageContent.removeChild(pageContent.firstChild)
    }
}

export {deleteAllContent};