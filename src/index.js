//entry point for the app
// takes all the styles from here
import intitalLoad from './pageload'
// import './style.css'
import './styles/style.css'
intitalLoad();

const pageBtns = (function () {
    const homeBtn = document.querySelector(".home_btn");
    const contactBtn = document.querySelector(".contact_btn");
    const menuBtn = document.querySelector(".menu_btn");

    return {homeBtn,contactBtn,menuBtn}
})();

console.log(pageBtns)