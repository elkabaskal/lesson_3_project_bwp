import { cardAudio } from "./media.js";

export const renderAudio = function getAudio() {
    const cartItem = document.getElementById('sounds');
    for (var i = 0; i < cardAudio.length; i++) {
        cartItem.insertAdjacentHTML("beforeend", '<div class="product-item"><audio controls class ="img" src ="' + cardAudio[i].url + '" type="audio/mpeg"></audio><h3><div class = "desc">' + cardAudio[i].name + '</h3></div></div>');
    };
}