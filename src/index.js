//entry point for the app
// takes all the styles from here
import intitalLoad from './pageload'
import './styles/style.css'

import loadHome from './pages/home'
import reset from './functions/reset'
import loadMenu from './pages/menu'
import loadContact from './pages/contact'


intitalLoad();

const pageBtns = (function () {
    const homeBtn = document.querySelector(".home_btn");
    const contactBtn = document.querySelector(".contact_btn");
    const menuBtn = document.querySelector(".menu_btn");

    return {homeBtn,contactBtn,menuBtn}
})();

pageBtns.homeBtn.addEventListener("click", (e) => {
    console.log("haim shli");
    reset();
    loadHome();
})

pageBtns.menuBtn.addEventListener("click", (e) => {
    console.log("haim shli");
    reset();
    loadMenu();
})

pageBtns.contactBtn.addEventListener("click", (e) => {
    console.log("haim shli");
    reset();
    loadContact();
})

// tomrrow:
    // see the design patters of the 2 github guys, try to understand the difference
    // publish the code to github