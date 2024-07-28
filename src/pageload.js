function createHeader() {
    const header = document.createElement("header");
    header.classList.toggle("header");

    return header;

}

function createTitle() {
    const title = document.createElement("h1");
    title.textContent = "Welcome to the world best bolonzed website";
    return title;
}


function createNav() {
    const nav = document.createElement("nav");
    nav.classList.toggle("nav_con");

    return nav;
}

function createMenuItems () {
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const contactBtn = document.createElement("button");

    homeBtn.classList.toggle("nav_item");
    homeBtn.classList.toggle("home_btn");

    menuBtn.classList.toggle("nav_item");
    menuBtn.classList.toggle("menu_btn");

    contactBtn.classList.toggle("nav_item");
    contactBtn.classList.toggle("contact_btn");


    homeBtn.textContent = "home"
    menuBtn.textContent = "menu"
    contactBtn.textContent = "contact"

    return [homeBtn,menuBtn,contactBtn]

}


function intitalLoad () {
    const header = createHeader();
    const nav = createNav();
    const btnsArray = createMenuItems();
    const title = createTitle();
    btnsArray.forEach(item => {
        nav.appendChild(item)
    });
    header.appendChild(title);
    header.appendChild(nav);

    const container = document.getElementById("content");
    container.appendChild(header);
}


export default intitalLoad;