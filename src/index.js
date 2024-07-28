//entry point for the app
// takes all the styles from here
import intitalLoad from './pageload'
// import './style.css'
import './styles/style.css'

import loadHome from './pages/home'
import reset from './functions/reset'


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