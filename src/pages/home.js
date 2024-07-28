// function that creates a div elements, add the appopriate content and styles to that element
// append that function to the dom

import chef from '../assets/chef.jpeg'
function loadHome () {
    const homeContainer = document.createElement("div");
    const infoOne = document.createElement("p");
    const infoTwo = document.createElement("p");

    const img = new Image();
    img.src = chef;


    infoOne.textContent ="Best italian food in Israel";
    infoTwo.textContent ="Operates since 2024";

    append(homeContainer,infoOne);
    append(homeContainer,infoTwo);
    append(homeContainer,img);

    const contentContainer = document.getElementById("content");
    contentContainer.appendChild(homeContainer);


}

function append (container,item) {
    container.appendChild(item);
}

export default loadHome;