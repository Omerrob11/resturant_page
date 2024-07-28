import peperoni from '../assets/images/peperoni.jpeg'
import regular from '../assets/images/regular.jpeg'
import veggie from '../assets/images/veggie.jpeg'

import append from '../functions/append';

function loadMenu () {


    const contentContainer = document.getElementById("content");


    const menuContainer = document.createElement("div");

    const peperoniCard = addMenuCard(peperoni,"peperoni","tomatoes, garlic, peproni");
    const regularCard = addMenuCard(regular,"regular","extra Cheese, olives, and sweet home tomatoes");
    const veggieCard = addMenuCard(veggie,"veggie","veggie tomatoes, veggie meat, veggie everything");

    append(menuContainer,peperoniCard);
    append(menuContainer,regularCard);
    append(menuContainer,veggieCard);

    contentContainer.appendChild(menuContainer);



}

function addMenuCard(img,title,info) {

    const menuCard = document.createElement("div");

    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;

    const cardInfo = document.createElement("p");
    cardInfo.textContent = info;

    const cardImg = document.createElement("img");
    cardImg.src = img

    append(menuCard,cardTitle);
    append(menuCard,cardInfo);
    append(menuCard,cardImg);


    return menuCard;


}

export default loadMenu;