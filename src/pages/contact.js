import append  from "../functions/append";



function loadContact () {
    const contentContainer = document.getElementById("content");

    const contactContainer = document.createElement("div");
    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = " 📞 055 123 4567"

    const adress = document.createElement("p");
    adress.textContent =" 💀🏠 Tel aviv, 32, habima";

    append(contactContainer,phoneNumber);
    append(contactContainer,adress);
    append(contentContainer,contactContainer);

}

export default loadContact;