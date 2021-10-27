import { cardsImg } from "./media.js";

export const renderImg = function getImg() {
    const cartItem = document.getElementById('galery');
    for (var i = 0; i < cardsImg.length; i++) {
        cartItem.insertAdjacentHTML("beforeend", '<div class="product-item"><img class ="img" src ="' + cardsImg[i].url + '" alt = "Some img"><div class = "desc"><h3> ' + cardsImg[i].name + '</h3></div></div>');
    };
}