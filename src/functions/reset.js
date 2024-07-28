// reset function, to remove everything from the page but the header.

function reset() {
    const contentContainer = document.getElementById("content");

    while (contentContainer.children.length > 1) {
        contentContainer.removeChild(contentContainer.lastElementChild);
    }
}

export default reset;